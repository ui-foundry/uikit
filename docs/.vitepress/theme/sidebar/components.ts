import fs from "node:fs";
import path from "node:path";
import type { DefaultTheme } from "vitepress";

function getComponentSidebarItems(): DefaultTheme.SidebarItem[] {
	const componentsDir = path.resolve(__dirname, "../../../src/components");

	// Read files from components folder
	const files = fs.readdirSync(componentsDir);

	// Map them into sidebar items
	return files
		.filter((file) => file.endsWith(".md")) // only .md files
		.map((file) => {
			const name = path.basename(file, ".md");
			return {
				text: name.charAt(0).toUpperCase() + name.slice(1),
				link: `/uikit/components/${name}`,
			};
		})
		.sort((a, b) => a.text.localeCompare(b.text));
}

export const SideBarComponents: DefaultTheme.SidebarItem[] = [
	{
		text: "Components",
		items: getComponentSidebarItems(),
	},
];
