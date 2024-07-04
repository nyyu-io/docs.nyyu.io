import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NYYU Resource Center',
  tagline: 'The NYYU Resource Center is your ultimate destination for comprehensive helpdesk, in-depth tutorials, FAQs, development APIs, and the latest updates on the NYYU platform.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.nyyu.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NYYU', // Usually your GitHub org/user name.
  projectName: 'NYYU Resource Center', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      // fa: {
      //   label: 'فارسی',
      //   direction: 'rtl',
      //   htmlLang: 'fa-IR',
      //   calendar: 'persian',
      //   path: 'fa',
      // },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    algolia: {
      // The application ID provided by Algolia
      appId: 'IZZT1AVCRI',

      // Public API key: it is safe to commit it
      apiKey: '057c1a9353cae106544caf567cf84d25',

      indexName: 'orbvpn',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NYYU',
      logo: {
        alt: 'NYYU Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },

        {
          type: 'docSidebar',
          sidebarId: 'troubleshootSidebar',
          position: 'left',
          label: 'FAQ',
        },

        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        
        {to: '/blog', label: 'Blog', position: 'left'},

        {
          href: 'https://nyyu.io',
          label: 'Login',
          position: 'right',
        },

        {
          type: 'localeDropdown',
          position: 'right',
        },
        
      ],
    },





    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Trade',
              to: '/docs/tutorial-basics/nyyu-trade',
            },
            {
              label: 'Swap',
              to: '/docs/tutorial-basics/nyyu-swap',
            },
            {
              label: 'Marketplace',
              to: '/docs/tutorial-basics/Marketplace/intro',
            },
            {
              label: 'Loan',
              to: '/docs/tutorial-basics/loan',
            },
            {
              label: 'Save',
              to: '/docs/tutorial-basics/save',
            },
            {
              label: 'Invites',
              to: '/docs/tutorial-basics/invites',
            },

          ],
        },

        {
          title: 'Services',
          items: [
            {
              label: 'Token Listing',
              to: '/',
            },
            {
              label: 'Startup Listing',
              href: '/',
            },
            {
              label: 'Property Listing',
              to: '/',
            },
            {
              label: 'Commodity Listing',
              href: '/',
            },
            {
              label: 'Fees',
              to: '/',
            },
            {
              label: 'Bug Boutny',
              to: '/',
            },
            {
              label: 'Delistings',
              to: '/',
            },
            {
              label: 'PoR (Proof of Reserves)',
              to: '/',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'NYYU API',
              to: '/',
            },
            {
              label: 'NYYU Node',
              href: '/',
            },
            {
              label: 'NYYU Pay',
              to: '/',
            },
          ],
        },
        {
          title: 'Corporate',
          items: [
            {
              label: 'About Us',
              to: '/',
            },
            {
              label: 'Media Kit',
              href: '/',
            },
            {
              label: 'Whistleblower Contact',
              to: '/',
            },
            {
              label: 'Security',
              to: '/',
            },
            {
              label: 'Changelogs',
              href: '/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Contact Us',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://twitter.com/nyyuio',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/nyyuio/',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/nyuuio',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/nyyuio',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Use',
              to: '/',
            },
            {
              label: 'Privacy Policy',
              href: '/',
            },
            {
              label: 'Risk Disclosure Statement',
              to: '/',
            },
            {
              label: 'AML & CFT',
              href: '/',
            },
            {
              label: 'Special Treatment',
              to: '/',
            },
            {
              label: 'Law Enforcmement Requests',
              href: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NYYU UAB`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
