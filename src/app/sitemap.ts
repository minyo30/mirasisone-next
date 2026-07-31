import type { MetadataRoute } from "next";

const baseUrl = "https://www.mirasisone.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-31");

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
