// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    strict: true
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@pinia/nuxt',
  ]
})
