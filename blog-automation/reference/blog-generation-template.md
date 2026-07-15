# Blog Generation Template & Client Adaptation Spec
**Second Take Agency — Automated Client Blogs**

## The core idea
Every auto-generated post follows **one fixed content structure**, but adapts its **data format and visual design to each client's website**. This works by separating two things:

- **(A) The universal content skeleton** — identical for every client.
- **(B) A per-client "Site Profile"** — captures how that client's site stores blogs, its brand/design, and its business info.

Same generator + different profile = a post that matches each client's structure and design. This is what keeps the system flexible as we scale to 10+ clients.

---

## A. Universal content structure (every post, every client)

1. **Title** — the H1 (stored in the `title` field; rendered by the client's own template). **Must include the service area / primary city** (e.g. "What Does a New Composite Deck Cost in Redding, CA?").
2. **Excerpt** — 1–2 sentence summary (stored in `excerpt`; also used as the meta description).
3. **Featured image** — hero image (stored in `image`) with descriptive alt text.
4. **Intro** — 1–2 short paragraphs that set local context. *Must reference the client's primary city + region.*
5. **Body** — **2,000 words minimum** (target 2,000–2,400) across **8–11 `H2` sections**. Use `H3` subsections, bullet/numbered lists, and `<strong>` emphasis. Include **at least one in-body image**. Include **at least two internal links** to the client's own pages (services, contact, resources). Reach length through genuine depth (examples, sub-topics, comparisons) — never filler. **Reading level:** write at a 6th-grade reading level — short, clear sentences and simple everyday words, technical terms explained in plain language, no collegiate or academic phrasing; voice is friendly and plain-spoken, not formal.
6. **Value section** (recommended) — e.g. "When to bring in a professional."
7. **Standard closing block** (fixed for every post):
   - horizontal rule
   - `H2`: "Serving {Primary City} & {Region}"
   - Business paragraph: legal name, services offered, service-area cities, license #
   - Website line + Phone line
   - **Request an Estimate** button → the client's estimate/contact URL (styled in the client's brand color)
8. **Hidden SEO** — target keywords stored in the `keywords` field and emitted as a hidden `<meta name="keywords">` tag (never shown on the page). Keywords are also woven **naturally** into the body, title, and excerpt — that's where the real ranking value is.
9. **Service-area rule** — the primary city appears in the **title**, and the primary city, region, and nearby service-area towns are referenced naturally throughout the body (at minimum in the intro and closing block).

---

## B. Per-client Site Profile (what makes it flexible)

The automation reads a **Site Profile** for each client before generating. Differences between client websites live here, not in the generator.

| Section | What it captures |
|---|---|
| `business` | Legal name, license #, phone, website domain, email |
| `service_area` | Primary city, region, list of cities to reference |
| `brand` | Primary color, font stack, tone of voice |
| `site_tech` | Framework, deploy platform, repo, production branch |
| `blog_storage` | **How posts are stored** (see below) + file path + insertion method |
| `post_fields` | The exact field schema + which field holds the HTML body |
| `categories` / `authors` | Allowed values on that site |
| `links` | Estimate/contact URL, service pages, resource pages |
| `image_strategy` | Reuse existing asset library, or generate new images |

### `blog_storage.type` — how the automation adapts to different site structures
- **`ts-array-file`** (O'Brien): prepend a new object to a TypeScript array in a data file.
- **`mdx-files`**: write a new `.mdx` file with frontmatter into a content folder.
- **`headless-cms`**: create an entry via the CMS API (Sanity, Contentful, etc.).

A new client's structural differences are captured by choosing the right `blog_storage.type` and field mapping — **the content skeleton never changes.**

---

## C. How each client's design stays faithful (automatically)

The post is stored as **data / HTML and rendered by the client's own blog template** — so it inherits that site's fonts, colors, spacing, header, and footer with zero restyling from us. We match the site's existing renderer instead of imposing a design.

The only place we use the profile's `brand` tokens is for elements we **inject** into the post body (like the Request an Estimate button), so those match the client's brand color.

---

## D. Onboarding a new client (repeatable checklist)

1. **Connect the repo/site** → detect the `blog_storage` type and field schema.
2. **Fill the Site Profile** (business, service area, brand, links). ~10 minutes.
3. **Generate one test post** → preview → approve.
4. **Add the client** to the Monday "Client Blog Pipeline" board.

After that, generating a post = add a topic row and approve the preview.

---

## E. Reference implementation
See `client-profile.obrien-mountain-home.json` for the first fully-filled client profile.
