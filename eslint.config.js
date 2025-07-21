const globals = require('globals')
const js = require('@eslint/js')
const prettierPlugin = require('eslint-plugin-prettier')
const jsoncParser = require('jsonc-eslint-parser')

/** @type { import("eslint").Linter.Config[] } */
module.exports = [
    // Base JavaScript rules
    js.configs.recommended,

    // Prettier plugin integration
    {
        plugins: { prettier: prettierPlugin },
        rules: { 'prettier/prettier': 'error' },
    },

    // Add browser and Node globals
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },

    // JSON files with jsonc-eslint-parser
    {
        files: ['**/*.json'],
        languageOptions: {
            parser: jsoncParser,
        },
    },

    // Ignore folders
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/coverage/**',
            '**/build/**',
            'packages/*/dist/**',
            'pnpm-lock.yaml',
        ],
    },
]
