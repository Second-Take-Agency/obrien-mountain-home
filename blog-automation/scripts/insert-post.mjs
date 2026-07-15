import fs from 'fs';
const [ , , repo, postPath ] = process.argv;
const file = `${repo}/src/data/blogs.ts`;
const src = fs.readFileSync(file, 'utf8');
const post = JSON.parse(fs.readFileSync(postPath, 'utf8'));

const order = ['id','slug','title','excerpt','content','category','author','date','dateModified','image','readTime','keywords'];
// JSON.stringify every field => always-valid, safely-escaped TS string literals
const body = order.filter(f => post[f] !== undefined)
  .map(f => `    ${f}: ${JSON.stringify(post[f])}`).join(',\n');
const obj = `  {\n${body}\n  },`;

const anchor = 'export const blogs: BlogPost[] = [';
if (!src.includes(anchor)) { console.error('FAIL: anchor not found'); process.exit(1); }
const out = src.replace(anchor, `${anchor}\n${obj}`);

// structural guards
if (!out.trimEnd().endsWith('];')) { console.error('FAIL: file no longer ends with ];'); process.exit(1); }
const before = (src.match(/\n\s{4}slug:/g)||[]).length;
const after  = (out.match(/\n\s{4}slug:/g)||[]).length;
if (after !== before + 1) { console.error(`FAIL: expected ${before+1} posts, got ${after}`); process.exit(1); }
fs.writeFileSync(file, out);
console.log(`OK: inserted "${post.slug}" (${before} -> ${after} posts, ${Buffer.byteLength(out)} bytes)`);
