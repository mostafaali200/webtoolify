import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { tools } from "@/data/tools";
import { toolCategories } from "@/data/tool-categories";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/tools",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer"
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8
    })),
    ...toolCategories.map((category) => ({
      url: `${siteConfig.url}/tools/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...tools
      .filter((tool) => tool.status === "published")
      .map((tool) => ({
        url: `${siteConfig.url}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9
      })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}