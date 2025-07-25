import { defineConfig } from 'vitepress'

import { navbar } from './configs/navbar'
import { sidebarGuide } from './configs/sidebar'

export default defineConfig({
    title: 'UIKit',
    description: 'A VitePress Site',
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
        nav: navbar,
        sidebar: {
            '/guide': sidebarGuide,
        },
    },
})
