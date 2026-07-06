# Blog Automation — Setup (GitHub Actions robot)

This repo now contains an unattended "robot" that drafts, revises, and publishes blog posts, driven by the
Monday board. Files:
- `.github/workflows/blog-automation.yml` — draft / revise / publish (triggered by Make on a status change)
- `.github/workflows/blog-publish-scheduler.yml` — daily; publishes Approved posts when their Publish date arrives
- `.github/scripts/blog-robot.mjs` — the worker
- `.github/scripts/publish-scheduler.mjs` — the daily scheduler
- `.github/blog-profile.json` — this client's config (business info, service area, brand, links, Vercel names)

## 1) Add repository secrets
GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:
- **GEMINI_API_KEY** — free key from Google AI Studio (aistudio.google.com → Get API key). This is the default writer.
  - *Prefer Claude instead?* Add **ANTHROPIC_API_KEY** and set `AI_PROVIDER: anthropic` in `blog-automation.yml`.
- **MONDAY_TOKEN** — Monday → your avatar → **Developers → My Access Tokens → Show**. Lets the robot update the board (status, preview link, row name).

That's it — pushing to GitHub and deploying to Vercel needs no extra token (the built-in GITHUB_TOKEN handles it, and Vercel deploys on every push).

## 2) Push these files to `main` (one time)
Commit the `.github/` folder to `main`. After that, the workflows are live under the repo's **Actions** tab.

## 3) Manual test (before wiring Make)
Actions tab → **Blog Automation → Run workflow** → set `action = draft`, and fill `topic`, `primary_keyword`,
`monday_item` (the Monday row id). It should create branch `blog/item-<id>`, build a Vercel preview, and set the
row to Preview ready with the link.

## 4) The Make bridge (turns a Monday status change into a robot run)
Create a Make scenario: **Watch board → Router by Status** → HTTP POST to GitHub:
`POST https://api.github.com/repos/Second-Take-Agency/obrien-mountain-home/dispatches`
Headers: `Accept: application/vnd.github+json`, `Authorization: Bearer <GitHub token or Make GitHub OAuth>`
Body: `{ "event_type": "blog-run", "client_payload": { "action": "...", "monday_item": "<id>", "topic": "...", "primary_keyword": "...", "supporting": "...", "edit_notes": "...", "category": "...", "date": "<YYYY-MM-DD>", "name_prefix": "<row name>" } }`

Status → action mapping:
- **Push for Blog Creation** → `action: draft`
- **Needs edits** → `action: revise` (include the Edit notes column)
- **Approved** with empty/past Publish date → `action: publish` (immediate). Future Publish date → do nothing; the daily scheduler handles it.

## How publish-date works
Approved posts wait on their preview branch. The **daily scheduler** merges a post to `main` (goes live) only once
its **Publish date** is today or past. Empty Publish date = next scheduler run.

## Notes
- Branch name is `blog/item-<mondayItemId>` — every step maps 1:1 to its board row.
- Reused for other clients: copy `.github/` into the client repo and swap `blog-profile.json`.
