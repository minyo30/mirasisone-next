import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
          root: __dirname,
    },
    images: {
          remotePatterns: [
            { protocol: "https", hostname: "static.wixstatic.com" },
            { protocol: "https", hostname: "images.microcms-assets.io" },
                ],
    },
    async redirects() {
          return [
            {
                      source: "/home",
                      destination: "/",
                      permanent: true,
            },
            {
                      source: "/services-works",
                      destination: "/works",
                      permanent: true,
            },
            {
                      source: "/privacy-polic",
                      destination: "/privacy-policy",
                      permanent: true,
            },
                ];
    },
};

export default nextConfig;
