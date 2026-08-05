---
updated: 2026-08-06
---

# Active Context — m3taz-ahmed.github.io

## Last Milestone
Full redesign and restructure of the Astro 7 + Tailwind 4 portfolio site.

## Key Decisions
- Adopted personas: CV/UX (primary), with frontend-frameworks-lord, language-lord, page-sections-lord, gsap-animated-frontend lord skills.
- Design direction: light glassmorphism by default with a manual light/dark theme toggle, persisted in `localStorage` and respecting `prefers-color-scheme`.
- Theme system: Tailwind v4 `@custom-variant dark` driven by `data-theme` attribute on `<html>`; CSS custom properties switch between light and dark palettes.
- Restructured component architecture: all sections use the new `glass-card`, `btn-*`, `tech-tag`, and `SectionTitle` patterns; added `ThemeToggle.astro`.
- Content refresh: filled empty project descriptions, normalized version references (Laravel, Filament, PHP, Node.js, MySQL, PostgreSQL without hardcoded version numbers), improved Arabic copy.
- Accessibility: focus-visible rings, reduced-motion support, semantic headings, `aria-label` on icons/toggles, form labels.
- Interactions: theme toggle, typewriter, animated counters, testimonials slider, mobile menu, back-to-top, reveal-on-scroll, particle canvas, contact form AJAX (Web3Forms).
- Deployment: build output deployed to repository root; stale `_astro/` and `assets/script.js`/`assets/style.css` artifacts removed.

## Files Touched
- `site/src/styles/global.css`
- `site/src/layouts/Layout.astro`
- `site/src/components/*` (all sections, Nav, Footer, ThemeToggle, Icon, SectionTitle, LanguageSwitcher)
- `site/src/i18n/en.ts` and `ar.ts`
- `site/src/pages/404.astro`
- `site/public/app.js`
- `site/public/manifest.json`
- Root deployment files (`index.html`, `ar/index.html`, `app.js`, `sw.js`, `manifest.json`, `_astro/*`, `404.html`)

## Next Steps / Open Items
- User review of the live preview at `http://localhost:4321` (or root `index.html`).
- Decide whether to keep, refine, or extend the new design system.
- Potential: add a dedicated AI OS page, project detail pages, or a blog.
