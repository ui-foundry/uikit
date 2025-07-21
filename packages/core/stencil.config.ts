import { postcss } from '@stencil-community/postcss'
import type { Config } from '@stencil/core'
import { reactOutputTarget } from '@stencil/react-output-target'
import { sass } from '@stencil/sass'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'
import pxtorem from 'postcss-pxtorem'

const resolvePath = (path: string) => resolve(__dirname, path).replace(/\\/g, '/')

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
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'bundle',
            externalRuntime: false,
        },
        reactOutputTarget({
            outDir: resolvePath('../react/src/'),
        }),
    ],
    extras: {
        enableImportInjection: true,
    },
    devServer: {
        openBrowser: false,
    },
}
