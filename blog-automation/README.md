# Second Take — Blog Automation (build handoff)

This folder is the automated blog system we built. It generates on-brand, SEO blog posts for client
websites, following one fixed structure while adapting to each client's site and design.

> **Keep this folder as agency tooling.** It is not part of the O'Brien website. Move it to a dedicated
> automation repo, or add `blog-automation/` to `.gitignore`, so it doesn't ship with a client's site.

---

## What's built (and working)

**1. Control panel — Monday.com**
- Board: **Client Blog Pipeline** → https://second-take-llc.monday.com/boards/18420374601
- Columns: Name · **Client (linked)** · Topic (blank = auto-pick) · Tone · SEO keywords · **Publish date** ·
  **Status** (Ready → Preview ready → Approved → Published, plus Needs edits) · **Edit notes** · Preview link ·
  Website / Phone (pulled live from the Client Directory).
- Linked to the **Client Directory** (board 18405274797) — the single source of truth for each client's
  website, phone, location, niche, and Google Business URL.

**2. Generation template + per-client profiles**
- `reference/blog-generation-template.md` — the fixed content structure every post follows, and how it
  adapts per client.
- `profiles/obrien-mountain-home.json` — O'Brien's profile (business info, service area, brand color,
  blog storage type, field schema, internal links). Copy this to onboard a new client.

**3. The engine (tested against O'Brien's repo)**
- `scripts/extract-context.mjs` — reads a client's REAL services + existing posts from their own site
  (topic context comes from the client's website, not the Monday niche field).
- `scripts/insert-post.mjs` — safely inserts a post into the client's blog data file. JSON-encodes every
  field + structural guards, so it cannot corrupt the file (verified with intentionally nasty input).
- `scripts/render-preview.mjs` — renders a post in the client's design for review.
- `scripts/generate.mjs` — optional: full pipeline using the Anthropic API. Not needed if Claude (Claude
  Code / Cowork) writes the post directly — which is the free path we chose.

**4. Cost decision**
We chose to have **Claude write the posts directly** (in Cowork or Claude Code) instead of paying for an
API key. Same quality, no per-post cost.

---

## The flow (runtime)

1. In Monday: pick the client, optionally add a Topic (blank = auto-pick), set **Status → Ready**.
2. Engine reads the client's context, Claude writes the post, it's inserted safely, and a **preview branch**
   is pushed → Vercel builds a preview link.
3. Monday row flips to **Preview ready** with the link.
4. You review the preview → **Approved** publishes it live (honoring the Publish date). **Needs edits** +
   a note in Edit notes sends it back for a rewrite.

Nothing reaches a client's live site without approval.

---

## Current status

- ✅ Monday board, template, profiles, and engine — built and tested.
- ✅ On-demand generation proven: a fresh O'Brien post ("Building a Fire-Resistant Deck…") was written,
  safely inserted, and rendered in O'Brien's design.
- ⏳ **Last step — publishing to GitHub → Vercel.** In Cowork this hit a GitHub org/token permission wall
  (fine-grained tokens for the `secondtakeops` account were refused write access). **Running this skill
  from VS Code / Claude Code avoids that entirely**, because git push uses your own signed-in account.

## How to finish it from here (in VS Code)

1. Open this project in VS Code with Claude Code.
2. Ask: **"generate a blog for obrien-mountain-home"** (or give a topic).
3. Claude follows `SKILL.md`: writes the post, inserts it safely, pushes `blog/{slug}`, and gives you the
   Vercel preview link. Approve by merging to `main`.

## Not built yet (parked)
- **Google Business auto-posting** (Goal 1) — separate plan; needs Google Business Profile API access
  (application submitted separately). The Client Directory already stores each client's Google Business URL.
