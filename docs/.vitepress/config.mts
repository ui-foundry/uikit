import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { sidebar } from "./theme/sidebar";

export default defineConfig({
	title: "UiKit",
	description: "A VitePress Site",
	srcDir: "./src",
	head: [
		["script", { type: "module", src: "/demo/build/uikit.esm.js" }],
		["script", { nomodule: "true", src: "/demo/build/uikit.js" }],
		["link", { rel: "stylesheet", href: "/demo/build/uikit.css" }],
	],
	themeConfig: {
		sidebar,
	},
	vite: {
		plugins: [UnoCSS()],
	},
});
