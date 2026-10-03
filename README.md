<div align="center">

![Veggify preview](preview.webp)

# Veggify

**A recipe blog template for food influencers, ported to Astro.**

Static-first, content-collection driven, and faithful to the original design.

[![Astro](https://img.shields.io/badge/Astro-7.x-000000?style=for-the-badge&logo=astro)](https://astro.build)
[![License](https://img.shields.io/badge/License-See%20LICENSE-blue?style=for-the-badge)](./LICENSE)

</div>

---

## Why this exists

This started as an experiment: how much of an exported HTML/CSS site survives a
port to Astro without a redesign?

For this template, nearly all of it. The original markup, class names and
stylesheet are kept as-is; what gets replaced is the runtime. Webflow's JS
becomes a 189-line vanilla script, the CMS export becomes Markdown behind a Zod
schema, and each page becomes an Astro component. 33 pages build in under a
second, with no client framework and no hydration.


## Quick start

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The dev server prints a local URL. Before you publish, set `siteUrl` in
[`src/config/site.ts`](./src/config/site.ts) to your production domain — it
drives canonical links, the sitemap, the RSS feed and social image URLs.

## Commands

| Command                 | What it does                                      |
| ----------------------- | ------------------------------------------------- |
| `npm run dev`           | Dev server with hot reload                        |
| `npm run build`         | Static build to `dist/`                           |
| `npm run preview`       | Serve the built `dist/` locally                   |
| `npm run check`         | `astro check` (TypeScript + Astro diagnostics)    |
| `npm run format`        | Prettier write                                    |
| `npm run format:check`  | Prettier check                                    |
| `npm run release:check` | check + build + format check, the pre-deploy gate |

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, plain nginx).

## Before you launch

The template runs in demo mode out of the box. You will silently lose
subscribers and messages unless you complete these:

- Set `siteUrl` in `src/config/site.ts` to your production domain.
- Set `newsletter.action` in `src/config/newsletter.ts` to your provider endpoint.
- Set `contact.action` in `src/config/contact.ts` to your form backend endpoint.
- Replace `email`, `socials`, `authorName`, and `featuredIn` in `src/config/site.ts`.
- Regenerate `public/og-image.jpg` if branding changed.

## License

The original Veggify template is by [Kevin Dakin](https://www.kevindakin.com).
See [LICENSE](./LICENSE) for terms.
