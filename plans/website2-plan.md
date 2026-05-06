# Website 2 — Build Plan

Concept → fictional brutalist architect's portfolio. Czech. Single HTML file. Beginner-explainable.
This plan turns the rubric from `materials/research-summary.md` into a concrete build order.

---

## Final file structure

```
spolecny-projekt-dv-vh/
├── CLAUDE.md                                  (project doc)
├── index.html                                 (Website 2 — TO BUILD)
├── brutal.png                                 (original hero — David)
├── assets/
│   └── images/
│       ├── 00-hero-brutal.png                 (originals)
│       ├── 01..06-*.{jpg,webp}
│       └── out/                               (45 converted variants — DONE)
│           ├── 00-hero-brutal-{640,1280,1920}w.{avif,webp,jpg}
│           └── ##-NAME-{480,960}w.{avif,webp,jpg}
├── materials/                                 (research / playbook)
│   ├── teacher-resources.md
│   ├── images.md
│   ├── technical-notes.md
│   ├── research-summary.md                    (the rubric, fully extracted)
│   └── raw/                                   (offline copies of all 5 lessons + materialy.js)
├── plans/
│   └── website2-plan.md                       (this file)
├── scripts/
│   └── convert-images.sh                      (ffmpeg-based converter, reproducible)
└── presentation/                              (Phase 3 — later)
```

**No CSS folder, no JS folder** — everything inline in `index.html`. Beginner-friendly.

## Image manifest — converted variants (DONE)

All 7 source images converted to AVIF + WebP + JPEG via ffmpeg (libaom-av1 + libwebp). Output in `assets/images/out/`. Total weight: **2.2 MB across 45 files** (vs. 9.6 MB of source).

Hero (3840×2544 source) gets 3 widths:

| Width | AVIF | WebP | JPEG |
|---|---|---|---|
| 640w | 18 KB | 25 KB | 40 KB |
| 1280w | 43 KB | 64 KB | 116 KB |
| 1920w | **72 KB** | 111 KB | 220 KB |

Teacher mandates hero < 200 KB. AVIF and WebP comfortably pass. JPEG at 1920w is 220 KB — slightly over, but real-world delivery uses AVIF/WebP. The JPEG is just the fallback for ancient browsers.

All 6 gallery images get 480w + 960w variants (3 formats each = 6 files per image). All under 150 KB at 960w.

**Provisional image-to-section mapping** (confirm during build):

| Section | Source | Reason |
|---|---|---|
| Hero background | `00-hero-brutal` | David's photo, 4K, perfect contrast |
| Two-picture left | `03-parametric-architecture-barbican` | Iconic Barbican, landscape |
| Two-picture right | `01-apartmenttherapy-brutalist` | Strong landscape composition |
| Services 1 | `05-fuel-design-brutalist-italy` | Bold Italian brutalism |
| Services 2 | `02-theshelfist-brutalism-interior` | Interior, square |
| Services 3 | `04-architectsdiary-brutalist` | Portrait, fits a card |
| Services 4 | `06-linkedin-brutalist` | Wide banner, atypical — possibly skip |

---

## Persona — fictional architect (Phase 1, step 1)

Needs to be invented before the copy is written. Quick proposed defaults — David to confirm or replace.

| Field | Default proposal |
|---|---|
| Jméno | Bohuslav Cement |
| Věk | 47 |
| Lokace | Brno / Praha / Bratislava |
| Specializace | Brutalismus — bytové domy, knihovny, kulturní centra, infrastruktura |
| Tagline | "Architekt brutalismu. Cena je taky brutální." |
| Brief od klienta (sám sobě) | Jednostránkový portfolio web, kde si lidé můžou prohlédnout realizace a objednat si konzultaci nebo projekt. Žádný marketingový blábol. Ostrý, černobílý, červený. |
| Cílovka | Developeři, kulturní instituce, města hledající silný architektonický statement |
| Brand barvy | #B30000 červená + bílá + černá pro hloubku |

This persona becomes **slide 1–2 of the Phase 3 presentation** as the "klient brief / customer card".

---

## Section-by-section structure (in order)

### 1. `<header>` — Navbar
- Logo text (left): "BOHUSLAV CEMENT" — uppercase Impact-style
- Menu (right): O mně · Realizace · Služby · Kontakt
- Hamburger button on mobile (`<button>`, ARIA, JS toggle)
- Sticky? — **No.** Brutalism = static, blocks of weight. Sticky nav floats; that's anti-brutalist. Keep it static at top.

### 2. `<section class="hero">` — Hero
- Full-screen `min-height: 100svh`
- Background: David's high-res brutalist photo (`<picture>` with AVIF/WebP/JPEG)
- Dark overlay `rgba(0,0,0,0.6)` for text contrast
- H1 (huge, white, Impact-style): **"BRUTÁLNÍ ARCHITEKTURA. BRUTÁLNÍ CENA."** (or similar — David's call)
- Subtitle (Czech, 1 line): brief positioning
- Two CTAs: primary red "OBJEDNAT KONZULTACI", secondary outline "PROHLÉDNOUT REALIZACE"

### 3. `<section class="dvojice">` — Two-picture section
- Two large brutalist photos side-by-side on desktop, stacked on mobile
- CSS: Flexbox or Grid, `flex-direction: column` → `row` at 768px
- Each image uses `<picture>` + `srcset` + `sizes`
- Optional caption per image (`<figure>` + `<figcaption>`)
- Czech captions: e.g. "Krajský úřad Ostrava, 1978", "Kostel sv. Václava, Brno, 1992"

### 4. `<section class="o-mne">` — About / introduction text
- Block of copy in first person (Bohuslav speaking)
- Tone: dry, direct, slightly funny ("mí klienti dostávají beton, ne marketing")
- `max-width: 45ch` for readability
- Optional stat block: "30 let praxe / 47 realizací / 0 omluv"

### 5. `<section class="cta-pruh">` — Buttons / CTA strip
- Bold red horizontal band, white text
- Single line: "Chcete brutální projekt? Napište mi."
- Two buttons: telefon, email (real-looking but fake)
- Pure CSS, big tap targets

### 6. `<section class="sluzby">` — Services grid
- 4 service cards in a CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(...))`)
- Each card: image (AVIF/WebP/JPEG via `<picture>`), Czech title, 1-line description
- Examples:
  - Bytové domy
  - Veřejné stavby
  - Rekonstrukce
  - Konzultace
- Below the fold → `loading="lazy"` on these images

### 7. `<section class="kontakt">` — Contact / final CTA
- Simpler than `cta-pruh` — full contact info
- Optional: address block, copy email button

### 8. `<footer>`
- Copyright, year, fake studio name
- Optional: small links (Instagram, ČKAIT registrace)
- Black background, white text, no decoration

---

## Design tokens (CSS `:root` variables)

```css
:root {
  --clr-cervena: #B30000;       /* WCAG AA passes on white for normal text */
  --clr-bila: #FFFFFF;
  --clr-cerna: #000000;
  --clr-overlay: rgba(0, 0, 0, 0.6);
  --max-sirka: 1200px;
  --mezera: 1.5rem;
  --font-nadpis: Impact, "Anton", "Oswald", sans-serif;
  --font-text: "Inter", system-ui, sans-serif;
}
```

**Why `#B30000` and not pure `#FF0000`?** Pure red on white = ~4:1 contrast, fails WCAG AA for normal text. `#B30000` = ~7:1, passes comfortably. Still reads as raw brutalist red.

**Font Impact** is preinstalled on Windows and Mac. As fallback we use Google Font **Anton** or **Oswald** (both Impact-like and free). Loaded via single `<link>` in `<head>`.

---

## Build order

1. **Persona finalized** (David approves or edits proposed defaults)
2. **Image acquisition + conversion**
   - David hands over the hero image
   - Download the 6 candidate Google images
   - Convert each to AVIF + WebP + JPEG at 3 sizes (400w, 800w, 1600w) using Squoosh
   - Save into `img/` with clean Czech filenames
3. **HTML skeleton** — semantic shell, all sections empty, meta tags, `<link>` to font
4. **CSS reset + design tokens** — `:root` variables, universal reset, body defaults
5. **Section by section, top to bottom** — write HTML + CSS together for each section
6. **Mobile media query** — single `@media (max-width: 768px)` block at the bottom
7. **JS hamburger** — ~10 lines, before `</body>`
8. **Phase 2 review sequence** (per CLAUDE.md)
9. **Phase 3 presentation site**

---

## Estimated line counts (to keep us honest about "simple")

- HTML: ~150 lines (semantic, one section per ~15 lines)
- CSS: ~300 lines (tokens + reset + each section + one media query)
- JS: ~10 lines
- **Total: ~460 lines.** Well under "1000+" red line.

If we drift past 600 total, we stop and simplify before continuing.

---

## What we are explicitly NOT doing (deliberate exclusions)

- ❌ Glassmorphism, blur, soft shadows — anti-brutalist
- ❌ Gradient text — anti-brutalist
- ❌ Smooth fadeUp entrance animations — anti-brutalist
- ❌ Multiple JS interactions beyond hamburger
- ❌ External CSS file
- ❌ Build tooling
- ❌ Any framework or library

Brutalism rewards restraint. Less is more brutal.
