// Stamp a post's `date` field with the day it actually goes live.
//
// The date a reader sees must be the day the article appeared on the client's
// site, not the day it was drafted. The GitHub robot does this automatically on
// publish; this script is the manual equivalent for the VS Code path — run it on
// merge day, just before merging the preview branch into main.
//
// Usage:
//   node scripts/stamp-publish-date.mjs <repoPath> <slug> [YYYY-MM-DD]
//
// The date defaults to today in the client's timezone (read from
// .github/blog-profile.json -> site_tech.timezone, else America/Los_Angeles).

import fs from 'fs';

const [ , , repo, slug, isoArg ] = process.argv;
if (!repo || !slug) {
  console.error('usage: node scripts/stamp-publish-date.mjs <repoPath> <slug> [YYYY-MM-DD]');
  process.exit(1);
}

let tz = 'America/Los_Angeles';
try {
  const prof = JSON.parse(fs.readFileSync(`${repo}/.github/blog-profile.json`, 'utf8'));
  tz = (prof.site_tech && prof.site_tech.timezone) || prof.timezone || tz;
} catch { /* profile is optional here */ }

if (isoArg && !/^\d{4}-\d{2}-\d{2}$/.test(isoArg)) {
  console.error(`FAIL: date must be YYYY-MM-DD, got "${isoArg}"`);
  process.exit(1);
}
// Midday UTC keeps the calendar day intact when it is re-formatted in tz.
const when = isoArg ? new Date(`${isoArg}T12:00:00Z`) : new Date();
const display = when.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: tz });

const file = `${repo}/src/data/blogs.ts`;
const src = fs.readFileSync(file, 'utf8');

const key = `slug: ${JSON.stringify(slug)}`;
let si = src.indexOf(key);
if (si < 0) si = src.indexOf(`slug: '${slug}'`);
if (si < 0) { console.error(`FAIL: slug "${slug}" not found in ${file}`); process.exit(1); }

const objStart = src.lastIndexOf('\n  {', si);
const objEnd = src.indexOf('\n  },', si);
if (objStart < 0 || objEnd < 0) { console.error('FAIL: could not bound the post object'); process.exit(1); }

const block = src.slice(objStart, objEnd + '\n  },'.length);
const DATE_FIELD_RE = /(\n\s{4}date:\s*)(['"])(?:\\.|(?!\2)[^\\\n])*\2/;
if (!DATE_FIELD_RE.test(block)) { console.error(`FAIL: post "${slug}" has no date field`); process.exit(1); }

const shown = (block.match(/\n\s{4}date:\s*(['"])([^'"]+)\1/) || [])[2] || '';
if (shown === display) { console.log(`OK: "${slug}" already shows ${display}`); process.exit(0); }

const out = src.slice(0, objStart)
  + block.replace(DATE_FIELD_RE, `$1${JSON.stringify(display)}`)
  + src.slice(objEnd + '\n  },'.length);

// structural guards — same contract as insert-post.mjs
if (!out.trimEnd().endsWith('];')) { console.error('FAIL: file no longer ends with ];'); process.exit(1); }
const before = (src.match(/\n\s{4}slug:/g) || []).length;
const after = (out.match(/\n\s{4}slug:/g) || []).length;
if (before !== after) { console.error(`FAIL: post count changed ${before} -> ${after}`); process.exit(1); }

fs.writeFileSync(file, out);
console.log(`OK: "${slug}" date ${shown || '(none)'} -> ${display} (tz ${tz})`);
