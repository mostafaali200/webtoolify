import { blogPosts } from "@/data/blog-posts";
import { toolCategories } from "@/data/tool-categories";
import { tools } from "@/data/tools";

export function getPublishedTools() {
  return tools.filter((tool) => tool.status === "published");
}

export function getFeaturedTools() {
  return getPublishedTools().filter((tool) => tool.featured);
}

export function getPopularTools() {
  return getPublishedTools().filter((tool) => tool.popular);
}

export function getToolBySlug(slug: string) {
  return getPublishedTools().find((tool) => tool.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return toolCategories.find((category) => category.slug === slug);
}

export function getToolsByCategory(slug: string) {
  return getPublishedTools().filter((tool) => tool.category === slug);
}

export function getRelatedTools(slugs: string[]) {
  return getPublishedTools().filter((tool) => slugs.includes(tool.slug));
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestPosts(limit = 3) {
  return [...blogPosts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, limit);
}
