import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/*?lightbox="],
      },
      {
        userAgent: "PetalBot",
        disallow: "/",
      },
    ],
    sitemap: "https://www.mirasisone.com/sitemap.xml",
  };
}
