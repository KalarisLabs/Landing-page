import { MetadataRoute } from "next";

const blogPosts = [
  "serving-100b-models-consumer-hardware",
  "automating-literature-review",
  "fault-tolerant-research-runtime",
];

const staticPages = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/infrastructure",
  "/manifesto",
  "/platform",
  "/privacy",
  "/research",
  "/security",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalarislabs.com";
  const now = new Date();

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: (route === "" || route === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}