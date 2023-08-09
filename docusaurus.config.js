const codeTheme = require('./src/utils/prism');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Active Courses',
    // tagline: 'All the tools you need to build modern transactional notification experience',
    url: 'https://www.activecourses.tech',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'alikehel', // Usually your GitHub org/user name.
    projectName: 'activecourses', // Usually your repo name.
    plugins: [
        'docusaurus-plugin-sass',
        [
            'docusaurus-plugin-plausible',
            {
                domain: 'activecourses.co',
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarCollapsed: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/alikehel/activecourses/blob/main/',
                    breadcrumbs: false,
                    routeBasePath: '/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
                blog: {
                    blogSidebarCount: 0,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            announcementBar: {
                id: 'github_star',
                content:
                    '⭐️ If you like Active Courses, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/alikehel/activecourses">GitHub</a> ⭐️',
                backgroundColor: '#212121',
                textColor: '#fff',
            },
            metadata: [
                { name: 'robots', content: 'max-image-preview:large' },
                {
                    name: 'keywords',
                    content: 'Active Courses',
                },
            ],
            image: '/img/social-preview.jpg',
            // algolia: {
            //   appId: 'aa',
            //   apiKey: 'aa',
            //   indexName: 'activecourses',
            //   contextualSearch: true,
            //   // externalUrlRegex: '',
            // },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                },
            },
            navbar: {
                title: 'Active Courses',
                hideOnScroll: true,
                logo: {
                    alt: 'Active Courses Logo',
                    src: 'img/logo-192x192.png',
                    srcDark: 'img/logo-192x192.png',
                    href: '/',
                    target: '_self',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'introSidebar',
                        position: 'left',
                        label: 'Intro',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'coreSidebar',
                        position: 'left',
                        label: 'Core',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'subfieldsSidebar',
                        position: 'left',
                        label: 'Subfields',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'resourcesAndGuidesSidebar',
                        position: 'left',
                        label: 'Resources & Guides',
                    },
                    { to: '/blog', label: 'Blog', position: 'right' },
                    {
                        type: 'search',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/alikehel/activecourses',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://discord.activecourses.tech',
                        label: 'Discord',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Active Courses. Built with 🤍 By <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alikehel/">Ali Kehel</a>.`,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 2,
            },
            prism: {
                theme: codeTheme,
                additionalLanguages: ['php', 'ruby', 'java', 'csharp', 'go', 'kotlin', 'python'],
            },
        }),
};
