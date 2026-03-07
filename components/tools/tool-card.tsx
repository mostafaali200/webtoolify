import Link from "next/link";
import type { ToolDefinition } from "@/types";
import { Card } from "@/components/shared/card";
import { CategoryBadge } from "@/components/shared/category-badge";
import { ToolIcon } from "@/components/shared/tool-icon";

type ToolCardProps = {
  tool: ToolDefinition;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="group h-full transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/10">
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <ToolIcon iconKey={tool.iconKey} className="h-5 w-5" />
          </span>
          <CategoryBadge slug={tool.category} />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
            <Link href={`/tools/${tool.slug}`} className="after:absolute after:inset-0">
              {tool.name}
            </Link>
          </h3>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            {tool.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
          {tool.featured ? (
            <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Featured</span>
          ) : null}
          {tool.popular ? (
            <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Popular</span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}