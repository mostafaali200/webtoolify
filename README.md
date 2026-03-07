# WebToolify

WebToolify is a production-ready Next.js platform for SEO tools and web utilities. It is structured like a real product rather than a demo, with a data-driven tool system, reusable content architecture, strong SEO defaults, and room for future SaaS expansion.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- React Server Components by default
- Lightweight client components only where interactivity is required

## Why this architecture

The project is intentionally organized into clear layers:

- `app/` for routes, layout, and metadata entry points
- `components/` for reusable UI, layout, SEO helpers, blog modules, and tool shells
- `data/` for site configuration, tools, categories, navigation, and articles
- `lib/` for metadata, schema, content selectors, tool logic, and utilities
- `types/` for shared TypeScript contracts

This keeps content, configuration, tool logic, and rendering responsibilities separate. New tools can be registered once in the data layer and automatically surface across route generation, metadata, related linking, and sitemap output.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production commands

```bash
npm run build
npm run start
npm run typecheck
```

## Add a new tool

1. Create the interactive logic component in `components/tools/instances/`.
2. Export any helper logic from `lib/tool-logic.ts` if needed.
3. Register the tool in `data/tools.ts` using the shared `ToolDefinition` shape.
4. Add:
   - unique `id`
   - `slug`
   - `category`
   - SEO fields
   - FAQ
   - related tools
   - usage steps
   - content sections
   - examples
   - use cases
   - `toolComponent`
5. Once published, the tool appears automatically in:
   - `/tools`
   - category pages
   - tool detail route generation
   - internal related tool sections
   - sitemap output
   - dynamic metadata generation

## Add a new category

1. Add a category entry in `data/tool-categories.ts`.
2. Assign one or more tools to that category in `data/tools.ts`.
3. The category route and linked badges work automatically.

## Add a new blog article

1. Create a new article object in `data/blog-posts.ts`.
2. Add:
   - `slug`
   - `title`
   - `description`
   - `excerpt`
   - publication date
   - keywords
   - content sections
   - related tools
3. The article will automatically appear in:
   - `/blog`
   - homepage latest articles
   - article route generation
   - sitemap

## Edit metadata

- Global metadata: `app/layout.tsx`
- Shared metadata helper: `lib/metadata.ts`
- Page-level metadata: each route file exports `metadata` or `generateMetadata`

## Edit structured data

- JSON-LD rendering component: `components/seo/json-ld.tsx`
- Schema builders: `lib/schema.ts`

## Create new pages

1. Add a route under `app/`
2. Use `PageHero` for consistency
3. Export metadata using `buildMetadata`
4. Use `Container` and shared components for spacing and visual consistency

## SEO features included

- dynamic metadata for tools, categories, and blog posts
- canonical URLs
- Open Graph and Twitter metadata
- robots.txt
- sitemap.xml
- web site schema
- breadcrumb schema
- tool schema
- article schema
- FAQ schema
- semantic page sections
- internal linking between tools, categories, and articles

## Expansion paths

This architecture is designed to support future upgrades such as:

- API-based tools
- authentication
- dashboards
- saved histories
- premium plans
- multilingual content
- MDX blog content
- CMS integration
- database-backed tool registries
- analytics and event tracking
- ad placement experiments that respect UX

## Recommended pre-launch improvements

- replace placeholder domain and contact details
- add real Open Graph images and app icons
- connect analytics, consent, and monitoring
- harden validators/parsers with robust libraries
- add tests for tool logic and route metadata
- add a real dark mode toggle if user preference switching is needed
- add form backend for contact page
- review all legal text with final business requirements

## Folder overview

```text
app/
components/
  blog/
  layout/
  seo/
  shared/
  tools/
    instances/
data/
lib/
types/
```

## Notes

This starter is intentionally optimized for maintainability, extensibility, and publishing quality. It is a strong foundation for growing a utility platform into a long-term SaaS product.
