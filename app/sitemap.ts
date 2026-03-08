import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const baseUrl = new URL(siteUrl).origin;

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
