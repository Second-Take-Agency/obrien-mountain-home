// Blog Automation robot — runs unattended in GitHub Actions.
// Actions: draft (preview branch) | revise (rewrite branch from edit notes) | publish (merge branch -> main).
// Branch is keyed on the Monday item id so every step maps 1:1 to its board row.
import fs from 'fs';
import { execSync } from 'child_process';

const E = process.env;
const REPO = process.cwd();
const action = E.BLOG_ACTION;
const item   = E.BLOG_MONDAY_ITEM || '';
const branch = `blog/item-${item || (E.BLOG_SLUG||'adhoc')}`;
const prof = JSON.parse(fs.readFileSync(`${REPO}/.github/blog-profile.json`,'utf8'));
const sh = (c) => execSync(c,{cwd:REPO}).toString();

// ---------- AI (provider-swappable: gemini free-tier by default, or anthropic) ----------
async function callAI(system, user){
  const provider = (E.AI_PROVIDER||'gemini').toLowerCase();
  if(provider==='anthropic'){
    const r = await fetch('https://api.anthropic.com/v1/messages',{method:'POST',
      headers:{'x-api-key':E.ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','content-type':'application/json'},
      body:JSON.stringify({model:E.AI_MODEL||'claude-sonnet-4-5',max_tokens:4000,system,messages:[{role:'user',content:user}]})});
    const d = await r.json(); return d.content[0].text;
  }
  const model = E.AI_MODEL||'gemini-2.5-flash';
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{
    method:'POST',headers:{'content-type':'application/json','x-goog-api-key':E.GEMINI_API_KEY},
    body:JSON.stringify({system_instruction:{parts:[{text:system}]},contents:[{role:'user',parts:[{text:user}]}],generationConfig:{temperature:0.6,maxOutputTokens:4000}})});
  const d = await r.json();
  if(!(d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts && d.candidates[0].content.parts[0] && d.candidates[0].content.parts[0].text)) throw new Error('Gemini API error ('+r.status+'): '+JSON.stringify(d).slice(0,600));
  return d.candidates[0].content.parts[0].text;
}

// ---------- read the client's own site for context ----------
function context(){
  const svc = fs.readFileSync(`${REPO}/src/data/services.ts`,'utf8');
  const services = [...svc.matchAll(/title:\s*"([^"]+)"[\s\S]*?longDescription:\s*"([^"]+)"/g)].map(m=>({title:m[1],detail:m[2]}));
  const blog = fs.readFileSync(`${REPO}/src/data/blogs.ts`,'utf8');
  const titles = [...blog.matchAll(/\n\s{4}title:\s*"([^"]+)"/g)].map(m=>m[1]);
  return {services,titles};
}
function closingBlock(services){
  const sa=prof.service_area,b=prof.business;
  return [`<hr />`,
   `<h2>Serving ${sa.primary_city} &amp; ${sa.region}</h2>`,
   `<p><strong>${prof.client_name}</strong> provides professional ${services.map(s=>s.title.toLowerCase()).join(', ')} services throughout <strong>${sa.primary_city} and ${sa.region}</strong> — including ${sa.cities.slice(1).join(', ')}. Licensed California contractor (Lic# ${b.license}).</p>`,
   `<p><strong>Website:</strong> <a href="${b.base_url}">${b.website_domain}</a><br />`,
   `<strong>Phone:</strong> <a href="tel:${b.phone_e164}">${b.phone_display}</a></p>`,
   `<p><a href="${prof.links.estimate_cta}" style="display:inline-block;background:${prof.brand.primary_color};color:#0f172a;font-weight:700;padding:14px 30px;border-radius:999px;text-decoration:none;">Request an Estimate &rarr;</a></p>`].join('\n      ');
}

async function generate(revise){
  const {services,titles} = context();
  const sys = `You are a senior SEO copywriter for ${prof.client_name}, a ${prof.service_area.primary_city}/${prof.service_area.region} contractor. Voice: ${prof.brand.tone}. Write ONLY about the client's real services. Output STRICT JSON only, no code fences.`;
  const user = `SERVICES (source of truth):\n${services.map(s=>`- ${s.title}: ${s.detail}`).join('\n')}\n\nEXISTING TITLES (never duplicate):\n${titles.join('\n')}\n\nTopic: "${E.BLOG_TOPIC||''}"\nPrimary keyword: "${E.BLOG_PRIMARY_KEYWORD||''}"\nSupporting keywords: "${E.BLOG_SUPPORTING||''}"\n${revise?`REVISE the post per these editor notes: ${E.BLOG_EDIT_NOTES||''}`:''}\nRules: 800-1100 words. Intro sets ${prof.service_area.primary_city}/${prof.service_area.region} context. 5-8 <h2> sections with <h3>, lists, <strong>. At least 2 internal links from ${JSON.stringify(prof.links)}. Weave keywords in naturally. Do NOT write the closing/contact block.\nOUTPUT JSON keys: {"title","slug","excerpt","category","readTime","body_html"}`;
  let raw = (await callAI(sys,user)).trim().replace(/^```json/i,'').replace(/^```/,'').replace(/```$/,'').trim();
  const g = JSON.parse(raw);
  return {
    id:String(Date.now()).slice(-7), slug:g.slug, title:g.title, excerpt:g.excerpt,
    content:'\n      '+g.body_html.trim()+'\n\n      '+closingBlock(services)+'\n    ',
    category:E.BLOG_CATEGORY||g.category||prof.categories[0], author:prof.authors[0],
    date:E.BLOG_DATE||new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),
    image:(prof.image_strategy&&prof.image_strategy.default)||services[0]?.image||'',
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

(async()=>{
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
