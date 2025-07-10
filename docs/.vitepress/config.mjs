import { defineConfig } from "vitepress";
import { components } from "../src/components/components.tags.mts";

const componentNavItems = components.map((component) => {
  return {
    text: component
      .replace("six-", "")
      .split("-")
      .map((c) => c[0].toUpperCase() + c.slice(1))
      .join(" "),
    link: `/components/${component}`,
  };
});

export default defineConfig({
  title: "UIKit",
  description: "Components in alignment with the Ui Foundry Styleguide",
  base: "/uikit",
  lastUpdated: true,
  srcDir: "./src",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "Guide",
        link: "/guide/readme",
        activeMatch: "/guide/",
      },
      { text: "Components", link: componentNavItems[0].link },
      { text: "Changelog", link: "/changelog" },
    ],
    sidebar: {
      "/guide/": [
        {
          items: [
            { text: "Introduction", link: "/guide/readme" },
            { text: "Design", link: "/guide/design" },
            { text: "Architecture", link: "/guide/architecture" },
            {
              text: "Framework Integrations",
              collapsed: false,
              items: [
                { text: "React", link: "/guide/react" },
                { text: "Angular", link: "/guide/angular" },
                { text: "Vue", link: "/guide/vue" },
              ],
            },
            {
              text: "Styling Tokens",
              collapsed: false,
              items: [
                { text: "Colors", link: "/guide/styling/colors" },
                { text: "Spacing", link: "/guide/styling/spacing" },
                { text: "Typography", link: "/guide/styling/typography" },
                { text: "Grid", link: "/guide/styling/grid" },
                { text: "Screens", link: "/guide/styling/screens" },
                { text: "Misc", link: "/guide/styling/misc" },
                { text: "Elevation", link: "/guide/styling/elevation" },
              ],
            },
          ],
        },
      ],
      "/components/": [{ items: componentNavItems }],
    },
  },
});
