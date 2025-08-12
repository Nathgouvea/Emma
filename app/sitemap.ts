import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  ).replace(/\/$/, "");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const now = new Date();
  const routes = ["/", "/about", "/portfolio", "/work-with-me", "/contact"];
  return routes.map((path) => ({
    url: `${site}${basePath}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
