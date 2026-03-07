import type { ToolCategory } from "@/types";

export const toolCategories: ToolCategory[] = [
  {
    id: "seo-generators",
    name: "SEO Generators",
    slug: "seo-generators",
    description: "Generate technical SEO assets like meta tags, robots.txt, canonicals, and schema markup.",
    seoTitle: "SEO Generators - Meta, Canonical, Robots, and Schema Tools",
    seoDescription: "Use practical generators for meta tags, robots.txt, canonical tags, FAQ schema, and more."
  },
  {
    id: "content-tools",
    name: "Content Tools",
    slug: "content-tools",
    description: "Content-focused utilities for structure, optimization, and publishing workflows.",
    seoTitle: "Content Tools for SEO and Publishing Workflows",
    seoDescription: "Optimize content workflows with keyword density analysis and markdown conversion tools."
  },
  {
    id: "text-utilities",
    name: "Text Utilities",
    slug: "text-utilities",
    description: "Fast text formatting and transformation tools built for creators and developers.",
    seoTitle: "Text Utilities - Format, Convert, and Clean Text",
    seoDescription: "Convert text case, generate slugs, and prepare content for modern websites quickly."
  },
  {
    id: "validators",
    name: "Validators",
    slug: "validators",
    description: "Check important SEO and technical assets before publishing.",
    seoTitle: "SEO Validators and Technical Checks",
    seoDescription: "Validate sitemaps and inspect content quality before publishing your pages."
  }
];
