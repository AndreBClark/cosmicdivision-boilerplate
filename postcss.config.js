const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.{html,jsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano')('cssnane-advanced-preset');

module.exports = {
    "plugins": [
        require('stylelint')('./stylelint.config.js'),
        require("postcss-import"),
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
}