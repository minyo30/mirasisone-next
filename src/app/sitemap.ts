import type { MetadataRoute } from "next";
import { seoUrlInventory } from "@/content/seo-url-inventory";

const baseUrl = "https://www.mirasisone.com";
const implementedPaths = new Set(["/", "/works", "/contact", "/blog", "/company", "/recruit", "/privacy-policy"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPages = seoUrlInventory
    .filter((entry) => entry.type === "pages")
    .filter((entry) => implementedPaths.has(entry.path))
    .map((entry) => ({
      url: `${baseUrl}${entry.path === "/" ? "" : entry.path}`,
      lastModified: new Date(entry.lastmod || "2026-07-31"),
      changeFrequency: "monthly" as const,
      priority: entry.path === "/" ? 1 : 0.9,
    }));

  return [
    ...fixedPages,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-07-31"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
