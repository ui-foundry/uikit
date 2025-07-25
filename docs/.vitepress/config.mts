import { DefaultTheme, defineConfig } from 'vitepress'

const sidebarsGuides = (): DefaultTheme.SidebarItem[] => [
    {
        items: [
            { text: 'Introduction', link: '/guide/readme' },
            { text: 'Design', link: '/guide/design' },
            { text: 'Architecture', link: '/guide/architecture' },
            {
                text: 'Framework Integrations',
                items: [
                    { text: 'React', link: '/guide/react' },
                    { text: 'Angular', link: '/guide/angular' },
                    { text: 'Vue', link: '/guide/vue' },
                ],
            },
            {
                text: 'Styling Tokens',
                items: [
                    { text: 'Colors', link: '/guide/styling/colors' },
                    { text: 'Spacing', link: '/guide/styling/spacing' },
                    { text: 'Typography', link: '/guide/styling/typography' },
                    { text: 'Grid', link: '/guide/styling/grid' },
                    { text: 'Screens', link: '/guide/styling/screens' },
                    { text: 'Misc', link: '/guide/styling/misc' },
                    { text: 'Elevation', link: '/guide/styling/elevation' },
                ],
            },
        ],
    },
]

export default defineConfig({
    title: 'UIKit',
    description: 'A VitePress Site',
    lastUpdated: true,
    ignoreDeadLinks: true,
    cleanUrls: true,
    srcDir: './src',
    base: '/uikit/',
    themeConfig: {
        siteTitle: 'UIKit',
        socialLinks: [{ icon: 'github', link: 'https://github.com/ui-foundry' }],
        search: {
            provider: 'local',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025',
        },
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Components', link: '/components' },
            { text: 'Changelog', link: '/changelog' },
        ],
        sidebar: {
            '/guide': sidebarsGuides(),
        },
    },
})
