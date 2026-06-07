// Absolute base URL used for metadata, Open Graph images, canonical links,
// robots.txt, and sitemap.xml. Resolution order:
//   1. NEXT_PUBLIC_SITE_URL — explicit override (set this once a custom domain is live)
//   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain Vercel injects automatically
//   3. hardcoded fallback — the current Vercel URL, so local builds still emit absolute URLs
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "https://mrs-landing-page.vercel.app";
