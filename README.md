# Ishaan Goswami — Portfolio (v2 / Editorial)

Personal portfolio. Next.js 14 (App Router), Tailwind CSS, Framer Motion, TypeScript.

Aesthetic direction: **editorial italic on a dark engineer foundation**. Instrument Serif Italic for emphasis moments, Geist Sans for body, Geist Mono for labels and timestamps. References: lukebaffait.fr, valentingassend.com, codedgar.com, sidewave.it.

## Stack

- **Next.js 14.2.35** — App Router, RSC where possible, client components for motion
- **TypeScript** — strict mode
- **Tailwind CSS** — design tokens in `tailwind.config.ts`, custom utilities in `globals.css`
- **Framer Motion** — scroll progress, mask reveals, stagger animations, number counters
- **Geist Sans + Geist Mono** — engineer foundation
- **Instrument Serif** — editorial italic signature (the new typographic move)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
npm run start
```

Vercel: push to GitHub, import repo, no env vars required.

## File map

```
app/
  layout.tsx          Root layout, fonts (Geist + Instrument Serif), metadata
  page.tsx            Home page — composes all sections
  globals.css         Design tokens, base styles, .editorial helper

components/
  status-bar.tsx      Fixed top bar — live IST clock, status, location
  scroll-progress.tsx Thin red progress bar (only loud accent at the very top)
  nav.tsx             Right-side section indicators (lg+ only)

  sections/
    hero.tsx          Editorial headline with serif italic verbs + sans nouns
    about.tsx         Bio paragraph + quiet inline stats list
    projects.tsx      Magazine spread — alternating left/right with SVG covers
    skills.tsx        Marquee + clean rule-divided skill lists
    education.tsx     Timeline with editorial italic institution names
    contact.tsx       Big "Let's build something." + rule-divided link list

  ui/
    section-marker.tsx  Sentence-case section labels
    marquee.tsx         Broadcast-ticker skill scroll
    project-entry.tsx   Magazine-style project entry (image + content)
    animated-number.tsx Spring-animated counter

  project-visuals/
    cortex-cover.tsx    Cortex LLM routing diagram (SVG)
    pitlane-cover.tsx   Pitlane Live F1 track + telemetry (SVG)
    vepark-cover.tsx    VePark parking grid with reservation states (SVG)

lib/
  data.ts             SINGLE SOURCE OF TRUTH for all portfolio content
  utils.ts            cn() and time formatter
```

## Editing content

All copy lives in `lib/data.ts`. Update:

- `profile` — name, role, email, links, tagline, about paragraph, availability status
- `projects` — featured projects, in order. Each has highlights, stack, status
- `skillGroups` — categorized skills
- `marqueeSkills` — flat list for the scrolling ticker
- `education` — degree entries
- `stats` — number counters in the About section

No other files need to change for routine content updates.

## Project covers

Each project has a custom SVG illustration in `components/project-visuals/`. These are **architectural diagrams of the actual product**, not stock graphics:

- **Cortex** — Routing layer showing the 4 LLM providers + fallback chain
- **Pitlane Live** — Stylized F1 track with live car positions and telemetry
- **VePark** — Parking grid with reservation states (occupied/reserved/available)

To swap any of them for a real screenshot when you have one, edit `components/sections/projects.tsx`:

```tsx
const covers: Record<string, React.ReactNode> = {
  cortex: <img src="/projects/cortex.png" alt="Cortex" className="block h-full w-full object-cover cover-hover" />,
  // ...
};
```

Put real images in `public/projects/` and they'll be served as static assets.

## Design tokens

| Token | Hex | Use |
|-------|-----|-----|
| `bg` | `#0A0A0B` | Page background (slightly warm) |
| `surface` | `#111114` | Card surfaces |
| `border` | `#1C1D22` | Subtle dividers |
| `border-bright` | `#2A2C33` | Hover borders |
| `fg` | `#F5F5F4` | Primary text |
| `fg-muted` | `#A8A8A3` | Secondary text |
| `fg-dim` | `#5A5A57` | Labels, timestamps |
| `accent` | `#FF3D2E` | Signal red — used only at true emphasis moments |
| `ok` | `#4ADE80` | Status positive |
| `warn` | `#FBBF24` | Status warning |

Discipline: editorial restraint. The accent appears at **end-of-sentence periods**, **section index numbers**, **status indicators**, and **scroll progress**. Nowhere else.

## Typography rule

- **Geist Sans** — all body text and headlines by default
- **Instrument Serif Italic** — applied via `.editorial` class to specific words or phrases for emphasis. Used as a *verb*, not as a style.
- **Geist Mono** — labels, timestamps, section markers, captions. Always uppercase with `tracking-ultra-wide`.

Don't apply `.editorial` to whole headlines — pick one or two words. The contrast is the point.

## Suggested commit sequence (for authentic history)

```bash
git init
git add package.json tsconfig.json next.config.mjs postcss.config.mjs tailwind.config.ts .eslintrc.json .gitignore
git commit -m "chore: scaffold Next.js 14 + Tailwind + TypeScript"

git add app/globals.css app/layout.tsx lib/utils.ts
git commit -m "feat: design tokens, fonts (Geist + Instrument Serif), root layout"

git add lib/data.ts
git commit -m "feat: portfolio data model and content"

git add components/ui/
git commit -m "feat: UI primitives — section marker, marquee, project entry, animated number"

git add components/project-visuals/
git commit -m "feat: project cover illustrations (Cortex, Pitlane Live, VePark)"

git add components/status-bar.tsx components/scroll-progress.tsx components/nav.tsx
git commit -m "feat: persistent UI — status bar with live clock, scroll progress, side nav"

git add components/sections/hero.tsx
git commit -m "feat: editorial hero with serif italic + sans mix"

git add components/sections/about.tsx components/sections/projects.tsx components/sections/skills.tsx components/sections/education.tsx components/sections/contact.tsx app/page.tsx
git commit -m "feat: about, projects (magazine spread), skills, education, contact sections"

git add README.md
git commit -m "docs: README"
```

## What's planned next

- Per-project detail pages at `/projects/[slug]` with full case-study writeups
- `/now` route with current status, what I'm reading, what I'm building
- Open Graph image generation via `app/opengraph-image.tsx`
- Lighthouse pass — target 100 across the board
- Real project screenshots when those are ready (the SVG diagrams are honest placeholders that represent the architecture)

## Notes

- The IST clock is computed client-side. Initial server render shows `--:--:--` to avoid hydration mismatch.
- The right-side nav is hidden below `lg` (1024px).
- `prefers-reduced-motion` is respected globally.
- The grid background is masked with a radial gradient to fade toward edges.
- All animations use `cubic-bezier(0.22, 1, 0.36, 1)` ("expo out") — slow start, gentle settle. This is the editorial rhythm.
