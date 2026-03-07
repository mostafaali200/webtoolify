import Link from "next/link";
import { getCategoryBySlug } from "@/lib/content";

type CategoryBadgeProps = {
  slug: string;
};

export function CategoryBadge({ slug }: CategoryBadgeProps) {
  const category = getCategoryBySlug(slug);

  if (!category) return null;

  return (
    <Link
      href={`/tools/category/${category.slug}`}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
    >
      {category.name}
    </Link>
  );
}
