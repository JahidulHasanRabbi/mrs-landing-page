# mrs-landing-page

The public marketing landing page for **KingGroup44** — a Next.js 16 (App Router) app
extracted from the main `mrs-g6` portal so the desktop landing page can be developed
and deployed independently.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind v4 (PostCSS plugin) · Framer Motion · `react-icons`.
JS/JSX (`allowJs`, non-strict TS). Path alias `@/*` → repo root.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — ESLint (`next/core-web-vitals`)

## Structure

- `app/page.js` — renders the landing page at `/`.
- `app/components/landing/LandingPage.jsx` — the full page (header, hero, VIP tier bar,
  games carousel, partners, footer) with Framer Motion entrance/scroll animations.
- `app/components/landing/landingData.js` — all copy, VIP tiers, games, partner links.
- `public/assets/landing/` — logo, badge/game/partner PNGs, and Iconify SVG icons
  (rendered via CSS mask so they inherit the parent's text color).

## Notes

- The page is designed full-bleed at desktop widths (max content 1440px) and is
  responsive down to mobile.
- Animations honor `prefers-reduced-motion` via Framer Motion's `MotionConfig`.
- Icons follow the Iconify convention: download the original SVG from the Iconify CDN
  (filename = slug with `:` → `-`) into `public/assets/landing/icons/`; never hand-roll
  inline SVG approximations.
