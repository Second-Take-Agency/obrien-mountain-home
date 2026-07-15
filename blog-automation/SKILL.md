---
name: blog-automation
description: Generate and publish an on-brand, SEO blog post to a client's website. Use whenever the user says "generate a blog for {client}", "write a blog post", "publish a blog", or asks for a new article on a client site. Reads the client's real services and existing posts, writes a structured post, safely inserts it into the client's blog data file, and pushes a preview branch for review.
---

# Blog Automation

Generates a finished blog post for a Second Take client and publishes it as a Vercel preview, following one fixed structure while adapting to each client's site and design.

## When to use
Trigger on: "generate a blog for {client}", "write a blog post", "publish a blog", "new article for {client}".

## Inputs
- **client** — an id matching a file in `profiles/` (e.g. `obrien-mountain-home`).
- **topic** — optional. If omitted, auto-pick the best NEW topic (see step 3).

## How to run (from VS Code / Claude Code — git push works locally, no token needed)

1. **Load the profile:** read `profiles/{client}.json`. It holds the client's business info, service area, brand color, blog storage type, field schema, and internal links.

2. **Read the client's own site for context:**
   `node scripts/extract-context.mjs <repoPath>`
   Returns the client's real services (from their site) + all existing post titles + categories.

3. **Choose the topic:** if the user gave one, use it. If not, pick a single high-value topic that (a) does NOT overlap any existing title, (b) is grounded in the services above, and (c) fits the season/time of year.

4. **Write the article BODY** as HTML: **2,000 words minimum** (target 2,000–2,400), 1–2 paragraph intro with local (primary city / region) context, 8–11 `<h2>` sections with `<h3>`, lists, and `<strong>`, at least one inline image, and at least 2 internal links using the paths in `profile.links`. Weave the target keywords in naturally. **Do NOT write the closing/contact block** — it is appended automatically.

5. **Assemble the post object** with fields: `id` (next integer), `slug` (kebab-case), `title`, `excerpt` (1–2 sentences, also the meta description), `content` (body + the deterministic closing block built from the profile: "Serving {city} & {region}", website, phone, Request-an-Estimate button), `category` (from allowed list), `author`, `date`, `image`, `readTime`, `keywords` (hidden SEO meta). Save as `post.json`.

6. **Insert safely:**
   `node scripts/insert-post.mjs <repoPath> post.json`
   JSON-encodes every field and runs structural guards — it cannot corrupt the blog file. Then run the project's typecheck to confirm.

7. **Preview (optional, local):**
   `node scripts/render-preview.mjs post.json profiles/{client}.json preview.html`

8. **Publish a preview branch:**
   `git checkout -b blog/{slug} && git add -A && git commit -m "Add blog: {title}" && git push origin blog/{slug}`
   Vercel auto-builds a preview URL for the branch.

9. **On approval:** merge `blog/{slug}` into `main` → Vercel deploys → post is live. If a Publish date was set, schedule the merge for that date.

## Structure & rules
See `reference/blog-generation-template.md` for the full content spec and the per-client profile schema. Key rules: always reference the client's primary city + region, only write about the client's real services, keep keywords as hidden meta (never visible on the page), and always end with the standard business block + Request an Estimate button in the client's brand color.

## Adding a new client
Create `profiles/{client}.json` following `profiles/obrien-mountain-home.json`. Set `blog_storage.type` to match the site (`ts-array-file`, `mdx-files`, or `headless-cms`) and fill business info + service area + links. Then run the steps above.

## Control panel
The Monday board "Client Blog Pipeline" (board 18420374601) is the human control panel: pick the client, set Status → Ready, review the preview, set Approved. Client info is pulled from the linked Client Directory (board 18405274797).
