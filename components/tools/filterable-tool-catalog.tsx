"use client";

import { useMemo, useState } from "react";
import type { ToolCategory, ToolDefinition } from "@/types";
import { SearchBar } from "./search-bar";
import { ToolGrid } from "./tool-grid";

type FilterableToolCatalogProps = {
  tools: ToolDefinition[];
  categories: ToolCategory[];
  initialCategory?: string;
};

export function FilterableToolCatalog({
  tools,
  categories,
  initialCategory = "all"
}: FilterableToolCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
      const haystack = `${tool.name} ${tool.shortDescription} ${tool.keywords.join(" ")}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, tools]);

  return (
    <div className="space-y-6">
      <SearchBar onSearch={setQuery} placeholder="Search tools by name, use case, or keyword..." />
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-2xl px-4 py-2 text-sm font-medium ${activeCategory === "all" ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"}`}
        >
          All tools
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-2xl px-4 py-2 text-sm font-medium ${activeCategory === category.slug ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <ToolGrid tools={filtered} />
    </div>
  );
}
