# Frontend audit

## Design read

Developer portfolio for recruiters and potential collaborators, using a modern, playful, high-contrast visual language with React, native CSS, Phosphor icons, and restrained Motion interactions.

Design dials: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`, `VISUAL_DENSITY: 4`.

Redesign mode: preserve. Copy, brand colors, logo treatment, anchor IDs, and primary navigation labels remain recognizable.

## Baseline

- Brand tokens: cream surface, deep blue text, blue accent, pill-shaped controls, soft translucent navigation.
- Information architecture: Home, About, Projects, Experience, Contact footer.
- Existing visual signature: split hero, Wilson portrait, layered blue fields, restrained parallax.
- Existing stack: React 19, Vite, native CSS, Phosphor icons, and Motion.
- SEO baseline: one page, stable section anchors, title and description in `index.html`, no structured data or social cards.

## Findings and resolution

| Area | Finding | Resolution |
| --- | --- | --- |
| Dependencies | Multiple unrelated design systems were installed but unused. | Removed all design-system packages. Kept native CSS as the single visual foundation. |
| Font | The hero font depended on Carbon transitively. | Added a dedicated self-hosted IBM Plex Sans Variable package with `font-display: swap`. |
| Navigation | About, Projects, and Experience links pointed to sections that were not rendered. | Added semantic sections using the existing IDs and active-section tracking with IntersectionObserver. |
| CTA | The requested Download CV has no PDF yet. | Restored the requested label and icon as an accessible unavailable state until a real file is supplied. |
| Social link | The requested GitHub icon has no verified profile URL. | Restored the icon as an accessible unavailable state instead of linking to the generic GitHub homepage. |
| Empty content | Project and experience source files were empty. | Added honest empty states without invented projects, employers, dates, or metrics. |
| Keyboard access | No skip link and mobile disclosure did not close with Escape. | Added both, with visible focus treatment and strict event cleanup. |
| Motion | Continuous pointer input already used Motion values and reduced-motion support. | Preserved the pattern directly in `home/page.tsx` and adopted `motion/react` with LazyMotion. |
| Theme | The reference uses a light cream and blue palette. | Locked the whole page to the requested light theme and removed automatic dark-mode overrides. |
| Rendering | Below-fold sections had no rendering containment. | Added `content-visibility` and intrinsic sizing for deferred rendering work. |
| LCP and image delivery | The hero portrait is a 3.25 MB PNG and dominates the performance audit. | Deferred at Wilson's request. The existing image and markup remain unchanged. |

## Content still required from Wilson

- Real project titles, summaries, links, screenshots, and outcomes.
- Verified experience roles, organizations, and dates.
- A real CV PDF if the download CTA should return.
- A verified GitHub profile URL if GitHub should return to social links.

The current empty states are intentional. They prevent fake portfolio data from being presented as fact.

Image format conversion, responsive image sources, and LCP-specific image work are intentionally out of scope for this pass.

## Verification

- ESLint: passed.
- TypeScript and Vite production build: passed.
- Production dependency audit: 0 vulnerabilities.
- Lighthouse accessibility: 100.
- Lighthouse best practices: 100.
- Lighthouse SEO: 100.
- Lighthouse CLS: 0.
- Lighthouse performance: 66, with an 18.0 second lab LCP dominated by the deferred 3.25 MB portrait PNG.

The Lighthouse performance score is recorded honestly and is not treated as complete until image work is authorized.
