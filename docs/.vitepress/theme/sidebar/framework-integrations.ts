import { DefaultTheme } from 'vitepress';

export const SideBarFrameworkIntegrations: DefaultTheme.SidebarItem[] = [
	{
		text: 'Framework Integrations',
		items: [
			{ text: 'JavaScript', link: '/' },
			{ text: 'React', link: '/guides/getting-started' },
			{ text: 'Vue', link: '/components' },
			{ text: 'Angular', link: '/changelog' },
			{ text: 'Svelte', link: '/changelog' },
		],
	},
];
