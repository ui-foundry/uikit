import UnoCSS from "unocss/vite";
import { defineConfig } from "vitepress";

import { sidebar } from "./theme/sidebar";

export default defineConfig({
	title: "UiKit",
	description: "A VitePress Site",
	srcDir: "./src",
	ignoreDeadLinks: true,
	outDir: "./dist",
	base: "/uikit/",
	lang: "en-US",
	head: [
		["script", { type: "module", src: "/uikit/demo/build/uikit.esm.js" }],
		["script", { nomodule: "true", src: "/uikit/demo/build/uikit.js" }],
		["link", { rel: "stylesheet", href: "/uikit/demo/build/uikit.css" }],
	],
	vue: {
		template: {
			compilerOptions: {
				// Treat all `ui-*` tags as custom elements
				isCustomElement: (tag) => tag.startsWith("ui-"),
			},
		},
	},
	themeConfig: { sidebar },
	vite: { plugins: [UnoCSS()] },
});
