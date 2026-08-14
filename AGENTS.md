# Synthica Landing Page

## Project Overview
Plain HTML/CSS/JS conversion of a Figma landing page design (Figma file `dVuj5lq49hRuKHXxiGIEZu`, node `29:97`). Previously a Next.js/React/TSX project; converted to static `index.html` + `styles.css` + `script.js`.

## Architecture
- **Static site (no build)**: plain `index.html` + `styles.css` + `script.js` + `public/` images. `vercel.json` deploys as a no-build static site (`framework: null`, `outputDirectory: "."`) so files are served from the repo root. **Important:** do NOT re-add Next.js scaffolding (package.json/next.config.mjs/app/) — Vercel will detect it and serve the wrong (broken) app.
- **Fixed 1200px canvas**: All elements use absolute positioning at exact Figma pixel coordinates (Figma frame origin offset: `ox=-3674, oy=-845` to convert Figma absoluteBoundingBox → canvas coords).
- **Responsive scaling**: `script.js` scales the 1200px `.canvas` to fit any viewport via CSS transform.
- **Fonts**: Google Fonts (Inter, Instrument Serif). The Figma design uses "Google Sans Flex" (proprietary, unavailable) — `Google Sans Flex` is listed first in font-family stacks with sans-serif fallback.

## Key Files
- `index.html` — full page markup, all sections in document order
- `styles.css` — every element positioned with exact `left/top/width/height` + Figma `lineHeightPx` values
- `script.js` — 1200px → viewport scaling
- `public/` — all images (extracted from Figma imageRefs + icon SVGs rasterized)

## Sections (top to bottom)
1. Hero (bg images, title, subtitle, CTA pill)
2. Feature card (blue #EAF4FF) with stat + decorative pill tag rows (4 rows of rounded rects)
3. Step intro (title + 4 numbered circles + connector)
4. Step cards (4 white rounded cards with image + desc + button)
5. Zero-cost cards (3 cards with check icons)
6. FAQ (2 columns of expandable items)
7. Testimonials (masonry 2-column layout with black-bordered figures + full-width section divider lines)
8. Footer

## Figma API Access
The design source is Figma file `dVuj5lq49hRuKHXxiGIEZu`, node `29:97` (token provided separately/out-of-band).

## Pixel-Perfect Verification
- Compare rendered screenshot (Chromium headless, 1200×5256) against PDF `Home-(Compressify.io).pdf` rasterized to 1200 wide.
- Final mean diff: ~6.37 (all remaining diff is font glyph anti-aliasing: headless Chromium renders Inter ~38% lighter than Figma's Type-3 rasterizer at 15px; Google Sans Flex unavailable).
- All structural elements (backgrounds, card colors, borders, positions, divider lines) verified exact match.

## SEO / GEO Assets
- `robots.txt` — allows all crawlers incl. AI/LLM bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) + points to sitemap.
- `sitemap.xml` — 5 URLs (/, /about, /program, /journal, /work-with-us) with image extension.
- `llms.txt` — plain-English summary for LLM crawlers (GEO). Links to pages + robots/sitemap.
- `site.webmanifest` — PWA manifest (name, icons from /public/logo.png).
- Each `.html` `<head>` has: title, meta description/keywords, robots directives, canonical, OG + Twitter cards, favicon/manifest links, and page-appropriate JSON-LD (Organization, WebSite, FAQPage on index; AboutPage on about; EducationalOrganization on program; CollectionPage on journal; WebPage on work-with-us).
- Canonical domain placeholder is `https://synthica.org` — replace globally (robots.txt, sitemap.xml, llms.txt, all HTML canonical/OG/Twitter/JSON-LD) once the real domain is known.

## Gotchas / Learnings
- Figma "Background+Border" frames have a 1px black INSIDE stroke that renders as full-width black lines OVER their children in the PDF export. The testimonials section has divider lines at y=4597 (2px), y=5199 (1px), y=5255 (1px) drawn over the testimonial cards — implemented as explicit `.test-divider*` divs placed last in HTML (highest z-order).
- Testimonial figure cards have `border-radius:28px; border:1px solid #000`.
- Pill tag rows are decorative rounded rects (#DCEBFA / #D2E4F8), corner-radius 50px.
- PDF fonts are Type 3 (rasterized, non-extractable) — cannot extract exact glyph shapes.
