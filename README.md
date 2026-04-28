# NESHISE

Astro + Tailwind starter for **NESHISE**, an AI startup with the tagline **Accessible AI for all**.

## Features

- White background theme with soft gold navigation
- Holographic neon hover effects on service and blog cards
- Astro content collection blog
- Responsive homepage, blog index, and blog article pages
- Future-ready headless WordPress plan via the free WordPress REST API
- Optional build-time WordPress REST API fetch for public posts
- Automated `hostinger-static` builds for Hostinger Git deployment

## Architecture & Code Principles

This repository is designed with a strict adherence to clean, modular, and reusable code principles:

- **Separation of Concerns:** Data (constants, API fetching), layout (HTML shells), and presentation logic are cleanly separated.
- **Abstraction:** Large page files like `index.astro` act purely as controllers, delegating all UI rendering to specific, focused section components (e.g., `HeroSection`, `ServicesSection`).
- **Encapsulation:** Reusable UI elements (like cards, headers, and footers) are encapsulated into their own components so they can be modified without risking side-effects elsewhere.
- **DRY (Don't Repeat Yourself):** Hardcoded navigational links and static content arrays are managed centrally in `src/lib/constants.ts` to prevent duplication across layouts and pages.

## Commands

```bash
npm install
npm run dev
npm run build
```

Blog posts live in `src/content/blog`.

Optional future WordPress API settings live in `.env.example`.
When `WORDPRESS_API_URL` is set, the blog lists use public WordPress posts and
fall back to local Markdown if the API is unavailable. WordPress posts are also
generated as Astro blog pages when the API is available at build time.

## Hostinger / WordPress note

This is an Astro static site, not a WordPress theme. For Hostinger, build with
`npm run build` and deploy the generated `dist/` folder to a static site or
public hosting directory. If you need it inside WordPress.org, convert the Astro
templates into a WordPress theme or embed the static output separately from the
WordPress install.

### Recommended Hostinger Git deployment

Use `main` for source code and deploy the `hostinger-static` branch in hPanel.
That branch contains the built static files from `dist/`.

In Hostinger hPanel:

1. Go to Websites -> Manage for the target site.
2. Search for Git in the left sidebar.
3. Use repository `https://github.com/neshi-dev/Neshise-Website.git`.
4. Use branch `hostinger-static`.
5. Leave Install Path empty only if `public_html` is empty and this Astro site
   should replace the root website. Use a subfolder if WordPress already lives
   in `public_html`.

For a future WordPress/Hostinger/GitHub setup, see
`docs/headless-wordpress-plan.md`.

## Free GitHub Pages preview

This repo includes a GitHub Actions workflow for GitHub Pages. It builds Astro
with `DEPLOY_TARGET=github-pages`. The base path is detected from the GitHub
repository name.

The private organization repo is prepared for:

```txt
https://neshise.github.io/neshise/
```

If the GitHub plan does not allow Pages for private repos, use the public mirror
instead:

```txt
https://neshi-dev.github.io/Neshise-Website/
```
