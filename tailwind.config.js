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
    extend: {
      padding: {
        0.5: '0.125rem',
      },
      margin: {
        0.5: '0.125rem',
      },
      maxWidth: {
        '9xl': '120rem',
      },
      boxShadow: {
        'inner-bottom': 'inset 0px -15px 10px -15px rgba(227,227,227,1)',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [require('@tailwindcss/forms')],
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