// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxt/image',
    'nuxt-icons',
    '@hebilicious/vue-query-nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    server: {
      hmr: {
        protocol: 'ws'
      }
    }
  },
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss',
  ],
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active"
    }
  },
  // image: {
  //   dir: 'assets'
  // }
})
