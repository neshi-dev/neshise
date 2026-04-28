# Headless WordPress and Hostinger Plan

NESHISE is currently built as an Astro + Tailwind static site. It can replace
the public WordPress front end while WordPress remains available as a content
source later.

## Recommended architecture

Use GitHub as the source of truth for the Astro website:

- `main`: Astro source code
- `hostinger-static`: built static files for Hostinger Git deployment

Use WordPress only as a headless CMS if needed:

- Keep WordPress on `cms.neshise.com`, `wp.neshise.com`, or `/wordpress`
- Fetch public posts through the free WordPress REST API
- Keep `neshise.com` as the Astro front end

## Final NESHISE setup

For the most control with the least daily friction:

1. Point Namecheap DNS to Hostinger using the nameservers shown in hPanel.
2. Host the Astro/Tailwind website at `www.neshise.com`.
3. Install WordPress on `cms.neshise.com` for daily GUI content creation.
4. Set `WORDPRESS_API_URL` to `https://cms.neshise.com/wp-json/wp/v2`.
5. Let GitHub Actions rebuild the static site daily and publish `hostinger-static`.
6. Enable Hostinger Git Auto Deployment for `hostinger-static`.

This keeps your public website modern and fast while WordPress remains the
simple editor for posts, pages, resources, and future content types.

Until the CMS subdomain is ready, the GitHub workflows use the current root
WordPress API as a fallback: `https://neshise.com/wp-json/wp/v2`. After Astro
is connected to the root domain, set the GitHub repository variable
`WORDPRESS_API_URL` to the CMS subdomain endpoint.

## Why WordPress should not stay at the root

If the Astro site replaces everything in `public_html`, the existing WordPress
REST endpoint at `https://neshise.com/wp-json/wp/v2` may disappear. To keep
WordPress available for content, host it separately from the Astro front end.

Good options:

- `https://cms.neshise.com/wp-json/wp/v2/posts`
- `https://wp.neshise.com/wp-json/wp/v2/posts`
- `https://neshise.com/wordpress/wp-json/wp/v2/posts`

## Free API options

### WordPress REST API

Best for blog posts, pages, categories, media, and authors.

Example endpoint:

```txt
https://cms.neshise.com/wp-json/wp/v2/posts?_embed=1
```

Public posts can be fetched without paid services or API keys.

### GitHub repository content

Best for developer-controlled content such as Markdown posts, changelogs, and
configuration files. The current Astro content collection already supports this
through files in `src/content/blog`.

### Hostinger Git deploy

Best for publishing the built site. Hostinger can pull the `hostinger-static`
branch into the hosting directory.

## Future Astro fetch pattern

When WordPress is ready as a headless CMS, add a server-side fetch utility:

```ts
const apiUrl = import.meta.env.WORDPRESS_API_URL;
const posts = await fetch(`${apiUrl}/posts?_embed=1`).then((res) => res.json());
```

Keep the local Markdown blog as a fallback so the site still builds if the
WordPress API is temporarily unavailable.

## Automation

The workflow `.github/workflows/hostinger-static.yml` rebuilds the site:

- whenever `main` changes
- manually from GitHub Actions
- once per day on a schedule

The build fetches WordPress posts through the REST API and publishes a fresh
`hostinger-static` branch. Hostinger can auto-deploy that branch.
