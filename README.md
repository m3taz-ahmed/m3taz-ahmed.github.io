# Moataz Ahmed | Professional Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-blue?style=for-the-badge&logo=github)](https://m3taz-ahmed.github.io/)
[![Laravel](https://img.shields.io/badge/Expertise-Laravel_13-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![Filament](https://img.shields.io/badge/Expertise-Filament_v5-f97316?style=for-the-badge&logo=laravel)](https://filamentphp.com)
[![aiZee](https://img.shields.io/badge/Sovereign_AI-aiZee_v4.22.1-8B5CF6?style=for-the-badge&logo=python&logoColor=white)](https://github.com/m3taz-ahmed/ai-globals)

A high-performance, bilingual professional portfolio website showcasing 15+ years of experience in Software Engineering, System Architecture, Internal Audit, and Sovereign AI Engineering. This site is designed to be "Audit-Ready," reflecting a unique dual-expertise in both technical development and system integrity.

## 🚀 Live Demo
Visit the live site here: [https://m3taz-ahmed.github.io/](https://m3taz-ahmed.github.io/)

## 🛠️ Tech Stack
- **Framework:** [Astro 7](https://astro.build/) with static export.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a custom dark glassmorphism design system.
- **Icons:** [Lucide icons](https://lucide.dev/) for lightweight, accessible SVG icons.
- **Animations:** Custom CSS, Intersection Observer, and a lightweight canvas particle system.
- **i18n:** Arabic and English with a language switcher.
- **PWA:** `manifest.json` and a service worker for offline support.
- **SEO:** Open Graph, Twitter Cards, JSON-LD, `robots.txt`, and `sitemap.xml`.
- **Contact Integration:** [Web3Forms](https://web3forms.com/) for direct email routing.

## ✨ Key Features
- **Bilingual:** Fully localized English and Arabic content.
- **Interactive Professional Journey:** A detailed timeline of 15+ years in the Egyptian tech landscape.
- **Project Case Studies:** Deep dives into SkyBridge, Raunautica, Business Belarabi, IshraqMed, aiZee, Internal Audit (PPC), Gobook, and Gentoura.
- **Sovereign AI Section:** Showcasing aiZee — a version-controlled AI engineering control plane for LLM governance.
- **Audit-Ready Architecture:** Emphasis on RBAC, Data Integrity, and Secure System Design.
- **Responsive & Optimized:** Blazing fast load times and fully mobile-responsive design.

## 📂 Project Structure
```text
.
├── index.html          # Main landing page (built output)
├── ar/                 # Arabic landing page (built output)
├── site/               # Astro source project
│   ├── src/
│   │   ├── pages/      # Routes and 404
│   │   ├── components/ # Reusable section components
│   │   ├── layouts/    # Layouts and shared UI
│   │   ├── i18n/       # English and Arabic translations
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
