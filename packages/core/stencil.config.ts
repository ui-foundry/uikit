import { resolve } from 'node:path';
import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';

const namespace = 'uifoundry';
const _componentCorePackage = `@${namespace}/uikit`;
const customElementsDir = 'dist/components';
const resolvePath = (path: string) => resolve(__dirname, path).replace(/\\/g, '/');

export const config: Config = {
    namespace: 'uikit',
    buildDist: true,
    enableCache: true,
    cacheDir: resolvePath('../../.stencil'),
    sourceMap: true,
    globalStyle: resolvePath('./src/global/styles/default.scss'),
    plugins: [
        sass({
            outputStyle: 'compressed',
        }),
        postcss({
            plugins: [
                autoprefixer(),
                pxtorem({
                    propList: ['*'],
                    selectorBlackList: [':root', 'html', 'body'],
                    replace: true,
                }),
            ],
        }),
    ],
    outputTargets: [
        { type: 'dist', esmLoaderPath: '../loader' },
        reactOutputTarget({
            outDir: resolvePath('../react/src/'),
            customElementsDir,
        }),
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'bundle',
            externalRuntime: false,
        },
    ],
    extras: {
        /**
         * Details:
         * https://stenciljs.com/docs/config-extras
         */
        enableImportInjection: true,
        experimentalScopedSlotChanges: true,
        experimentalSlotFixes: true,
    },

    devServer: {
        openBrowser: false,
        port: 8001,
        reloadStrategy: 'pageReload',
    },
};
