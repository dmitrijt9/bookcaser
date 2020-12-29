export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
  privateRuntimeConfig: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bookcaser',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    middleware: ['auth'],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  auth: {
    strategies: {
      google: {
        codeChallengeMethod: '',
        clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      },
    },
    redirect: {
      login: '/',
      home: '/app',
      callback: '/',
      logout: '/',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
