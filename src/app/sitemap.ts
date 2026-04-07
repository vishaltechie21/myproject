import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/site";

export const revalidate = 3600;

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/pricing",
  "/services",
  "/services/crm",
  "/services/mobile",
  "/services/uiux",
  "/services/web",
  "/solutions",
  "/solutions/marketing",
  "/solutions/operations",
  "/solutions/service",
  "/websites",
  "/help-center",
  "/privacy",
  "/terms",
  "/security",
  "/cookie-policy",
  "/disclaimer",
  "/demo",
  "/sitemap",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const coreUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreUrls, ...blogUrls];
}