import path from 'node:path'

const assetsDir = 'assets'

export default async function (eleventyConfig) {
    // Copy the contents of the `assets` folder to the output folder
    eleventyConfig.addPassthroughCopy(assetsDir)
    eleventyConfig.setServerPassthroughCopyBehavior('passthrough')

    // Generates a URL relative to the site's asset directory
    eleventyConfig.addNunjucksGlobal('assetUrl', (value = '', absolute = false) => {
        value = path.join(`/${assetsDir}`, value)
        return absolute ? new URL(value, eleventyConfig.globalData.baseUrl).toString() : value
    })

    // Watch CSS files
    eleventyConfig.addWatchTarget(`${assetsDir}/styles/**/*.css`)
}

export const config = {
    pathPrefix: '/uikit/',
    markdownTemplateEngine: 'njk',
    templateFormats: ['md', 'njk'],
    dir: {
        input: 'pages',
        includes: '../_includes',
        layouts: '../_layouts',
        output: 'dist',
    },
}
