import type { Config } from "@stencil/core";

export const config: Config = {
	namespace: "core",
	extras: {
		enableImportInjection: true,
	},
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
	],
};
