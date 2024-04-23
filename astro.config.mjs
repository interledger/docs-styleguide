import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
  site: "https://interledger.tech",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  integrations: [
    starlight({
      title: "Docs style guide",
      description:
        "The style guide for all Interledger documentation sites. Because we love consistency.",
      customCss: [
        "./node_modules/@interledger/docs-design-system/src/styles/orange-theme.css",
        "./node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css",
      ],
      expressiveCode: {
        styleOverrides: {
          borderColor: "transparent",
          borderRadius: "var(--border-radius)",
        },
      },
      social: {
        github: "https://github.com/interledger/docs-styleguide",
      },
      components: {
        Header: "./src/components/Header.astro",
      },
      sidebar: [
        {
          label: "Content",
          autogenerate: {
            directory: "content",
          },
        },
        {
          label: "Classes and styles",
          autogenerate: {
            directory: "classes",
          },
        },
        {
          label: "Shared Components",
          autogenerate: {
            directory: "shared",
          },
        },
        {
          label: "Open Payments Components",
          autogenerate: {
            directory: "oppm",
          },
        },
        {
          label: "Web Monetization Components",
          autogenerate: {
            directory: "webm",
          },
        },
      ],
    }),
  ],
  server: {
    port: 1105,
  },
});
