import type { DefaultTheme } from 'vitepress';
import { SideBarFrameworkIntegrations } from './framework-integrations';
import { SideBarGettingStarted } from './get-started';

export const sidebar: DefaultTheme.Sidebar = {
	'/guide': SideBarGettingStarted,
	'/framework-integrations': SideBarFrameworkIntegrations,
};
