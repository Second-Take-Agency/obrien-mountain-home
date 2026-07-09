// Blog Automation robot — runs unattended in GitHub Actions.
// Actions: draft (preview branch) | revise (rewrite branch from edit notes) | publish (merge branch -> main).
// Branch is keyed on the Monday item id so every step maps 1:1 to its board row.
import fs from 'fs';
import { execSync } from 'child_process';

const E = process.env;
const REPO = process.cwd();
let action = E.BLOG_ACTION||'';
let rowStatus='', rowPublishDate='';
const item   = E.BLOG_MONDAY_ITEM || '';
const branch = `blog/item-${item || (E.BLOG_SLUG||'adhoc')}`;
const prof = JSON.parse(fs.readFileSync(`${REPO}/.github/blog-profile.json`,'utf8'));
const sh = (c) => execSync(c,{cwd:REPO}).toString();

// ---------- AI (provider-swappable: gemini free-tier by default, or anthropic) ----------
async function callOnce(system, user){
  const provider = (E.AI_PROVIDER||'gemini').toLowerCase();
  if(provider==='anthropic'){
    const r = await fetch('https://api.anthropic.com/v1/messages',{method:'POST',
      headers:{'x-api-key':E.ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','content-type':'application/json'},
      body:JSON.stringify({model:E.AI_MODEL||'claude-sonnet-4-5',max_tokens:8192,system,messages:[{role:'user',content:user}]})});
    const d = await r.json();
    if(!(d.content && d.content[0] && d.content[0].text)) throw new Error('Anthropic API error ('+r.status+'): '+JSON.stringify(d).slice(0,600));
    return d.content[0].text;
  }
  const model = E.AI_MODEL||'gemini-2.5-flash';
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{
    method:'POST',headers:{'content-type':'application/json','x-goog-api-key':E.GEMINI_API_KEY},
    body:JSON.stringify({system_instruction:{parts:[{text:system}]},contents:[{role:'user',parts:[{text:user}]}],generationConfig:{temperature:0.6,maxOutputTokens:8192,responseMimeType:'application/json'}})});
  const d = await r.json();
  if(!(d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts && d.candidates[0].content.parts[0] && d.candidates[0].content.parts[0].text)) throw new Error('Gemini API error ('+r.status+'): '+JSON.stringify(d).slice(0,600));
  return d.candidates[0].content.parts[0].text;
}
async function callAI(system, user){
  let last;
  for(let i=0;i<5;i++){
    try{ return await callOnce(system,user); }
    catch(e){ last=e; const m=String((e && e.message) || e);
      if(i<4 && /(503|502|500|429|UNAVAILABLE|overloaded|high demand|RESOURCE_EXHAUSTED|fetch failed|ECONN|ETIMEDOUT)/i.test(m)){
        console.log('transient AI error, retrying in '+(3*(i+1))+'s: '+m.slice(0,120));
        await new Promise(res=>setTimeout(res,3000*(i+1))); continue; }
      throw e; }
  }
  throw last;
}

// ---------- read the client's own site for context ----------
function context(){
  const svc = fs.readFileSync(`${REPO}/src/data/services.ts`,'utf8');
  const services = [...svc.matchAll(/title:\s*"([^"]+)"[\s\S]*?longDescription:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)].map(m=>({title:m[1],detail:m[2],image:m[3]}));
  const blog = fs.readFileSync(`${REPO}/src/data/blogs.ts`,'utf8');
  const titles = [...blog.matchAll(/\n\s{4}title:\s*"([^"]+)"/g)].map(m=>m[1]);
  return {services,titles};
}
function closingBlock(services){
  const sa=prof.service_area,b=prof.business;
  return `<div style="margin-top:3.5rem;padding:2rem 1.75rem;border:1px solid #e5e7eb;border-radius:16px;background:#f8fafc;">
        <h2 style="margin:0 0 0.75rem;font-size:24px;font-weight:700;">Serving ${sa.primary_city} &amp; ${sa.region}</h2>
        <p style="margin:0 0 1rem;line-height:1.7;">${prof.client_name} provides professional ${services.map(s=>s.title.toLowerCase()).join(', ')} services throughout ${sa.primary_city} and ${sa.region} — including ${sa.cities.slice(1).join(', ')}. Licensed California contractor (Lic# ${b.license}).</p>
        <p style="margin:0 0 1.5rem;line-height:1.7;"><strong>Website:</strong> <a href="${b.base_url}">${b.website_domain}</a><br />
        <strong>Phone:</strong> <a href="tel:${b.phone_e164}">${b.phone_display}</a></p>
        <p style="margin:0;"><a href="${prof.links.estimate_cta}" style="display:inline-block;background:${prof.brand.primary_color};color:#0f172a;font-weight:700;padding:15px 32px;border-radius:999px;text-decoration:none;">Request an Estimate &rarr;</a></p>
      </div>`;
}

function pickImage(category, services){
  const c=(category||'').toLowerCase();
  const key = c.includes('deck')?'deck' : c.includes('siding')?'siding' : c.includes('fire')?'fire' : null;
  if(key){ const m=services.find(s=>s.title.toLowerCase().includes(key)); if(m&&m.image) return m.image; }
  return (prof.image_strategy&&prof.image_strategy.default)||services[0]?.image||'';
}
async function generate(revise){
  const {services,titles} = context();
  const sys = `You are a senior SEO copywriter for ${prof.client_name}, a ${prof.service_area.primary_city}/${prof.service_area.region} contractor. Voice: ${prof.brand.tone}. Write ONLY about the client's real services. Output STRICT JSON only, no code fences.`;
  const user = `SERVICES (source of truth):\n${services.map(s=>`- ${s.title}: ${s.detail}`).join('\n')}\n\nEXISTING TITLES (never duplicate):\n${titles.join('\n')}\n\nTopic: "${E.BLOG_TOPIC||''}"\nPrimary keyword: "${E.BLOG_PRIMARY_KEYWORD||''}"\nSupporting keywords: "${E.BLOG_SUPPORTING||''}"\n${revise?`REVISE the post per these editor notes: ${E.BLOG_EDIT_NOTES||''}`:''}\nRules: 800-1100 words. Intro sets ${prof.service_area.primary_city}/${prof.service_area.region} context. Use 5-8 <h2> sections; add <h3> only for genuine sub-points. At least 2 internal links from ${JSON.stringify(prof.links)}. Weave keywords in naturally. Do NOT write the closing/contact block.\nFORMAT FOR READABILITY (important): Write clear, formal, flowing prose in <p> paragraphs of 2-4 full sentences each, with space between ideas. Do NOT stack bold inline labels like "<strong>Label:</strong> text" — write natural sentences instead. Use <ul>/<ol> at most once per section and only for genuine lists, never as a substitute for prose. Keep it scannable and professional, not dense.\nOUTPUT JSON keys: {"title","slug","excerpt","category","readTime","body_html"}`;
  let raw = (await callAI(sys,user)).trim().replace(/^```json/i,'').replace(/^```/,'').replace(/```$/,'').trim();
  const g = JSON.parse(raw);
  const bodyHtml = g.body_html.trim()
    .replace(/<h2>/g,'<h2 style="margin:2.75rem 0 1rem;font-weight:700;">')
    .replace(/<h3>/g,'<h3 style="margin:2rem 0 0.75rem;font-weight:700;">')
    .replace(/<p>/g,'<p style="margin:0 0 1.5rem;line-height:1.8;">')
    .replace(/<ul>/g,'<ul style="margin:1.25rem 0 1.5rem;padding-left:1.5rem;">')
    .replace(/<ol>/g,'<ol style="margin:1.25rem 0 1.5rem;padding-left:1.5rem;">')
    .replace(/<li>/g,'<li style="margin:0.5rem 0;line-height:1.7;">');
  return {
    id:String(Date.now()).slice(-7), slug:g.slug, title:g.title, excerpt:g.excerpt,
    content:'\n      '+bodyHtml+'\n    ',
    category:E.BLOG_CATEGORY||g.category||prof.categories[0], author:prof.authors[0],
    date:E.BLOG_DATE||new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),
    image:pickImage(E.BLOG_CATEGORY||g.category||prof.categories[0], services),
    readTime:g.readTime||'8 min read',
    keywords:[E.BLOG_PRIMARY_KEYWORD,E.BLOG_SUPPORTING].filter(Boolean).join(', ')
  };
}
function removeSlug(slug){ const f=`${REPO}/src/data/blogs.ts`; let s=fs.readFileSync(f,'utf8');
  s=s.replace(new RegExp(`\\n  \\{\\n(?:[\\s\\S]*?)    slug: ${JSON.stringify(slug)}[\\s\\S]*?\\n  \\},`),''); fs.writeFileSync(f,s); }
function insert(post){ const f=`${REPO}/src/data/blogs.ts`; const s=fs.readFileSync(f,'utf8');
  const order=['id','slug','title','excerpt','content','category','author','date','dateModified','image','readTime','keywords'];
  const body=order.filter(k=>post[k]!==undefined).map(k=>`    ${k}: ${JSON.stringify(post[k])}`).join(',\n');
  const anchor='export const blogs: BlogPost[] = [';
  const out=s.replace(anchor,`${anchor}\n  {\n${body}\n  },`);
  if(!out.trimEnd().endsWith('];')) throw new Error('insert sanity failed'); fs.writeFileSync(f,out); }

async function monday(cols){ if(!item||!E.MONDAY_TOKEN) return;
  await fetch('https://api.monday.com/v2',{method:'POST',headers:{'Authorization':E.MONDAY_TOKEN,'content-type':'application/json','API-Version':'2024-01'},
    body:JSON.stringify({query:`mutation($b:ID!,$i:ID!,$v:JSON!){change_multiple_column_values(board_id:$b,item_id:$i,column_values:$v){id}}`,
      variables:{b:E.MONDAY_BOARD,i:item,v:JSON.stringify(cols)}})}); }
async function mondayName(name){ if(!item||!E.MONDAY_TOKEN) return;
  await fetch('https://api.monday.com/v2',{method:'POST',headers:{'Authorization':E.MONDAY_TOKEN,'content-type':'application/json','API-Version':'2024-01'},
    body:JSON.stringify({query:`mutation($b:ID!,$i:ID!,$v:String!){change_simple_column_value(board_id:$b,item_id:$i,column_id:"name",value:$v){id}}`,
      variables:{b:E.MONDAY_BOARD,i:item,v:name}})}); }
function previewUrl(slug){ const b=branch.replace(/[^a-zA-Z0-9]/g,'-'); return `https://${prof.deploy_preview_base}-git-${b}-${prof.vercel_scope}.vercel.app/blog/${slug}`; }

async function loadInputs(){
  if(!item || !E.MONDAY_TOKEN) return;
  const cols=["color_mm4wvg8w","long_text_mm4wmww","text_mm4xd3eq","long_text_mm4x1wk3","long_text_mm4x29jz","date_mm4w89q2"];
  const r=await fetch('https://api.monday.com/v2',{method:'POST',headers:{'Authorization':E.MONDAY_TOKEN,'content-type':'application/json','API-Version':'2024-01'},body:JSON.stringify({query:`query($i:[ID!]){items(ids:$i){id name column_values(ids:${JSON.stringify(cols)}){id text}}}`,variables:{i:[item]}})});
  const j=await r.json(); const it=j.data&&j.data.items&&j.data.items[0]; if(!it) return;
  const cv=Object.fromEntries(it.column_values.map(c=>[c.id,(c.text||'').trim()]));
  rowStatus=cv['color_mm4wvg8w']||''; rowPublishDate=cv['date_mm4w89q2']||'';
  E.BLOG_TOPIC = E.BLOG_TOPIC || cv['long_text_mm4wmww'] || '';
  E.BLOG_PRIMARY_KEYWORD = E.BLOG_PRIMARY_KEYWORD || cv['text_mm4xd3eq'] || '';
  E.BLOG_SUPPORTING = E.BLOG_SUPPORTING || cv['long_text_mm4x1wk3'] || '';
  E.BLOG_EDIT_NOTES = E.BLOG_EDIT_NOTES || cv['long_text_mm4x29jz'] || '';
  if(!E.BLOG_DATE && cv['date_mm4w89q2']){ try{ E.BLOG_DATE=new Date(cv['date_mm4w89q2']+'T00:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}); }catch{} }
  if(!E.BLOG_NAME_PREFIX){ const m=(it.name||'').match(/^(.*?-\s*Blog\s*\d+)\b/i); if(m) E.BLOG_NAME_PREFIX=m[1]; }
}
(async()=>{
  await loadInputs();
  if(!action){
    const t=new Date().toISOString().slice(0,10);
    if(rowStatus==='Push for Blog Creation') action='draft';
    else if(rowStatus==='Needs edits') action='revise';
    else if(rowStatus==='Approved' && (!rowPublishDate || rowPublishDate<=t)) action='publish';
    else { console.log('No actionable status ('+(rowStatus||'-')+') — nothing to do.'); process.exit(0); }
    console.log('derived action from status:', action);
  }
  sh(`git config user.email "automation@secondtake.agency"`); sh(`git config user.name "Blog Automation"`); sh(`git fetch origin`);
  if(action==='draft'||action==='revise'){
    sh(`git checkout -B ${branch} origin/main`);    
    const post = await generate(action==='revise');
    insert(post);
    sh(`git add src/data/blogs.ts`);
    sh(`git commit -m "${action==='revise'?'Revise':'Add'} blog: ${post.title.replace(/["'`$]/g,'')}"`);
    sh(`git push -u origin ${branch} --force`);
    await monday({[E.MONDAY_STATUS_COL]:{label:'Preview ready'},[E.MONDAY_LINK_COL]:{url:previewUrl(post.slug),text:'Open preview'}});
    if(E.BLOG_NAME_PREFIX) await mondayName(`${E.BLOG_NAME_PREFIX}: ${post.title}`);
    console.log('OK', action, '->', previewUrl(post.slug));
  } else if(action==='publish'){
    sh(`git checkout main`); sh(`git pull origin main`);
    sh(`git merge --no-ff origin/${branch} -m "Publish blog (item ${item})"`);
    sh(`git push origin main`);
    await monday({[E.MONDAY_STATUS_COL]:{label:'Published'}});
    console.log('PUBLISHED item', item);
  } else throw new Error('unknown BLOG_ACTION: '+action);
})().catch(e=>{ console.error('robot error:', e.message); process.exit(1); });
