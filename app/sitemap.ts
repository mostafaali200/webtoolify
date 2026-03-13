import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { tools } from "@/data/tools";
import { toolCategories } from "@/data/tool-categories";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticPages = [
    "/",
    "/tools",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer"
  ];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8
    })),

    ...toolCategories.map((category) => ({
      url: `${baseUrl}/tools/category/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),

    ...tools
      .filter((tool) => tool.status === "published")
      .map((tool) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9
      })),

    ...blogPosts.map((post) => {
      const publishedDate = new Date(post.publishedAt);
      const safeLastModified = publishedDate > now ? now : publishedDate;

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: safeLastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7
      };
    })
  ];
}