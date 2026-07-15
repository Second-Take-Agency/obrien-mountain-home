import fs from 'fs';
const repo = process.argv[2];
const read = p => fs.readFileSync(`${repo}/${p}`, 'utf8');

// The client's real customer-facing services (from THEIR website)
const svc = read('src/data/services.ts');
const services = [...svc.matchAll(/title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?longDescription:\s*"([^"]+)"/g)]
  .map(m => ({ title: m[1], summary: m[2], detail: m[3] }));

// Existing posts — so the engine never repeats a topic
const blog = read('src/data/blogs.ts');
const existing_titles = [...blog.matchAll(/\n\s{4}title:\s*"([^"]+)"/g)].map(m => m[1]);
const categories = [...new Set([...blog.matchAll(/category:\s*'([^']+)'/g)].map(m => m[1]))];

console.log(JSON.stringify({ services, existing_titles, categories }, null, 2));
