import type { DefaultTheme } from 'vitepress'

export const sidebarGuide: DefaultTheme.SidebarItem[] = [
    {
        items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Design', link: '/guide/design' },
            { text: 'Architecture', link: '/guide/architecture' },
            {
                text: 'Framework Integrations',
                items: [
                    { text: 'JavaScript', link: '/guide/java-script' },
                    { text: 'React', link: '/guide/react' },
                    { text: 'Vue', link: '/guide/vue' },
                    { text: 'Angular', link: '/guide/angular' },
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
