const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Open Banking Interface",
  tagline: "Documentation",
  url: "https://hulgeebnaa.github.io",
  baseUrl: "/open-banking/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicongolomt.png",
  organizationName: "hulgeebnaa", // Usually your GitHub org/user name.
  projectName: "open-banking", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    algolia: {
      apiKey: "YOUR_API_KEY",
      indexName: "YOUR_INDEX_NAME",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: "YOUR_APP_ID",

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: "",
      logo: {
        alt: "Logo",
        src: "img/icongolomt.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/hulgeebnaa/open-banking",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/hulgeebnaa/open-banking",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Golomt Bank`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["java"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/hulgeebnaa/open-banking",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/hulgeebnaa/open-banking",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
