import type { Theme } from 'vitepress';

import AppLogo from './components/AppLogo.vue';
import AppMenu from './components/AppMenu.vue';
import AppLayout from './components/AppLayout.vue';

import 'virtual:uno.css';
import './style.css';

export default {
	Layout: AppLayout,
	enhanceApp({ app, router, siteData }) {
		app.component('AppLogo', AppLogo);
		app.component('AppMenu', AppMenu);
	},
} satisfies Theme;
