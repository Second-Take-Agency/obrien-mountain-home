import fs from 'fs';
import { execFileSync } from 'child_process';

// ---- inputs ----
const repo   = process.env.REPO   || process.argv[2];
const profPath = process.env.PROFILE || process.argv[3];
const topicArg = process.env.TOPIC || ''; // blank => auto-pick
const dry = process.argv.includes('--dry-run');
const prof = JSON.parse(fs.readFileSync(profPath, 'utf8'));

// ---- 1. read the client's OWN site for context ----
const ctx = JSON.parse(execFileSync('node', ['extract-context.mjs', repo], { encoding: 'utf8' }));

// ---- 2. deterministic closing block built from the profile (never left to the AI) ----
const sa = prof.service_area, b = prof.business;
const closing = [
  `<hr />`,
  `<h2>Serving ${sa.primary_city} &amp; ${sa.region}</h2>`,
  `<p><strong>${prof.client_name}</strong> provides professional ${ctx.services.map(s=>s.title.toLowerCase()).join(', ')} services throughout <strong>${sa.primary_city} and ${sa.region}</strong> — including ${sa.cities.slice(1).join(', ')}. Licensed California contractor (Lic# ${b.license}).</p>`,
  `<p><strong>Website:</strong> <a href="${b.base_url}">${b.website_domain}</a><br />`,
  `<strong>Phone:</strong> <a href="tel:${b.phone_e164}">${b.phone_display}</a></p>`,
  `<p><a href="${prof.links.estimate_cta}" style="display:inline-block;background:${prof.brand.primary_color};color:#0f172a;font-weight:700;padding:14px 30px;border-radius:999px;text-decoration:none;">Request an Estimate &rarr;</a></p>`
].join('\n      ');

// ---- 3. build the prompt for Claude ----
const system = `You are a senior SEO copywriter for ${prof.client_name}, a ${sa.primary_city}/${sa.region} contractor.
Write in a ${prof.brand.tone} voice. Ground every post in the client's REAL services (given below).
Reference ${sa.primary_city} and ${sa.region} naturally. Never invent services the client doesn't offer.
Follow the required structure exactly. Output STRICT JSON only — no prose, no code fences.`;

const user = `CLIENT SERVICES (source of truth — write only about these):
${ctx.services.map(s=>`- ${s.title}: ${s.detail}`).join('\n')}

ALREADY-PUBLISHED TITLES (do NOT repeat or closely overlap these):
${ctx.existing_titles.map(t=>`- ${t}`).join('\n')}

ALLOWED CATEGORIES: ${prof.categories.join(', ')}

TASK: ${topicArg ? `Write a blog post on this topic: "${topicArg}".` : `Pick the single best NEW topic (not overlapping the published titles), grounded in the services above and relevant to the season/time of year, then write it.`}

STRUCTURE (required):
- 2000-2400 words (2000 minimum, non-negotiable — reach length through depth, examples, and sub-topics, never filler).
- Intro: 1-2 short paragraphs setting local (${sa.primary_city}/${sa.region}) context.
- Body: 8-11 <h2> sections; use <h3>, <ul>/<ol>, and <strong>; include at least 2 internal links to the client's own pages using these paths: ${JSON.stringify(prof.links)}.
- Weave the target keywords in naturally.
- Do NOT write the closing business block or contact section — the system appends that automatically.

OUTPUT strict JSON with these keys:
{"title": string, "slug": kebab-case string, "excerpt": string (1-2 sentences), "category": one of the allowed categories, "readTime": "N min read", "keywords": comma-separated string, "body_html": string (the article body only, HTML, ending BEFORE any closing/contact block)}`;

if (dry) {
  console.log('=========== SYSTEM PROMPT ===========\n' + system);
  console.log('\n=========== USER PROMPT ===========\n' + user);
  console.log('\n=========== CLOSING BLOCK (auto-appended, from profile) ===========\n      ' + closing);
  process.exit(0);
}

// ---- 4. call Claude ----
const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
  body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5', max_tokens: 4000, system, messages: [{ role: 'user', content: user }] })
});
const data = await res.json();
const post = JSON.parse(data.content[0].text);

// ---- 5. assemble final post object (engine sets id/author/date/image + closing block) ----
const nextId = String(Math.max(0, ...ctx.__ids || [0]) + 1);
post.content = post.body_html + '\n\n      ' + closing;
delete post.body_html;
Object.assign(post, {
  id: nextId,
  author: prof.authors[0],
  date: process.env.PUBLISH_DATE || new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),
  image: prof.image_strategy.default || ctx.services[0]?.image || ''
});
fs.writeFileSync('/tmp/generated-post.json', JSON.stringify(post, null, 2));
console.log('generated:', post.title);
