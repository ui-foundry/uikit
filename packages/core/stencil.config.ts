import type { Config } from "@stencil/core";

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
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
	],
};
