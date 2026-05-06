# Technical Notes & Open Research Questions

David's notes from the teacher / from his own research. To be resolved during Phase 0 research and applied during Phase 1 build.

## Confirmed requirements (from David)

### Image format → AVIF (needs verification)

- Goal: best compression + acceptable browser support
- Need to confirm: is AVIF still the right choice in 2026, or has WebP / JPEG XL closed the gap?
- Browser support to verify:
  - Chrome / Edge — ✅ supported since 2020
  - Firefox — ✅ supported since 2021
  - Safari — supported from 16+ (iOS 16, macOS 13)
  - Open question: do we need a `<picture>` fallback to WebP/JPEG for older browsers?
- Decision rule: if AVIF + WebP fallback adds significant complexity, simpler one-format approach may be better for this project's "explainable to a beginner" constraint.

### Color contrast

- Red + white palette → must pass WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- Pure red `#FF0000` on pure white = ~4:1 — borderline; large text only
- Likely need a darker red (e.g. `#CC0000`, `#B30000`) for body copy on white
- Tool: WebAIM Contrast Checker, or Chrome DevTools

### Cross-browser support

- Must work on: Chrome, Firefox, Safari, Edge (latest 2 versions of each)
- Mobile: iOS Safari, Chrome Android
- No IE11 (deprecated)
- Use CSS features with broad support; avoid bleeding-edge stuff (e.g. `:has()` is fine in 2026, container queries fine, but verify)

### Layout — David's note from teacher

> "max width 1200 + 0 margin"

Most likely interpretation: main content `max-width: 1200px` with `margin: 0 auto` for horizontal centering. Outer page has `margin: 0` on `body`. Standard pattern. To confirm by reading teacher's pages.

## Open questions for research phase

- Does the teacher specify exact section ordering / structure?
- Does the teacher provide naming conventions for classes / IDs?
- Does the teacher mandate semantic HTML5 tags (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)?
- Any required meta tags beyond the obvious (charset, viewport, description)?
- Does the teacher prefer external CSS file or embedded `<style>`? (We're planning single-file.)
- Any required accessibility patterns (skip links, focus states, etc.)?

## Stack we will NOT use (deliberate constraint)

- ❌ JS frameworks (React, Vue, etc.)
- ❌ CSS frameworks (Tailwind, Bootstrap, etc.)
- ❌ Build tools (Vite, Webpack, etc.)
- ❌ External fonts via JS loaders
- ✅ Google Fonts via `<link>` is acceptable (or system font stack for Impact-style)

## Stack we MAY use

- ✅ Plain HTML5
- ✅ Plain CSS3 (Flexbox, Grid, custom properties)
- ✅ One small vanilla JS interaction (e.g., mobile menu toggle) — only if actually needed
