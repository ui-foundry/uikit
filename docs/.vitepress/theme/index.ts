import type { Theme } from 'vitepress'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import HomeHeroInfoAfter from './HomeHeroInfoAfter.vue'

import './style.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 'home-hero-after': () => h(HomeHeroAfter),
            // 'home-hero-image': () => h(HomeHero),
            // 'home-hero-info-before': () => h(HomeHeroInfoBefore),
            'home-hero-info-after': () => h(HomeHeroInfoAfter),
            // 'home-features-before': () => h(HomeFeaturesBeforeVue),
            // 'home-hero-actions-after': () => h(HomeMit),
        })
    },
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    },
} satisfies Theme
