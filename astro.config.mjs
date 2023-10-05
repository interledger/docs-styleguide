import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
  site: "https://interledger.tech",
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    starlight({
      title: "Docs style guide",
      description:
        "The style guide for all Interledger documentation sites. Because we love consistency.",
      customCss: [
        "./node_modules/@interledger/docs-design-system/src/styles/green-theme.css",
        "./node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css",
      ],
      social: {
        github: "https://github.com/interledger",
      },
      sidebar: [
        {
          label: "Content",
          autogenerate: {
            directory: "content",
          },
        },
        {
          label: "Components",
          autogenerate: {
            directory: "components",
          },
        },
      ],
    }),
    react(),
  ],
  server: {
    port: 1105,
  },
});
