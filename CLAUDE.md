# Project: spolecny-projekt-dv-vh

School IT/CS class joint project — David (dv) and Vojtěch (vh).

## Dev Server

```bash
npx serve -p 4321
```

Runs localhost on port 4321.

---

## Project Overview

Two websites are being built for this class assignment. The assignment was originally just a hero section but expanded. Teacher evaluates against a specific rubric (materials/websites he published — to be linked later).

**Key constraint:** Every other team is doing plain hand-coded HTML. We already built Website 1 which is high-end and over-engineered. Website 2 must be simple, explainable, and beginner-friendly — so Vojtěch can co-present it confidently.

---

## Website 1 (existing, over-engineered)

- High-end, animations, libraries, modern stack
- Good SEO and performance results
- Too complex to easily explain in a presentation
- Kept as-is; not the focus of current work

---

## Website 2 (new — THIS is what we're building)

### Concept

A personal portfolio for a **fictional brutalist architect** who wants to showcase work and accept service orders. Written entirely in **Czech**.

### Fictional Client (Persona)

Needs to be fully created — name, background, what he asked for ("Hey I want you to do this..."). This persona is the assignment specification framing. Will be used on a customer card in the presentation (slide 1 or 2).

### Design Direction

| Property | Value |
|---|---|
| Style | Brutalism |
| Language | Czech |
| Primary colors | Red + White |
| Font | Impact-style — heavy, bold |
| Mood | Brutal, raw, strong |
| Hero H1 | Very bold, white, large — must *feel* brutal |
| Tone/copy | Funny: "architect of brutalism — but the paycheck is brutal too" |

Hero background = one high-quality image the user provides. 4 other images sourced from Google.

### Required Sections (in order)

1. **Navbar**
2. **Hero section** — full-screen, bold H1, background image
3. **Two-picture section** — two images side by side, stacks to single column on mobile
4. **Buttons section** — CTA / service ordering
5. **Services grid** — grid of service examples with images
6. **3–4 additional content sections** (exact content from teacher's materials)
7. **Footer** (optional in spec, but we're doing it)

### Technical Constraints

- **Single HTML file** — everything in one `.html` file
- **HTML + CSS only** (or near-zero JS — one tiny interaction max)
- **No libraries, no frameworks, no build tools**
- Lines of code: kept low — not 1000+ lines
- Code must be explainable line-by-line by a beginner
- Variables/selectors named clearly and intentionally
- Well-structured, good code quality — but simple, not clever
- No intentional mistakes — performance issues must not be introduced

---

## Build Sequence

### Phase 0 — Materials Research

Teacher published 5–6 websites/resources with exact requirements and guidelines. David will provide links or file content. Claude reads all of them, identifies:
- Mandatory elements (teacher explicitly requires these)
- Bonus elements (good to have, extra points)

This research drives everything in Phase 1.

### Phase 1 — Build

1. Create fictional architect persona (customer card)
2. Gather/prepare images (1 from David, 4 from web)
3. Write `index.html` with embedded CSS
4. Follow teacher's material structure exactly

### Phase 2 — Review Sequence

Run in this order:

1. **Code quality audit** — read every line, every rule, every selector. Ask: Does this make sense? Is it useful? Can it be simplified or removed? Fix accordingly. Follow clean code principles (SRP, naming, simplicity, no dead code).
2. **SEO audit** — meta tags, title, description, OG tags, semantic HTML, heading hierarchy
3. **Lighthouse audit** — Performance, Accessibility, Best Practices, SEO scores
4. **Accessibility (a11y)** — ARIA labels, alt texts, keyboard navigation, screen reader compatibility
5. **Color contrast check** — WCAG AA compliance for red/white palette
6. **HTML validator** — run through W3C validator, fix all errors/warnings
7. **Final checks** — anything missed (structured data, favicon, print styles, etc.)

### Phase 3 — Presentation Website

A separate small website explaining the project:
- Simpler style than Website 1's presentation
- Covers: process, reasoning, results achieved
- Slide/section structure: customer card → brief → build decisions → review results → final site
- Can be based on the Website 1 presentation as a template, simplified

---

## Materials

Teacher's reference websites/materials — **to be added by David**. Provide as links (preferred) or paste as files into a `/materials` subfolder.

```
/materials/   ← paste any downloaded content here
```

---

## Presentation Assets

- Hero image: provided by David (high-res brutalist building photo)
- 4 additional images: sourced from Google during build
- Fictional architect persona: to be created in Phase 1

---

## Notes for Claude

- Input comes via Wispr Flow voice transcription — expect garbled words, dropped terms, substituted phrases. Ask for clarification rather than guessing.
- All website copy is in **Czech**.
- Vojtěch is a co-presenter who is not advanced — every code decision must be explainable to him.
- "Simple" does not mean bad quality. It means: no unnecessary complexity. The code must be correct, clean, and well-named.
- Do not add comments explaining what the code does — use good naming instead. Only comment non-obvious logic.
