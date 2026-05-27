# SEO Workflow System — O'Brien Mountain Home

This folder contains a 5-module SEO system for systematically improving organic search visibility. Each module builds on the previous one.

---

## Folder Structure

```
docs/seo/
├── README.md                    ← You are here
├── workflows/                   ← The 5 workflow template files
│   ├── seo_audit.md             ← STEP 1: Run this first
│   ├── seo_site_structure.md    ← STEP 2: Requires audit output
│   ├── seo_content_engine.md    ← STEP 3: Requires audit + site structure
│   ├── seo_gbp.md               ← STEP 4: Requires audit output
│   └── seo_game_plan.md         ← STEP 5: Synthesizes all prior outputs
├── client/                      ← O'Brien-specific business data (inputs to workflows)
│   ├── overview.md              ← Business facts, URL, GBP, competitors
│   ├── services.md              ← Full services list with descriptions
│   ├── icp.md                   ← Ideal Customer Profile (FILL THIS IN)
│   ├── competitors.md           ← Known local competitors (FILL THIS IN)
│   └── reviews_raw.md           ← Exported Google reviews (update regularly)
└── workflow_outputs/            ← Save completed workflow results here
    └── (empty — add dated output files as workflows are run)
```

---

## How to Run the SEO System

These workflows are designed to be run with an AI agent that has access to `firecrawl` web scraping tools. They produce data-driven, client-specific deliverables — not generic advice.

### Prerequisites
1. **Fill in `client/icp.md`** — The ICP (Ideal Customer Profile) is required by the Content Engine and GBP workflows. A template is provided; fill it out before running those modules.
2. **Fill in `client/competitors.md`** — List at least 2–3 known local competitors so the audit can compare against real competitors.
3. **Update `client/reviews_raw.md`** — Export your current Google reviews periodically and paste them here. The Content Engine uses them for location page social proof.

### Execution Order

```
1. seo_audit.md          → Produces keyword clusters (Buckets A/B/C) + technical checklist
                           Save output as: workflow_outputs/seo_audit_[date].md

2. seo_site_structure.md → Produces URL architecture + missing pages build queue
                           Save output as: workflow_outputs/seo_site_structure_[date].md

3. seo_content_engine.md → Produces content briefs for every page type
                           Save output as: workflow_outputs/seo_content_engine_[date].md

4. seo_gbp.md            → Produces GBP optimization plan + post scripts + review templates
                           Save output as: workflow_outputs/seo_gbp_[date].md

5. seo_game_plan.md      → Synthesizes all prior outputs into 60-day execution plan
                           Save output as: workflow_outputs/seo_game_plan_[date].md
```

### Inputs to Each Workflow

| Workflow | Required Inputs | Key Output |
|----------|----------------|------------|
| `seo_audit` | client/overview.md, client/icp.md | Keyword clusters, tech checklist |
| `seo_site_structure` | seo_audit output | URL architecture, missing pages queue |
| `seo_content_engine` | seo_audit + site_structure outputs, client/icp.md, client/reviews_raw.md | Content briefs |
| `seo_gbp` | seo_audit output, GBP URL from overview.md | GBP optimization deliverables |
| `seo_game_plan` | All prior outputs | 60-day execution plan, VA task cards |

---

## Target Business

- **Business:** O'Brien Mountain Home
- **Primary Service:** Fire Hardening
- **Location:** Redding, CA (serves all of Northern California)
- **Website:** https://obrienmountainhome.com

See `client/overview.md` for complete business details.

---

## About the Workflow Templates

The workflow files in `/workflows/` are **generic templates** — they use placeholder examples (e.g., "HVAC in Denver") in their illustration tables. This is intentional. The placeholders show format, not content. All actual O'Brien-specific data comes from the `/client/` files.

The workflows reference `firecrawl-scrape`, `firecrawl-search`, `firecrawl-crawl`, `firecrawl-map`, and `firecrawl-browser` tools. These are web scraping tools available in Claude's MCP environment. When running a workflow, use an agent session with those tools active.
