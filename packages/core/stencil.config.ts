import { Config } from '@stencil/core';
import { resolve } from 'node:path';
import { reactOutputTarget } from '@stencil/react-output-target';

const resolvePath = (path: string) => resolve(__dirname, path).replace(/\\/g, '/');

export const config: Config = {
	namespace: 'uikit',
	buildDist: true,
	enableCache: true,
	cacheDir: resolvePath('../../.stencil'),
	outputTargets: [
		reactOutputTarget({
			outDir: resolvePath('../react/src/'),
		}),
		{ type: 'dist', esmLoaderPath: resolvePath('loader') },
		{
			type: 'dist-custom-elements',
			customElementsExportBehavior: 'auto-define-custom-elements',
			externalRuntime: false,
		},
		{ type: 'docs-readme' },
		{ type: 'docs-json', file: 'docs/go-ui.json' },
		{
			type: 'www',
			serviceWorker: false,
			dir: '../../docs/public/demo/',
		},
	],
	testing: {
		browserHeadless: 'shell',
	},
	devServer: {
		openBrowser: false,
	},
};
