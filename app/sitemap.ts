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

const programmaticPages = [
  "agentic-science",
  "autonomous-scientific-discovery",
  "scientific-inference",
  "research-orchestration",
  "research-verification",
  "autonomous-rd",
  "scientific-copilot",
  "gpu-scientific-computing",
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

  const programmaticUrls = programmaticPages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls, ...programmaticUrls];
}