import fs from 'fs';
const post = JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const prof = JSON.parse(fs.readFileSync(process.argv[3],'utf8'));
const out  = process.argv[4];
const cat = {
 'Fire Hardening':['#fee2e2','#b91c1c'],'Decking':['#fef3c7','#b45309'],
 'Siding':['#dbeafe','#1d4ed8'],'Local':['#dcfce7','#15803d']
}[post.category] || ['#fee2e2','#b91c1c'];
const primary = prof.brand.primary_color;
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${post.title} — preview</title>
<style>
:root{--primary:${primary};--s950:#020617;--s900:#0f172a;--s800:#1e293b;--s600:#475569;--s500:#64748b;--s300:#cbd5e1;--s100:#f1f5f9;--s50:#f8fafc;}
*{box-sizing:border-box}html,body{margin:0}body{background:#fff;color:var(--s900);font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.6}
.banner{background:#fff4d6;border-bottom:1px solid #f0e2b0;color:#7a5c00;padding:9px 16px;text-align:center;font-size:13.5px;font-weight:500}
.container{max-width:896px;margin:0 auto;padding:0 16px}
.hero{position:relative;height:55vh;min-height:420px;overflow:hidden}.hero img{width:100%;height:100%;object-fit:cover;display:block}
.hero .ov{position:absolute;inset:0;background:linear-gradient(to top,var(--s950),rgba(15,23,42,.7) 55%,rgba(15,23,42,.3))}
.hero .in{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:0 16px 56px}
.pill{display:inline-block;font-size:12px;font-weight:700;padding:6px 16px;border-radius:999px;margin-bottom:16px;text-transform:uppercase;letter-spacing:.12em;background:${cat[0]};color:${cat[1]};width:fit-content}
.hero h1{font-size:clamp(1.875rem,4.5vw,3rem);font-weight:900;color:#fff;line-height:1.15;max-width:48rem;margin:0 0 16px}
.meta{display:flex;flex-wrap:wrap;gap:20px;color:var(--s300);font-size:14px}.meta span{display:inline-flex;align-items:center;gap:6px}.meta svg{width:16px;height:16px}
.crumbbar{background:var(--s50);border-bottom:1px solid var(--s100)}.crumb{display:flex;gap:8px;font-size:14px;color:var(--s500);padding:12px 0}.crumb .cur{color:var(--s800);font-weight:500}
article{padding:64px 0}article p{color:var(--s600);font-size:1.125rem;line-height:1.75;margin:1rem 0}
article h2{color:var(--s900);font-size:1.5rem;font-weight:700;margin:3rem 0 1rem}article h3{color:var(--s800);font-size:1.25rem;font-weight:600;margin:2rem 0 .75rem}
article ul,article ol{color:var(--s600);font-size:1.125rem;line-height:1.75;margin:1rem 0;padding-left:1.6rem}article li{margin:.4rem 0}
article strong{color:var(--s900)}article a{color:var(--primary);text-decoration:none;font-weight:500}article a:hover{text-decoration:underline}
article img{width:100%;border-radius:1rem;box-shadow:0 10px 25px -5px rgba(0,0,0,.15);margin:2.5rem 0}article hr{border:none;border-top:1px solid var(--s100);margin:2.5rem 0}
</style></head><body>
<div class="banner">🔒 PREVIEW ONLY — generated on-demand, rendered in O'Brien's design. NOT live (branch: blog/automation-demo).</div>
<section class="hero"><img src="${post.image}" alt="${post.title}"><div class="ov"></div><div class="in"><div class="container" style="padding:0">
<span class="pill">${post.category}</span><h1>${post.title}</h1>
<div class="meta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${post.author}</span>
<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${post.date}</span>
<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${post.readTime}</span></div>
</div></div></section>
<div class="crumbbar"><div class="container"><nav class="crumb"><span>Home</span><span>/</span><span>Blog</span><span>/</span><span class="cur">${post.title}</span></nav></div></div>
<div class="container"><article>${post.content}</article></div>
</body></html>`;
fs.writeFileSync(out, html);
console.log('preview written:', out);
