// Absolute base URL used for metadata, Open Graph images, canonical links,
// robots.txt, and sitemap.xml. Resolution order:
//   1. NEXT_PUBLIC_SITE_URL — explicit override (set this if the domain changes again)
//   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain Vercel injects automatically
//   3. hardcoded fallback — the live production domain
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "https://kinggroup44.com";
