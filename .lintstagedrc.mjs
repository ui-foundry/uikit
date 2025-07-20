import { relative } from 'path';

export default {
    // Format JS/TS/JSON/SCSS with Prettier
    'packages/**/*.{js,json,ts,tsx,scss}': (files) => {
        const fileList = files.map((file) => relative(process.cwd(), file)).join(' ');
        return [`pnpm exec prettier --write ${fileList}`];
    },

    // Lint only files in packages/uikit/src/
    'packages/uikit/src/**/*.{js,ts,tsx}': (files) => {
        const fileList = files.map((file) => relative(process.cwd(), file)).join(' ');
        return [`pnpm exec eslint --fix ${fileList}`];
    },
};
//
