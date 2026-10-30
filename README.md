# Moataz Ahmed | Lead Systems Architect & aiZee Creator

[![aiZee](https://img.shields.io/badge/aiZee-v6.5.0-6C63FF?style=for-the-badge&logo=buffer&logoColor=white)](https://github.com/m3taz-ahmed/aizee)
[![Laravel](https://img.shields.io/badge/Laravel-13-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![Filament](https://img.shields.io/badge/Filament-v5-f97316?style=for-the-badge&logo=laravel)](https://filamentphp.com)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-blue?style=for-the-badge&logo=github)](https://m3taz-ahmed.github.io/)

High-performance bilingual portfolio for Moataz Ahmed — Lead Systems Architect & creator of **aiZee** (Sovereign AI OS: 29 personas, 151 skills, 65 workflows, 7400+ tests, 100% coverage). 15+ years Laravel 13 / Filament v5 / PHP 8.5 audit-ready systems.

## 🚀 Live Demo
Visit the live site here: [https://m3taz-ahmed.github.io/](https://m3taz-ahmed.github.io/)

## 🛠️ Tech Stack
- **Framework:** [Astro 7](https://astro.build/) with static export + React islands.
- **3D:** [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — WebGL particle field hero.
- **Animation:** [GSAP](https://gsap.com/) ScrollTrigger — parallax, kinetic typography, magnetic cursor.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with glassmorphism design system.
- **Icons:** [Lucide icons](https://lucide.dev/) for lightweight SVG icons.
- **i18n:** Arabic + English (hreflang, `sitemap` i18n, `og:locale:alternate`).
- **PWA:** `manifest.json` + service worker (offline).
- **SEO:** OG, Twitter Cards, `Person`+`WebSite`+`ItemList` JSON-LD, `hreflang`, `robots`, `sitemap.xml`.
- **Contact:** [Web3Forms](https://web3forms.com/) with honeypot + time-trap + validation.
- **Brand:** [aiZee v6.5.0](https://github.com/m3taz-ahmed/aizee) — `assets/aizee-logo.png`.

## ✨ Key Features
- **Bilingual:** EN/AR with `hreflang` + `og:locale` + localized routes.
- **3D Hero:** WebGL particle field with mouse-reactive rotation and wireframe core.
- **GSAP Animations:** Scroll-driven parallax, kinetic section titles, magnetic buttons, 3D tilt cards.
- **aiZee Sovereign AI:** Dedicated section — `v6.5.0`, 29 personas, 151 skills, live GitHub stats.
- **Filterable Projects:** `All / AI / SaaS / B2B / Audit` + `Featured` + case-study links + NDA handling.
- **Open Source Hub:** Live `api.github.com` stats for aiZee + 7 case-study repos.
- **Audit-Ready:** RBAC, hash-chained audit, SOLID, OWASP narrative throughout.
- **Optimized:** Particles respects `prefers-reduced-motion`, lazy images, `back-to-top`, reveal animations.

## 📂 Project Structure
```text
.
├── index.html          # Main landing page (built output)
├── ar/                 # Arabic landing page (built output)
├── site/               # Astro source project
│   ├── src/
│   │   ├── pages/      # Routes and 404
│   │   ├── components/ # Reusable section components
│   │   │   └── react/  # React islands (Hero3D, TiltCard, MagneticCursor)
│   │   ├── layouts/    # Layouts and shared UI
│   │   ├── i18n/       # English and Arabic translations
│   │   ├── scripts/    # GSAP scroll animations
│   │   └── styles/     # Global Tailwind CSS entry
│   ├── public/         # Static assets and service worker
│   ├── astro.config.mjs
│   └── package.json
├── assets/             # Images, resume, and favicon
└── dist/               # Build output (ignored by git)
```

## 🛠️ Development
```bash
cd site
npm install
npm run dev
npm run build
npm run preview
```

The `npm run build` command outputs the static site to `../dist` and is copied to the repository root for GitHub Pages.

## 👨‍💻 About Moataz Ahmed
Seasoned Software Engineer based in Cairo, Egypt. Specializing in building secure, scalable architectures for complex business logic using the Laravel ecosystem, and creator of aiZee — a Sovereign AI engineering control plane for LLM governance.

---
*Created with passion by [Moataz Ahmed](https://github.com/m3taz-ahmed)*
