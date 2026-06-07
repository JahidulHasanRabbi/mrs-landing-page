import { siteUrl } from "./siteUrl";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/faq", priority: 0.6 },
  { path: "/affiliate-program", priority: 0.6 },
  { path: "/responsible-gaming", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap() {
  return ROUTES.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
