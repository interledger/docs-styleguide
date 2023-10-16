import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
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
        github: "https://github.com/interledger/docs-styleguide",
      },
      sidebar: [
        {
          label: "Content",
          items: [
            { label: "Global style guide", link: "/content/global/" },
            {
              label: "Open Payments style guide",
              link: "/content/openpayments/",
            },
            {
              label: "Web Monetization style guide",
              link: "/content/webmonetization/",
            },
            { label: "Prettier", link: "/content/prettier/" },
            { label: "Test", link: "/content/test/" },
          ],
        },
        {
          label: "Components",
          autogenerate: {
            directory: "components",
          },
        },
        {
          label: "Classes",
          autogenerate: {
            directory: "classes",
          },
        },
      ],
    }),
  ],
  server: {
    port: 1105,
  },
});
