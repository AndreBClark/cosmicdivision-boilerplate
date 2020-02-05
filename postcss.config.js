const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.{html,jsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano')('cssnane-advanced-preset');

module.exports = {
    "plugins": [
        require('postcss-import-ext-glob'),
        require("postcss-import"),
        require('stylelint')('./stylelint.config.js'),
        require('autoprefixer'),
        require('tailwindcss'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
}