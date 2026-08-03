import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kalarislabs.com";
  
  const routes = [
    "",
    "/platform",
    "/research",
    "/infrastructure",
    "/open-source",
    "/blog",
    "/manifesto",
    "/careers",
    "/contact",
    "/agentic-science",
    "/autonomous-scientific-discovery",
    "/scientific-inference",
    "/research-orchestration",
    "/research-verification",
    "/autonomous-rd",
    "/scientific-copilot",
    "/gpu-scientific-computing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
