import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import starlightLinksValidator from 'starlight-links-validator'
import starlightFullViewMode from 'starlight-fullview-mode'

// https://astro.build/config
export default defineConfig({
  site: 'https://interledger.net',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },
  integrations: [
    starlight({
      title: 'Docs style guide',
      description:
        'The style guide for all Interledger documentation sites. Because we love consistency.',
      customCss: [
        './node_modules/@interledger/docs-design-system/src/styles/teal-theme.css',
        './node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css'
      ],
      plugins: [starlightLinksValidator(), starlightFullViewMode()],
      expressiveCode: {
        styleOverrides: {
          borderColor: 'transparent',
          borderRadius: 'var(--border-radius)'
        }
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/interledger/docs-styleguide'
        }
      ],
      components: {
        Header: './src/components/Header.astro'
      },
      sidebar: [
        {
          label: 'Overview of doc styles',
          link: '/'
        },
        {
          label: 'Style guides',
          autogenerate: {
            directory: 'content'
          }
        },
        {
          label: 'Classes, styles, HTML, etc',
          autogenerate: {
            directory: 'classes'
          }
        },
        {
          label: 'Shared Components',
          autogenerate: {
            directory: 'shared'
          }
        },
        {
          label: 'Open Payments Components',
          autogenerate: {
            directory: 'oppm'
          }
        },
        {
          label: 'Web Monetization Components',
          autogenerate: {
            directory: 'webm'
          }
        }
      ]
    })
  ],
  server: {
    port: 1105
  }
})
