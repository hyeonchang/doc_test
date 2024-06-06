// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developer Center',
  tagline: 'We bring Safe, Fast and Affordable On-Device AI Solutions in your reach',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hyeonchang.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc_test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hyeonchang', // Usually your GitHub org/user name.
  projectName: 'doc_test', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
       docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'q-face-pro',
        path: 'products/q-face-pro',
        routeBasePath: 'products/q-face-pro',
        sidebarPath: './sidebarsProducts.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'q-vision-engine',
        path: 'products/q-vision-engine',
        routeBasePath: 'products/q-vision-engine',
        sidebarPath: './sidebarsProducts.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'q-face-engine',
        path: 'products/q-face-engine',
        routeBasePath: 'products/q-face-engine',
        sidebarPath: './sidebarsProducts.js',
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        logo: {
          alt: 'Suprema AI, Inc.',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          
        },
        items: [
          {to: '/' , label: 'Home', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'overviewSidebar',
            position: 'left',
            label: 'Docs',
          },

          {to: '/blog', label: 'Blog', position: 'right'},
          
          {
            type: 'dropdown',
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'Q-Face Pro',
                to: 'products/q-face-pro/intro',
              },
              {
                label: 'Q-Face Engine',
                to: 'products/q-face-engine/intro',
              },
              {
                label: 'Q-Vision Engine',
                to: 'products/q-vision-engine/intro',
              },
            ],
          },

          {
            label: 'Contact Us',
            position: 'right',
            href: 'https://www.suprema.ai/contact',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Overview',
            items: [
              {
                label: 'Introduction',
                to: '/docs/overview/introduction',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Q-Face Pro',
                to: '/products/q-face-pro/intro',
              },
              {
                label: 'Q-Face Engine',
                to: '/products/q-face-engine/intro',
              },
              {
                label: 'Q-Vision Engine',
                to: '/products/q-vision-engine/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/suprema-ai',
              },
              {
                label: 'LinkedIn',
                href: 'https://kr.linkedin.com/company/suprema-ai',
              },
            ],
          },
          
        ],
        logo: {
          alt: 'Suprema AI, Inc.',
          src: 'img/logo_suprema_ai.svg',
          href: 'https://suprema.ai',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Suprema AI, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
