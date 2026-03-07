import type { ReactNode } from "react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: ReactNode;
};

export function PageHero({ title, description, breadcrumbs, actions }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50 to-white py-14 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">
      <Container className="space-y-6">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
          </div>
          {actions}
        </div>
      </Container>
    </section>
  );
}
