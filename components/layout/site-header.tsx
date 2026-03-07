import Link from "next/link";
import { Sparkles } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { Container } from "@/components/shared/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>WebToolify</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools"
          className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-950"
        >
          Explore Tools
        </Link>
      </Container>
    </header>
  );
}
