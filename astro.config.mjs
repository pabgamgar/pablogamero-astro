import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    robotsTxt({
      sitemap: [
        "https://pablogamero.com/sitemap-index.xml",
        "https://pablogamero.com/rss.xml",
        "https://pablogamero.com/es/rss.xml",
      ],
    }),
  ],
  trailingSlash: "never",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://pablogamero.com",
});
