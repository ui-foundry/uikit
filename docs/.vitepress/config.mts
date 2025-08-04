import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';
import { sidebar } from './theme/sidebar';

export default defineConfig({
	title: 'UiKit',
	description: 'A VitePress Site',
	srcDir: './src',
	themeConfig: {
		sidebar,
	},
	vite: {
		plugins: [UnoCSS()],
	},
});
