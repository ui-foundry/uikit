import type { DefaultTheme } from 'vitepress';

import { SideBarFrameworkIntegrations } from './framework-integrations';
import { SideBarGettingStarted } from './get-started';
import { SideBarComponents } from './components';

export const sidebar: DefaultTheme.Sidebar = {
	'/guide': SideBarGettingStarted,
	'/framework-integrations': SideBarFrameworkIntegrations,
	'/components': SideBarComponents,
};
