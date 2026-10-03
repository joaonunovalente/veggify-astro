// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import { siteConfig } from "./src/config/site.ts";
import { codeThemes, codeDefaultColor } from "./src/config/code.ts";

import mdx from "@astrojs/mdx";

const shikiConfig = /** @type {const} */ ({
  themes: codeThemes,
  defaultColor: codeDefaultColor,
});

export default defineConfig({
  site: siteConfig.siteUrl,
  integrations: [
    sitemap({
      filter: (page) => page !== new URL("/search/", siteConfig.siteUrl).toString(),
    }),
    mdx(),
  ],
  markdown: {
    processor: unified({
      // Disabled: the legacy template uses straight quotes/apostrophes
      // (e.g. "you'll"), and smartypants would rewrite them to curly ones.
      smartypants: false,
      rehypePlugins: [rehypeSlug],
    }),
    shikiConfig,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
