import type { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

export const config: Config = {
	namespace: "uikit",
	extras: { enableImportInjection: true },
	globalStyle: "src/global/styles.scss",
	plugins: [
		sass(),
		postcss({
			plugins: [
				autoprefixer(),
				pxtorem({
					propList: ["*"],
					selectorBlackList: [":root", "html", "body"],
					replace: true,
				}),
			],
		}),
	],
	outputTargets: [
		{ type: "dist", esmLoaderPath: "../loader" },
		reactOutputTarget({
			outDir: "../react/src/lib",
		}),
		{
			type: "dist-custom-elements",
			customElementsExportBehavior: "bundle",
			externalRuntime: false,
		},
	],
};
