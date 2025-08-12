import { resolve } from "node:path";
import type { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
import { vueOutputTarget } from "@stencil/vue-output-target";

const namespace = "uifoundry";
const componentCorePackage = `@${namespace}/uikit`;
const customElementsDir = "dist/components";
const resolvePath = (path: string) => resolve(__dirname, path).replace(/\\/g, "/");

export const config: Config = {
	namespace: "uikit",
	taskQueue: "async",
	buildDist: true,
	enableCache: true,
	cacheDir: resolvePath("../../.stencil"),
	sourceMap: true,
	globalStyle: resolvePath("./src/styles/default.scss"),
	plugins: [sass({ outputStyle: "compressed" })],
	outputTargets: [
		{ type: "docs-readme" },
		{ type: "dist", esmLoaderPath: resolvePath("loader") },
		{
			type: "dist-custom-elements",
			customElementsExportBehavior: "single-export-module",
			dir: customElementsDir,
			minify: true,
			externalRuntime: false,
		},
		{
			type: "www",
			serviceWorker: false,
			dir: "../../docs/src/public/demo/",
		},
		reactOutputTarget({
			outDir: resolvePath("../react/src/"),
			customElementsDir,
		}),
		vueOutputTarget({
			componentCorePackage: "@uifoundry/uikit",
			proxiesFile: resolvePath("../vue/src/components.ts"),
		}),
	],
	extras: {
		enableImportInjection: true,
		experimentalScopedSlotChanges: true,
		experimentalSlotFixes: true,
	},
	testing: {
		browserHeadless: "shell",
	},
	devServer: {
		openBrowser: false,
		port: 8001,
		reloadStrategy: "pageReload",
	},
};
