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
    try{
      // Delegate the actual publish to the robot so it runs the single canonical
      // publish path (conflict-proof re-apply + unique hero-image generation).
      execSync(`node .github/scripts/blog-robot.mjs`, {cwd:REPO, stdio:'inherit',
        env:{...process.env, BLOG_ACTION:'publish', BLOG_MONDAY_ITEM:String(it.id)}});
      n++;
      console.log('published item', it.id);
    }catch(e){ failed++; console.error('FAILED to publish item', it.id, e.message); }
  }
  console.log('scheduler done, published', n, '| failed', failed);
  if(failed) process.exit(1);
})().catch(e=>{ console.error('scheduler error:', e.message); process.exit(1); });
