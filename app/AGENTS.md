# app/AGENTS.md

This folder contains Next.js App Router routes, layouts, pages, metadata, and route-level logic.

## Rules

- Keep pages clean and readable.
- Do not put large UI logic directly inside page files.
- Move reusable UI into `components/`.
- Move feature-specific sections into `features/`.
- Use proper metadata for SEO.
- Use semantic HTML.
- Keep routing simple and predictable.
- Public pages should load fast and look polished.
- Admin pages must be protected if authentication exists.

## Public Routes

Recommended public routes:

- `/` — homepage;
- `/menu` — full menu/catalog;
- `/about` — brand story;
- `/contacts` — address, map, social links;
- `/admin` — admin dashboard if implemented.

## SEO

Every important page should have:

- title;
- description;
- Open Graph metadata if possible.

The brand should be presented as:

**Time Coffee — premium coffee experience, fresh drinks, desserts, and cozy atmosphere.**

## App Router Best Practices

- Prefer Server Components by default.
- Use Client Components only when needed for interactivity.
- Keep layout files simple.
- Do not put secret environment variables in client components.
- Use loading and error states where needed.
