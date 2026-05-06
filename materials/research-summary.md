# Research Summary — Teacher's Rubric

**Source:** 5 lesson pages on https://gjszlin.cz/itseminare2/ (`responzivni-menu-aic`, `web-hero`, `hero-sekce-aic`, `responzivni-obrazky-aic`, `obrazky-na-webu-aic`).
**Status:** 5/6 pages yielded full content; the `responzivni-obrazky-aic` page returned only a header — its material is already covered comprehensively by `obrazky-na-webu-aic` (srcset, sizes, picture).

This document is the **playbook**. Everything we build should map back to a line here. Items are split into **MUST** (mandatory — score points / lose points), **SHOULD** (best practice — expected by teacher), **BONUS** (nice-to-have).

---

## 1. Navbar / Responsive Menu

### MUST
- Semantic `<nav>` with `<ul>` / `<li>` for menu items
- Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Hamburger toggle as `<button>` (NOT `<div>`) — keyboard-accessible by default
- ARIA: `aria-expanded`, `aria-controls`, `aria-label` on the toggle button
- CSS reset using universal selector `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
- Flexbox layout: navbar is `display: flex; align-items: center; justify-content: space-between;`
- Menu list also `display: flex` with `list-style: none` and `gap`
- Links are `display: block` with padding (expands click target) and `text-decoration: none`
- `:hover` + `transition` for feedback
- Mobile breakpoint via `@media (max-width: 768px)`:
  - Hamburger visible on mobile, hidden on desktop
  - Menu hidden by default, shown via `.is-open` class
  - Menu uses `position: absolute` and `flex-direction: column` on mobile
- JS: `addEventListener('click', ...)` on toggle, `classList.toggle('is-open')`, sync `aria-expanded`, close menu on link click

### SHOULD
- BEM naming: `.navbar__menu`, `.navbar__link`, `.navbar__toggle`, etc.
- `<script>` tag right before `</body>` (DOM-ready without `DOMContentLoaded` plumbing)
- Subtle `box-shadow` on mobile menu, `z-index: 100` to layer above content

### BONUS
- Animate menu open/close with `opacity` + `transform`
- Hamburger ↔ X icon transformation
- Close menu on Escape key
- Active-link highlight class

---

## 2. Hero Section

### MUST
- Semantic structure: `<header>`, `<h1>`, `<section>`
- Hero image gets `alt`, `width`, `height`, `fetchpriority="high"`
- **Never** `loading="lazy"` on hero image (above-the-fold)
- Hero image **< 200 KB**, in AVIF or WebP
- Full-screen height via `min-height: 100svh` (NOT `100vh` — `svh` handles mobile browser chrome)
- `object-fit: cover` on hero image
- Contrast ratio ≥ 4.5:1 for normal text (WCAG AA)
- Dark overlay `rgba(0,0,0,0.6)` minimum when white text sits on a background image
- LCP target < 2.5s

### SHOULD
- Fluid typography with `clamp(min, ideal, max)` — e.g. `font-size: clamp(2.5rem, 5vw + 1rem, 6rem)` on H1
- CSS custom properties in `:root` (`--clr-bg`, `--clr-accent`, `--clr-text`, etc.)
- BEM naming inside hero: `.hero`, `.hero__title`, `.hero__cta`
- `text-wrap: balance` on H1 (modern, supported in 2026)
- `max-width: 45ch` on paragraphs for readability
- `line-height: 1.1` headlines, `1.6` body
- CTA button: 2–4 words, concrete language (avoid "klikni sem")
- Hover transition `0.2s`, subtle `transform: translateY(-2px)`
- Mobile: reduce padding, center-align text

### BONUS
- Entrance animation `@keyframes fadeUp`
- Glassmorphism CTA card (`backdrop-filter: blur(20px)`)
- Gradient text on accent words
- Scroll-driven animations

### Variant choice for OUR project

Teacher's three variants are **split-screen**, **center-aligned (full-bleed image + centered overlay text)**, and **minimalist typography**. Our brutalist concept is best served by the **center-aligned full-bleed** variant:
- One huge background image (David's brutalist photo)
- Massive bold white H1 centered (or left-anchored)
- Dark overlay for contrast
- Single primary CTA below H1

---

## 3. Images on the Web

### MUST
- **Every `<img>` has `alt`.** Empty `alt=""` only for purely decorative images. Missing `alt` = error.
- Alt describes content/function in Czech, not appearance ("Brutalistický bytový dům v Praze" not "fotka")
- Always include `width` and `height` attributes → reserves space, prevents CLS
- Hero: `fetchpriority="high"`, no lazy loading
- Below-the-fold: `loading="lazy"`
- Never combine `fetchpriority="high"` with `loading="lazy"`
- Format priority: **AVIF → WebP → JPEG** (photos), **SVG** (logos/icons), **PNG** (text-heavy graphics)
- Use `<picture>` + `<source type="image/...">` for format fallback chain
- `srcset` with **at least 3 size variants** using `w` units (e.g. `400w, 800w, 1200w`)
- `sizes` attribute is mandatory whenever `srcset` is used (without it, browser downloads largest)

### SHOULD
- `<figure>` + `<figcaption>` when image has visible caption
- Art direction with `<picture>` + `media` queries for different crops on mobile vs. desktop
- `object-fit: cover` + `object-position` for focal control
- `aspect-ratio` on gallery items for uniform thumbnails
- Core Web Vitals: LCP < 2.5s, CLS < 0.1

### BONUS
- `<picture>` with multiple format-and-size combinations
- Animated WebP instead of GIF
- Hover `transform: scale()` on gallery items

### Decisions for OUR project

**Image format chain:** AVIF (primary) + WebP (fallback) + JPEG (final fallback). In 2026, AVIF support is ~95%+, WebP is ~97%+. The teacher mandates the chain anyway, so we follow it — and David's instinct on AVIF is correct.

**Tooling:** Convert images locally before committing. Squoosh.app (free, browser-based) handles AVIF/WebP/JPEG generation in one place. Alternative: `cwebp`, `avifenc` CLI tools.

---

## 4. General / Cross-Cutting Rules

### MUST
- `<meta charset="UTF-8">` and viewport meta in `<head>`
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- WCAG AA contrast (4.5:1 normal text, 3:1 large text)
- Mobile-first or desktop-first responsive — pick one and apply consistently. Teacher leans **mobile-first** with `@media (min-width: 768px)`.
- Layout container: **max-width 1200px, margin: 0 auto**, body has `margin: 0` (matches David's note)

### SHOULD
- CSS variables in `:root`
- BEM naming throughout
- Comments on non-obvious CSS sections (sparingly — good names first)

### BONUS
- Lighthouse scores: Performance ≥ 80, Accessibility ≥ 90, SEO ≥ 90
- Open Graph meta tags for social previews
- Favicon
- Print stylesheet

---

## 5. Tension between teacher's rubric and our "single-file simple" goal

| Teacher says | Our constraint | Resolution |
|---|---|---|
| BEM naming | Beginner-explainable | BEM is fine — `block__element--modifier` is clear and well-documented |
| CSS variables in `:root` | Beginner-explainable | Easy to explain ("named colors"), keeps code DRY |
| `<picture>` with multiple `<source>` | Single-file simplicity | Fine — `<picture>` is HTML, no library needed |
| JS hamburger toggle | "Near-zero JS" | This IS the one allowed JS interaction (~10 lines) |
| `clamp()` typography | Beginner-explainable | One-liner, trivially explainable |
| Glassmorphism, animations, gradient text | "Brutalism = raw, NOT slick" | **Skip the BONUS visual polish.** Brutalism rejects glass, gradients, soft animations. Stay raw. |
| Split-screen hero | Brutalist aesthetic | We pick **center-aligned full-bleed** variant instead. Still satisfies the rubric. |

---

## 6. Addendum — `responzivni-obrazky-aic` (raw fetch)

After re-fetching the page directly via curl (raw HTML in `materials/raw/responzivni-obrazky-aic.html`), substantially more content surfaced. The page is the most rigorous of the six — it codifies the teacher's exact expectations.

### The "Zlatý Workflow 2026" (Golden Workflow) — verbatim from teacher

Five non-negotiable points the teacher hands students:

1. **Backend** — bulk-generate AVIF/WebP variants (Sharp.js or build tool)
2. **HTML** — structure with `<picture>` + `srcset` + `sizes`
3. **Layout** — CSS Grid `auto-fit` and Flexbox `flex-wrap: wrap` instead of `@media` ("No Queries" philosophy)
4. **Stability** — every `<img>` has `width` + `height` (CLS prevention)
5. **Performance** — hero gets `fetchpriority="high"` + `loading="eager"`; below-fold gets `loading="lazy"`. Never combine the two.

### Teacher's analogies (use these in the presentation)

- **`srcset` = "Jídelní lístek"** (menu of file sizes the server has on hand)
- **`sizes` = "Nápověda pro design / Hlad zákazníka"** (hint about how big the image will render)
- **Why `sizes` cannot use `%`** — the browser reads HTML before CSS is parsed; `vw` is the only unit it can resolve immediately

### The DPR math (taught explicitly — likely a presentation question)

```
required srcset width = CSS width × DPR
```

- iPhone (CSS 390px, DPR 3) → needs 1170px → browser picks `1280w` from srcset
- iPhone (CSS 300px, DPR 3) → needs 900px → browser picks `960w` from srcset

Standard srcset scale taught: **320w, 640w, 960w, 1280w, 1920w, 2560w**

### "No Queries" / "Vanilla" philosophy

Modern web design moves AWAY from `@media (max-width: 768px)` toward components that re-flow themselves. Two patterns the teacher pushes:

1. **Flexbox auto-wrap** — `flex-wrap: wrap` + `flex-basis: 300px; flex-grow: 1` re-flows without media queries
2. **Grid auto-fit** — `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` — same idea for grids

This is a tension with our "max-width: 768px media query" plan — we can absorb it. We'll use auto-fit Grid for the services section and reserve `@media` only for the navbar mobile toggle.

### Art Direction (additional `<picture>` use case)

Different *crops* on different devices (not just different sizes). Example: wide cinematic shot for desktop, portrait detail for mobile. Done with `<picture>` + `<source media="...">`.

```html
<picture>
  <source media="(max-width: 639px)" srcset="orez-mobil.webp">
  <img src="siroky-desktop.webp" alt="...">
</picture>
```

### `object-position` — the "decapitation" fix

`object-fit: cover` crops to image center by default. For portraits where the head is at the top, this slices the face off. Fix:

```css
.avatar { object-fit: cover; object-position: center 20%; }
```

Useful for our two-picture section if any photo has its focal point off-center.

### Format hierarchy — teacher's verbatim wording

| Format | Teacher's verdict |
|---|---|
| JPEG | "Zastaralý standard pro fotky" — outdated, no transparency |
| WebP | "Dnešní standard, o 30 % menší než JPG" — today's default, supports transparency |
| AVIF | "Budoucnost z videa, extrémně úsporný formát" — future / video-derived format |
| SVG | "Vektory a ikony. Měly by být vkládány **inline** pro umožnění CSS úprav" — inline only |

Confirms our format chain. Also: SVG icons should be **inline** (not `<img src="icon.svg">`) so we can color them with `currentColor`.

### Bonus material the teacher covered (we will SKIP)

- Inline SVG with `currentColor` — useful but our brutalist site won't have icons
- `<dialog>` HTML5 native lightbox — out of scope (no gallery modal)
- CSS `:has()` selector for hover-dim-others gallery — over-engineering for our case
- Container Queries (`cqi`) — overkill for a single-page portfolio
- View Transitions API — explicitly bonus content

### Practical assignments the teacher mentioned

These hint at what may be asked during evaluation/presentation:

1. **Detective** — open F12 Network tab → Img filter → resize window → watch the browser swap files
2. **Compute** — DPR math (see above)
3. **Lighthouse audit** — run F12 Lighthouse and read "Opportunities"

We should run the Lighthouse audit ourselves in Phase 2 (already in the plan).

---

## 7. Refinements from re-reading raw HTML of all 5 pages

After downloading every teacher page as raw HTML and re-analyzing, additional details surfaced. None contradict the existing checklist, but several refine it:

### Navbar (from `01-responzivni-menu-aic.html`)
- Lesson runs **3–4 lessons (135–180 min)** — depth is high; teacher cares about details
- Hamburger built from a **single `<span>`** + `::before` + `::after` (one element renders three bars). Don't use three divs.
- Teacher's verbatim reasoning for `<button>` over `<div>`: *"S `<div>` bychom museli ručně přidat `tabindex`, `role="button"`, obsluhu klávesnice… Je to zbytečná práce a snadné to udělat špatně."* — use `<button>`, period.
- ARIA chain explained: `aria-expanded` toggles `false`↔`true` (screen reader: *"sbalené"*↔*"rozbalené"*), `aria-controls="main-menu"` links to menu `id`, `aria-label` provides description for icon-only button
- Some examples use a tablet breakpoint `@media (min-width: 769px) and (max-width: 960px)` in addition to `768px`. Optional for our scope — single 768px breakpoint is acceptable.

### Hero (from `02-web-hero.html` + `03-hero-sekce-aic.html`)
- Teacher demonstrates **four hero patterns**, each with explicit didactic goal:
  1. Static image background (full-bleed) — *our pick*
  2. Video background with `autoplay loop muted playsinline`
  3. Split-screen text + image
  4. Gradient/typography minimalist
- Specific clamp recipes the teacher uses verbatim:
  - `font-size: clamp(2.4rem, 5vw + 1rem, 4.5rem)` for H1
  - `font-size: clamp(1.8rem, 3vw, 2.6rem)` for H2
- Teacher says exactly: *"obrázek v Hero sekci se musí načíst IHNED. Používejte atribut `fetchpriority="high"` a `loading="eager"`"* — both, not just one
- 100svh (small viewport height) preferred over 100vh (avoids mobile browser-chrome jump)

### Images (from `04-obrazky-na-webu-aic.html`)
- Refined compression numbers: **WebP 25–35% smaller** than JPEG, **AVIF 40–55% smaller** (more precise than the earlier 30%/50% claim)
- Concrete example used in class: 2400px JPEG ≈ 800 KB; 600px JPEG ≈ 80 KB → **10× difference** between mobile and desktop sizes
- "Švédský stůl" metaphor for srcset/sizes: srcset = available portions; sizes = how big a plate the user has
- Teacher emphasizes: *"Srcset jsou nápovědy, ne příkazy"* — the browser is allowed to ignore srcset if it has cached a larger version
- `alt=""` (empty) vs missing `alt`: missing makes screen readers read the filename ("img0012.jpg"); empty makes them skip. **Empty is correct for purely decorative images, never both omitted.**
- `<figure>` + `<figcaption>` semantic: image and caption form *one logical unit*. Alt is the *replacement* for the image; figcaption is a *complement* — both can coexist with different text.
- Common student mistake the teacher calls out: thinking PNG is best because of transparency. WebP/AVIF do transparency too and are far smaller.

### From `materialy.js` (full course database, downloaded)
- The 5 web pages we have ARE the complete set under topic "16-17 Tvorba webových stránek". No additional pages exist for this assignment.
- Topic dated **Březen 2026** (March 2026) — recent material, current best practices.

---

## 8. Open questions (for David)

1. ~~Re-fetch responzivni-obrazky-aic?~~ ✅ Done — findings in §6 + §7.
2. ~~Image conversion approach?~~ ✅ Done — ffmpeg pipeline in `scripts/convert-images.sh`, all 45 variants generated.
3. Does the teacher require deployment / a public URL, or is local-only OK?
4. Tykání or vykání in the Czech copy? (Brutalist humor → tykání recommended.)
5. Final image-to-section mapping (see `plans/website2-plan.md`) — accept defaults or change?
