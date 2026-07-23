// Runs daily. Publishes any Monday row that is Approved AND whose Publish date has arrived.
import { execSync } from 'child_process';
import fs from 'fs';
const E=process.env; const REPO=process.cwd(); const sh=(c)=>execSync(c,{cwd:REPO}).toString();
const today=new Date().toISOString().slice(0,10);

async function mondayQuery(q,v){ const r=await fetch('https://api.monday.com/v2',{method:'POST',
  headers:{'Authorization':E.MONDAY_TOKEN,'content-type':'application/json','API-Version':'2024-01'},body:JSON.stringify({query:q,variables:v})});
  return (await r.json()).data; }
async function setPublished(item){ await mondayQuery(`mutation($b:ID!,$i:ID!,$v:JSON!){change_multiple_column_values(board_id:$b,item_id:$i,column_values:$v){id}}`,
  {b:E.MONDAY_BOARD,i:item,v:JSON.stringify({[E.MONDAY_STATUS_COL]:{label:'Published'}})}); }

(async()=>{
  const d=await mondayQuery(`query($b:[ID!]){boards(ids:$b){items_page(limit:200){items{id column_values(ids:["${E.MONDAY_STATUS_COL}","${E.MONDAY_DATE_COL}"]){id text}}}}}`,{b:[E.MONDAY_BOARD]});
  const items=d.boards[0].items_page.items;
  sh(`git config user.email "41898282+github-actions[bot]@users.noreply.github.com"`); sh(`git config user.name "github-actions[bot]"`); sh(`git fetch origin "+refs/heads/*:refs/remotes/origin/*"`);
  let n=0, failed=0;
  for(const it of items){
    const cv=Object.fromEntries(it.column_values.map(c=>[c.id,c.text]));
    const status=cv[E.MONDAY_STATUS_COL]; const date=(cv[E.MONDAY_DATE_COL]||'').trim();
    if(status!=='Approved') continue;
    if(date && date>today) continue;            // future publish date -> wait
    const branch=`blog/item-${it.id}`;
    try{
      sh(`git checkout main`); sh(`git pull origin main`);
      // Re-apply the branch's post onto current main instead of merging, so queued
      // posts never conflict at the top of the blogs array (idempotent by slug).
      const branchFile = sh(`git show origin/${branch}:src/data/blogs.ts`);
      const anchor = 'export const blogs: BlogPost[] = [';
      const ai = branchFile.indexOf(anchor);
      if(ai<0) throw new Error('anchor not found on preview branch');
      const after = branchFile.slice(ai + anchor.length);
      const start = after.indexOf('\n  {');
      const end = after.indexOf('\n  },', start);
      if(start<0 || end<0) throw new Error('could not extract post from branch');
      const blk = after.slice(start, end + '\n  },'.length);
      const f = `${REPO}/src/data/blogs.ts`;
      let cur = fs.readFileSync(f,'utf8');
      const sm = blk.match(/slug:\s*"([^"]+)"/);
      if(sm && cur.includes('slug: "'+sm[1]+'"')){
        console.log('post already on main, skipping insert for item', it.id);
      } else {
        cur = cur.replace(anchor, anchor + blk);
        if(!cur.trimEnd().endsWith('];')) throw new Error('publish insert sanity failed');
        fs.writeFileSync(f, cur);
      }
      try { sh(`git checkout origin/${branch} -- public/blog-images`); } catch(e) {}
      sh(`git add -A`);
      try { sh(`git commit -m "Publish blog (item ${it.id})"`); }
      catch(e){ console.log('nothing new to commit for item', it.id); }
      sh(`git push origin main`);
      await setPublished(it.id); n++;
      console.log('published item', it.id);
    }catch(e){ failed++; console.error('FAILED to publish item', it.id, e.message); }
  }
  console.log('scheduler done, published', n, '| failed', failed);
  if(failed) process.exit(1);
})().catch(e=>{ console.error('scheduler error:', e.message); process.exit(1); });
