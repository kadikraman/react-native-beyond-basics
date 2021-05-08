/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Native: Beyond Basics',
  tagline: 'An intermediate React Native course by Kadi Kraman',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kadikraman', // Usually your GitHub org/user name.
  projectName: 'react-native-beyond-basics', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'React Native - Beyond Basics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Course',
        },
        {
          href: 'https://github.com/kadikraman/react-native-beyond-basics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kadi Kraman. Built with Docusaurus. Icons from Flaticon.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kadikraman/react-native-beyond-basics/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
