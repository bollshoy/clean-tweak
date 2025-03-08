const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./index.html', './src/**/*.{jsx,tsx,js,ts}'],
    }),
    cssnano({ preset: 'default' }),
  ],
};
