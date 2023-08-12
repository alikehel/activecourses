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
                domain: 'activecourses.tech',
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
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
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
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    name: 'keywords',
                    content:
                        'Active Courses, CS study group, Computer Science community, Arabic Discord server, CS enthusiasts Egypt, Computer Science discussions, Study together online, Learn CS in Arabic, Coding collaboration, Programming help, Online education platform, Tech enthusiasts Egypt, Computer Science resources, Coding tutorials, CS beginner tips, Tech community Egypt, Programming projects, Coding mentorship, CS study resources, Online learning community, Computer Science events',
                },
            ],
            image: '/img/social-preview.png',
            algolia: {
                appId: 'UKAZWJNL57',
                apiKey: 'd89811956a35a47701b8cd359825a8a9',
                indexName: 'activecourses',
                contextualSearch: true,
                insights: true,
                // externalUrlRegex: '',
            },
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
                    {
                        type: 'search',
                        position: 'right',
                    },
                    { to: '/blog', label: 'Blog', position: 'right' },
                    {
                        href: 'https://github.com/alikehel/activecourses',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://discord.gg/QrfTN2Aukx',
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
