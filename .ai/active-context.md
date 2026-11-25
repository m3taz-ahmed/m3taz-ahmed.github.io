---
updated: 2026-11-25
---

# Active Context — m3taz-ahmed.github.io

## Last Milestone
**Responsive/RTL remediation + production rebuild.** The Pipeline design is intact, but mobile/RTL correctness, touch accessibility, contact-form fit, localization details, and service-worker activation were hardened.

## What Changed
- **RTL overflow:** removed the Arabic horizontal-overflow path. The mobile menu is now a sibling of the backdrop-filtered header (fixed positioning is no longer trapped), uses direction-aware off-canvas transforms, `hidden` cleanup after transition, Escape close, link-click close, focus return, and localized open/close labels.
- **Mobile menu access:** larger tap targets for burger, theme, language, nav/menu links, work links, and footer links. GitHub header icon is shown from `xl` up to avoid crowding small laptops.
- **Hero:** Arabic SVG console geometry is correctly mirrored; Latin artifact filenames stay LTR. Hero proof stats switch to 2 columns in the `lg` range and back to 4 at `xl`, removing overlap at 1024px.
- **Pipeline:** SVG artifact diagrams force `direction: ltr`, preventing English technical labels from flipping/clipping inside Arabic pages. Mobile stages no longer use a cramped two-column base grid.
- **Contact:** grid children use `min-w-0`; hCaptcha uses documented compact mode; the honeypot uses non-overflowing `sr-only`; phone rendering is forced LTR in Arabic; Arabic UI no longer shows hardcoded English `Message` / response-time text.
- **Service worker:** now registered outside localhost and hardened to same-origin requests only; failed non-navigation assets return a real error instead of HTML fallback.
- **Cursor:** custom cursor stays hidden until first mouse movement, preventing a false/visible artifact at the page origin.

## Verified 2026-11-25
- `npm run deploy` succeeded; final root cache stamp `20261125211423`.
- Static CDP audit against the generated repository root covered 12 combinations: 360, 390, 768, 1024, 1280, 1440 px widths × EN/AR.
- Every combination: no horizontal overflow (`scrollWidth === clientWidth`), 0 overflow offenders, 0 browser console errors, 0 broken images.
- Mobile menu passed open, visual hit-test/coverage, Escape close, and first-link close in EN and AR at 360/390/768.
- Contact layout and compact captcha fit at every width; empty required fields remain invalid.
- Interaction tests passed on mobile EN/AR and desktop EN: theme toggle persists, back-to-top appears and returns to top, all nav anchors resolve, rail progress advances, and a mocked Web3Forms submit sends required fields, excludes honeypot/timestamp, shows localized success, and resets the form.
- `git diff --check` clean; `node --check` clean for `site/public/app.js` and `site/public/sw.js`.
- `npm test` passes 3/3 Node built-in regression tests covering EN/AR translation-key parity, same-origin service-worker behavior, and the mobile-menu contract.

## Design System
- **Signature:** a glowing deploy packet travels a fixed signal rail through 7 stations (`data-station` 0–6), activating each section as it passes.
- **Tokens:** midnight `#0B0F17` base, signature cyan `--primary`, Space Grotesk display, Inter body, JetBrains Mono furniture, IBM Plex Sans Arabic for AR.
- **Sections:** Hero (live pipeline console) → Pipeline (5 stages w/ self-drawing SVG artifacts) → Work (deploy manifests + archive index) → Profile (audit-log track record) → Engine (aiZee compact, live GH stats) → Contract (engagement model + FAQ + voices) → Contact.

## Stack
- Astro `^7.4.9`, Tailwind CSS `4.3.2`, zero framework JS. Interactions are vanilla in `public/app.js` (~small single file), with reduced-motion and no-JS-safe fallbacks.
- Deploy flow: `npm run deploy` builds, applies relative paths, stamps `sw.js`, cleans stale root `_astro/`, and copies generated output to repository root.

## Verified Facts (unchanged)
- aiZee: v6.7.0, 29 personas, 157 skills, 80 workflows, 7653 tests, 5★, `github.com/m3taz-ahmed/aizee`.
- Live links: facilitiesservices.sa/welcome, raunautica.com, businessbelarabi.com. `ishraqmed.net` dead — excluded.
- Web3Forms access key remains client-visible by design; rotation is a user decision.
- hCaptcha was enabled and saved as the captcha protection option in the Web3Forms dashboard on 2026-11-25; the generated EN/AR pages include the compact zero-config widget and client script. Domain restriction is a Pro feature.

## Open Items
- User to review + commit/push (agent does not commit per policy).
- Consider dedicated case-study pages via Content Collections.
- Consider whether section 04 (Engine) should join the primary nav; it is currently omitted intentionally to preserve desktop density.
