# Moataz Ahmed | Full-Cycle Product Engineer

[![aiZee](https://img.shields.io/badge/aiZee-v6.7.0-6C63FF?style=for-the-badge&logo=buffer&logoColor=white)](https://github.com/m3taz-ahmed/aizee)
[![Laravel](https://img.shields.io/badge/Laravel-13-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![Filament](https://img.shields.io/badge/Filament-v5-f97316?style=for-the-badge&logo=laravel)](https://filamentphp.com)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-blue?style=for-the-badge&logo=github)](https://m3taz-ahmed.github.io/)

Bilingual portfolio for Moataz Ahmed — **one engineer, the whole product.** Discovery → architecture → design → build → deploy, owned by a single senior pair of hands. Powered by **aiZee** (Sovereign AI OS: 29 personas, 157 skills, 80 workflows, 7653 tests, 100% coverage). 15+ years Laravel 13 / Filament v5 / PHP 8.5 audit-ready systems.

## 🚀 Live Demo
Visit the live site here: [https://m3taz-ahmed.github.io/](https://m3taz-ahmed.github.io/)

## 🛠️ Tech Stack
- **Framework:** [Astro 7](https://astro.build/) with fully static export — zero client-side framework.
- **Interactions:** ~16 KB hand-rolled `app.js` — signal-line rail, station activation, magnetic cursor, mobile nav, contact flow. No React, no GSAP, no Three.js.
- **Signature visual:** *The Pipeline* — a glowing deploy packet travels a fixed rail through 7 numbered stations (`data-station` 0–6), activating each section as it passes.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a midnight "signal" design system (cyan accent, Space Grotesk display, IBM Plex Sans Arabic).
- **Icons:** [Lucide icons](https://lucide.dev/) for lightweight SVG icons.
- **i18n:** Arabic + English (hreflang, `sitemap` i18n, `og:locale:alternate`, full RTL).
- **PWA:** `manifest.json` + service worker (offline).
- **SEO:** OG, Twitter Cards, `Person`+`WebSite`+`ItemList` JSON-LD, `hreflang`, `robots`, `sitemap.xml`.
- **Contact:** [Web3Forms](https://web3forms.com/) with honeypot + time-trap + validation.
- **Brand:** [aiZee v6.7.0](https://github.com/m3taz-ahmed/aizee) — `assets/aizee-logo.png`.

## ✨ Key Features
- **Bilingual:** EN/AR with `hreflang` + `og:locale` + localized routes, equal-quality copy.
- **The Pipeline:** scroll-driven signal rail — a deploy packet ignites each station in order (Hero → Pipeline → Work → Profile → Engine → Contract → Contact).
- **Client-first narrative:** hero → 5-stage process (Discover/Architect/Design/Build/Ship with self-drawing SVG artifacts) → flagship deploy manifests → audit-log track record → aiZee engine → transparent engagement model + FAQ → contact.
- **Zero framework JS:** everything vanilla; the whole site ships ~16 KB of JavaScript.
- **aiZee Engine:** live `api.github.com` stats (stars/commits/release) with static fallbacks.
- **Accessible:** `prefers-reduced-motion` respected everywhere, skip link, focus-visible rings, RTL-aware.
- **Performance:** self-hosted fonts, preconnect, lazy images, ~42 KB CSS.

## 📂 Project Structure
```text
.
├── index.html          # Main landing page (built output)
├── ar/                 # Arabic landing page (built output)
├── site/               # Astro source project
│   ├── src/
│   │   ├── pages/      # Routes and 404
│   │   ├── components/ # Hero, Pipeline, Work, Profile, Engine, Contract, Contact, Nav, Footer, SignalLine
│   │   ├── layouts/    # Layout.astro (SEO, fonts, rail mount)
│   │   ├── i18n/       # en.ts + ar.ts (mirrored copy model)
│   │   └── styles/     # global.css (signal tokens + utilities)
│   ├── public/         # app.js, sw.js, manifest.json, assets
│   ├── astro.config.mjs
│   └── deploy.js       # copies dist/ → root, cleans _astro, stamps sw cache
├── assets/             # Images, resume, favicon
└── dist/               # Build output (ignored by git)
```

## 🛠️ Development
```bash
cd site
npm install
npm run dev        # or: astro dev --background
npm run build
node deploy.js     # deploy to GitHub Pages root
```

The `npm run build` command outputs the static site to `../dist`; `deploy.js` copies it to the repository root and stamps the service-worker cache version.

## 👨‍💻 About Moataz Ahmed
Full-Cycle Product Engineer based in Cairo, Egypt. Takes products from raw idea to production — discovery, architecture, design, frontend, backend, QA, deploy, and ongoing operation — and creator of aiZee, a Sovereign AI engineering control plane for LLM governance.

---
*Created with passion by [Moataz Ahmed](https://github.com/m3taz-ahmed)*
