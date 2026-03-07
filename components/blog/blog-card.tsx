import Link from "next/link";
import type { BlogPost } from "@/types";
import { Card } from "@/components/shared/card";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{formatDate(post.publishedAt)}</span>
          <Link href={`/blog/${post.slug}`} className="font-semibold text-emerald-600 dark:text-emerald-400">
            Read article
          </Link>
        </div>
      </div>
    </Card>
  );
}
