import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-slate-950 dark:text-white">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              A scalable SEO and web utility platform designed for high-quality publishing, technical workflows,
              and future SaaS expansion.
            </p>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Contact: {siteConfig.contactEmail}</p>
        </div>

        {Object.entries(footerNavigation).map(([group, items]) => (
          <div key={group} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {group}
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </footer>
  );
}
