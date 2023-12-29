const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const config: Config = {
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
            {
                docs: {
                    sidebarCollapsed: true,
                    sidebarPath: require.resolve('./sidebars.ts'),
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
                    // @ts-ignore
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
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
            // insights: true,
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
                    label: 'Community',
                    type: 'dropdown',
                    position: 'left',
                    items: [
                        {
                            type: 'docSidebar',
                            sidebarId: 'communityGeneralSidebar',
                            label: 'General',
                        },
                        {
                            type: 'doc',
                            docId: 'community/roles-onboarding',
                            label: 'Roles Onboarding',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'communityServicesOnboardingSidebar',
                            label: 'Services Onboarding',
                        },
                        {
                            type: 'doc',
                            docId: 'community/channels-categories-onboarding',
                            label: 'Channels & Categories Onboarding',
                        },
                    ],
                },
                {
                    label: 'Resources',
                    type: 'dropdown',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            docId: 'resources/essential',
                            label: 'Essential',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'resourcesCoursesSidebar',
                            label: 'Courses',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'resourcesSubfieldsSidebar',
                            label: 'Sub-Fields',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'resourcesCoreSidebar',
                            label: 'MOOCS',
                        },
                        {
                            type: 'doc',
                            docId: 'resources/career-resources',
                            label: 'Career Resources',
                        },
                        {
                            type: 'doc',
                            docId: 'resources/career-advancement',
                            label: 'Career Advancement',
                        },
                        {
                            type: 'doc',
                            docId: 'resources/networking',
                            label: 'Networking',
                        },
                        {
                            type: 'docSidebar',
                            sidebarId: 'resourcesOtherRSidebar',
                            label: 'Other',
                        },
                    ],
                },
                {
                    label: 'About Us',
                    type: 'dropdown',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            docId: 'about-us/board-of-leaders',
                            label: 'Board of Leaders',
                        },
                        {
                            type: 'doc',
                            docId: 'about-us/mentors',
                            label: 'Mentors',
                        },
                        {
                            type: 'doc',
                            docId: 'about-us/curriculum-maintainers',
                            label: 'Curriculum Maintainers',
                        },
                        {
                            type: 'doc',
                            docId: 'about-us/contributors',
                            label: 'Contributors',
                        },
                        {
                            type: 'doc',
                            docId: 'about-us/mission',
                            label: 'Mission',
                        },
                        {
                            type: 'doc',
                            docId: 'about-us/acu-comparison',
                            label: 'ACU vs. Others',
                        },
                    ],
                },
                // {
                //     label: 'Other',
                //     type: 'dropdown',
                //     position: 'left',
                //     items: [
                //         {
                //             type: 'docSidebar',
                //             sidebarId: 'otherResourcesSidebar',
                //             label: 'Resources',
                //         },
                //     ],
                // },
                {
                    type: 'search',
                    position: 'right',
                },
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                // },
                { to: '/blog', label: 'Blog', position: 'right' },

                // {
                //     href: 'https://github.com/alikehel/activecourses',
                //     // label: 'GitHub',
                //     html: '<img width="32px" height="32px" href="img/logo-192x192.png"/>',
                //     position: 'right',
                // },
                {
                    type: 'html',
                    value: `
                            <a href="https://github.com/alikehel/activecourses" target="_blank" rel="noopener noreferrer">
                                <img width="27px" height="27px" src="/img/github-white.svg" alt="Active Courses Github Repo">
                            </a>
                        `,
                    position: 'right',
                },
                // {
                //     href: 'https://discord.gg/pevXXrzzKt',
                //     label: 'Discord',
                //     position: 'right',
                // },
                {
                    type: 'html',
                    value: `
                            <a href="https://discord.gg/pevXXrzzKt" target="_blank" rel="noopener noreferrer" style="display:flex;align-items: center;gap: 5px;margin-right:-10px">
                                <img width="27px" height="27px" src="/img/discord-mark-white.svg" alt="Active Courses Discord Server" style="margin-top:-3px;">
                                <p style="display:inline; margin:0">Arabic</p>
                            </a>
                        `,
                    position: 'right',
                },
                {
                    type: 'html',
                    value: `
                            <a href="https://discord.gg/WEemGPXfnA" target="_blank" rel="noopener noreferrer" style="display:flex;align-items: center;gap: 5px;">
                                <img width="27px" height="27px" src="/img/discord-mark-white.svg" alt="Active Courses Discord Server" style="margin-top:-3px;">
                                <p style="display:inline; margin:0">English</p>
                            </a>
                        `,
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
            maxHeadingLevel: 3,
        },
        prism: {
            theme: darkTheme,
        },
    } satisfies Preset.ThemeConfig,
    // i18n: {
    //     defaultLocale: 'ar',
    //     locales: ['ar', 'en'],
    //     localeConfigs: {
    //         ar: {
    //             direction: 'ltr',
    //         },
    //         // 'en-US': {
    //         //     htmlLang: 'en-US',
    //         // },
    //     },
    // },
};

export default config;
