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
   - **Reading level:** write at a 6th-grade reading level — short, clear sentences and simple everyday words; explain any technical terms in plain language; no collegiate or academic phrasing. Voice is friendly and plain-spoken, not formal.
   - **Local focus:** each post targets **ONE specific service-area city**. Use the target city named in the Topic (look for `Target city:`); if none is named, fall back to the primary city (`profile.service_area.primary_city`). The **TITLE must include that target city** (e.g. "What Does a New Composite Deck Cost in Redding, CA?"), and the article should center on it while also referencing the region and one or two nearby towns naturally in the body.
   - **Anti-AI-slop (strict):** No em-dashes or en-dashes anywhere (use commas, periods, or a hyphen for number ranges). No sentences framed as a profound reveal ("Here's what no one wants to admit..."). No correlative-conjunction constructions ("It's not X, not Y, it's just Z"). No rule-of-three staccato fragments ("Fast. Simple. Effective."). No ta-da phrases ("but here's the truth") — just use "But". Say things plainly, with no fluff or padding.

5. **Assemble the post object** with fields: `id` (next integer), `slug` (kebab-case), `title`, `excerpt` (1–2 sentences, also the meta description), `content` (body + the deterministic closing block built from the profile: "Serving {city} & {region}", website, phone, Request-an-Estimate button), `category` (from allowed list), `author`, `date`, `image`, `readTime`, `keywords` (hidden SEO meta). Save as `post.json`.
   - `date` here is **provisional** — it is only what the preview shows. The date that ships is stamped at merge time (step 9). See **Publish date rule** below.

6. **Insert safely:**
   `node scripts/insert-post.mjs <repoPath> post.json`
   JSON-encodes every field and runs structural guards — it cannot corrupt the blog file. Then run the project's typecheck to confirm.

7. **Preview (optional, local):**
   `node scripts/render-preview.mjs post.json profiles/{client}.json preview.html`

8. **Publish a preview branch:**
   `git checkout -b blog/{slug} && git add -A && git commit -m "Add blog: {title}" && git push origin blog/{slug}`
   Vercel auto-builds a preview URL for the branch.

9. **On approval, on the day it goes live:** stamp the real date, then merge.
   `node scripts/stamp-publish-date.mjs <repoPath> {slug}`
   Commit that change, then merge `blog/{slug}` into `main` → Vercel deploys → post is live. If a Publish date was set, schedule the merge for that date. Pass an explicit `YYYY-MM-DD` only when back-filling a post that went live earlier.
   The GitHub robot (`.github/scripts/blog-robot.mjs`) does this automatically on its `publish` action, so this step is only for the manual VS Code path.

## Publish date rule

**The date on the article is the day it went live on the client's site — nothing else.**

A draft is written days or weeks before it publishes, and approval or the board's Publish date often moves after that. Stamping the date when the post is written freezes the wrong day into the page, so the article claims a publish date it did not have. That is the bug this rule exists to prevent.

How it holds:

- **Draft:** `date` is provisional. It exists so the preview renders, and it is expected to be replaced.
- **Publish (robot):** the `publish` action re-stamps `date` with today's date in the client's timezone before the post reaches `main`, and writes that same date back to the board's Publish date column so board and site agree. The GBP promo CSV schedules off that column, so keeping the two equal is what stops a Learn More button from pointing at a post that is not live yet.
- **Publish (manual):** run `scripts/stamp-publish-date.mjs` on merge day (step 9).
- **Timezone:** dates are formatted in `site_tech.timezone` from the client profile, defaulting to `America/Los_Angeles`. GitHub runners are UTC, so without this an evening publish shows tomorrow's date.
- **Fixing posts already live:** run the robot with action `redate`. With no input it derives each post's true go-live date from the commit that first put it on `main`, prints a table, and changes nothing. Re-run with `apply: 1` to write. Posts that came with the site build are skipped — only robot-published posts are touched. Override any row with `redate: some-slug=2026-07-27`.

## Structure & rules
See `reference/blog-generation-template.md` for the full content spec and the per-client profile schema. Key rules: always reference the client's primary city + region, only write about the client's real services, keep keywords as hidden meta (never visible on the page), and always end with the standard business block + Request an Estimate button in the client's brand color.

## Adding a new client
Create `profiles/{client}.json` following `profiles/obrien-mountain-home.json`. Set `blog_storage.type` to match the site (`ts-array-file`, `mdx-files`, or `headless-cms`) and fill business info + service area + links. Then run the steps above.

Also set `site_tech.timezone` to the client's local timezone (IANA name, e.g. `America/Los_Angeles`) so publish dates land on the right calendar day, and copy `.github/scripts/blog-robot.mjs`, `.github/workflows/blog-automation.yml` and `scripts/stamp-publish-date.mjs` across so the new client inherits the publish date rule. A client site running an older copy of the robot will keep stamping draft dates.

## Keeping every client repo in sync

The robot, scheduler, and workflows are **duplicated into each client repo** — a fix applied in one repo does NOT propagate. When `.github/scripts/blog-robot.mjs`, `.github/scripts/publish-scheduler.mjs`, or the workflow files change, copy the change to **every enrolled client repo in the same sitting**. A repo running a stale copy re-introduces the bug the fix removed: AW Puma's stale scheduler kept `git merge`, which conflicts on every publish because each draft adds its post at the top of the same array — that silently blocked a scheduled post, and its whole-board loop failed on other clients' rows on every single run.

Invariants every copy must keep:

- **One publish path.** The scheduler only delegates to the robot's `publish` action (which re-inserts the post onto current `main`). It must never `git merge` a preview branch.
- **Client isolation.** All clients share board `18420374601`. The scheduler skips rows whose `blog/item-{id}` branch doesn't exist in the repo, and the robot refuses an item whose Client slug column (`text_mm53ttsy`) names a different client. A red scheduler run means a real failure for THIS client — never "someone else's row".
- **Sitemap.** The robot appends every published post to `public/sitemap.xml`. If a live post is missing there, re-run `publish` for its item (idempotent) or add the entry by hand.
- **Dates.** Post dates are stamped at publish time in the client's timezone (`site_tech.timezone` in the profile — set it for every new client; East Coast clients drift a whole day without it). The `redate` action backfills any post showing a draft date.

## Control panel
The Monday board "Client Blog Pipeline" (board 18420374601) is the human control panel: pick the client, set Status → Ready, review the preview, set Approved. Client info is pulled from the linked Client Directory (board 18405274797).
