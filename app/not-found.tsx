import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          This page could not be found
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          The link may be outdated, the slug may have changed, or the page may not exist yet.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
          >
            Back home
          </Link>

          <Link
            href="/tools"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            Browse tools
          </Link>

          <Link
            href="/blog"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            Read blog
          </Link>
        </div>
      </Container>
    </section>
  );
}