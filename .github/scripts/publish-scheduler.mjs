// Runs daily. Publishes any Monday row that is Approved AND whose Publish date has arrived.
// Publishing is delegated to blog-robot.mjs (BLOG_ACTION=publish) so there is exactly ONE
// publish code path. The robot re-inserts the finished post onto current main rather than
// merging the preview branch — merging collides every time, because each draft branch adds
// its post at the top of the same array in data/blogs.ts. The robot also re-stamps the
// post's date to the day it actually goes live.
import { execSync } from 'child_process';
const E=process.env; const REPO=process.cwd();
const shOut=(c)=>execSync(c,{cwd:REPO}).toString();
const today=new Date().toISOString().slice(0,10);

async function mondayQuery(q,v){ const r=await fetch('https://api.monday.com/v2',{method:'POST',
  headers:{'Authorization':E.MONDAY_TOKEN,'content-type':'application/json','API-Version':'2024-01'},body:JSON.stringify({query:q,variables:v})});
  return (await r.json()).data; }

(async()=>{
  const d=await mondayQuery(`query($b:[ID!]){boards(ids:$b){items_page(limit:200){items{id name column_values(ids:["${E.MONDAY_STATUS_COL}","${E.MONDAY_DATE_COL}"]){id text}}}}}`,{b:[E.MONDAY_BOARD]});
  const items=d.boards[0].items_page.items;
  shOut(`git fetch origin "+refs/heads/*:refs/remotes/origin/*"`);

  // The board is shared across clients. Other clients' rows have no preview branch in THIS
  // repo — skip them quietly instead of failing the job on every single one.
  const branches=new Set(shOut(`git branch -r --list "origin/blog/item-*"`)
    .split('\n').map(s=>s.trim().replace(/^origin\//,'')).filter(Boolean));

  let published=0, failed=0, notMine=0, waiting=0;
  for(const it of items){
    const cv=Object.fromEntries(it.column_values.map(c=>[c.id,c.text]));
    const status=cv[E.MONDAY_STATUS_COL]; const date=(cv[E.MONDAY_DATE_COL]||'').trim();
    if(status!=='Approved') continue;
    if(date && date>today){ waiting++; continue; }        // future publish date -> wait
    const branch=`blog/item-${it.id}`;
    if(!branches.has(branch)){ notMine++; continue; }      // another client's row
    try{
      execSync(`node .github/scripts/blog-robot.mjs`,
        {cwd:REPO, stdio:'inherit', env:{...process.env, BLOG_ACTION:'publish', BLOG_MONDAY_ITEM:String(it.id)}});
      published++;
      console.log('published item', it.id, '-', it.name);
    }catch(e){ failed++; console.error('FAILED to publish item', it.id, '-', it.name, '::', e.message); }
  }
  console.log(`scheduler done | published ${published} | failed ${failed} | scheduled-later ${waiting} | other-client rows skipped ${notMine}`);
  if(failed) process.exit(1);
})().catch(e=>{ console.error('scheduler error:', e.message); process.exit(1); });
