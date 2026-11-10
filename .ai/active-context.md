---
updated: 2026-11-10
---

# Active Context — m3taz-ahmed.github.io

## Last Milestone
**Radical rebuild: "The Pipeline" design system.** Repositioned from "Lead Systems Architect / aiZee showcase" to **"One engineer. The whole product."** — a client-first narrative selling full-cycle product delivery.

## Design System
- **Signature:** a glowing deploy packet travels a fixed signal rail (`#signal-rail` in `SignalLine.astro`) through 7 stations (`data-station` 0–6), activating each section (`is-live` class) as it passes.
- **Tokens:** midnight `#0B0F17` base, signature cyan `--primary`, Space Grotesk display, Inter body, JetBrains Mono furniture, IBM Plex Sans Arabic for AR.
- **Sections:** Hero (live pipeline console) → Pipeline (5 stages w/ self-drawing SVG artifacts) → Work (deploy manifests + archive index) → Profile (audit-log track record) → Engine (aiZee compact, live GH stats) → Contract (engagement model + FAQ + voices) → Contact.

## Stack — drastically simplified
- **Removed:** React, @astrojs/react, Three.js, @react-three/fiber, drei, GSAP (~1.15 MB JS → **16 KB `app.js`**, zero framework).
- Astro `7.0.6` → `^7.4.9` (fixes critical XSS/RCE advisory — `npm audit` clean, 0 vulns).
- All interactions vanilla in `public/app.js`: rail/packet/stations, reveal, counters, cursor, magnetic buttons, parallax, mobile nav (RTL-aware), contact form — all `prefers-reduced-motion` + no-JS safe.
- `deploy.js` now cleans root `_astro/` before copying (stale hashed chunks).

## Verified Facts (unchanged)
- aiZee: v6.7.0, 29 personas, 157 skills, 80 workflows, 7653 tests, 5★, `github.com/m3taz-ahmed/aizee`.
- Live links: facilitiesservices.sa/welcome, raunautica.com, businessbelarabi.com. `ishraqmed.net` dead — excluded.
- 16 public repos, 7 case-study repos.
- Web3Forms access key remains in `Contact.astro` source (key is client-visible by design; rotation is a user decision).
- hCaptcha added to contact form (zero-config shared free sitekey via `web3forms.com/client/script.js`, `data-theme="dark"`, `data-lang` per locale, client-side check in `app.js`). **User must enable "hCaptcha" as the Block-Spam option in the Web3Forms dashboard for server-side enforcement.** Domain restriction is a Pro feature (paid).

## Open Items
- User to review + commit/push (agent does not commit per policy).
- Consider dedicated case-study pages via Content Collections.
- Web3Forms key rotation if desired.
