const defaultTheme = require('tailwindcss/defaultTheme')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      primary: {
        default: defaultTheme.colors.red[400],
        light: defaultTheme.colors.red[200],
      },
      secondary: {
        default: defaultTheme.colors.gray[800],
        light: defaultTheme.colors.gray[200],
      },
      transparent: defaultTheme.colors.transparent,
      white: defaultTheme.colors.white,
      black: defaultTheme.colors.black,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
