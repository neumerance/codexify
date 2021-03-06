require('dotenv').config();

export default {
  env: {
    codexifyApiBaseUrl: process.env.CODEXIFY_API_BASE_URL || 'http://localhost:5000',
    codexifyWsBaseUrl: process.env.CODEXIFY_WS_BASE_URL || 'ws://localhost:5000',
    appBaseUrl: process.env.APP_BASE_URL || 'http://localhost:3000'
  },

  head: {
    title: 'codexify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/actioncable.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: ['~/api/server.js'],
  server: {
    host: '0.0.0.0'
  }
}
