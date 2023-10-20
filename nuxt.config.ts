// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxt/image-edge'],
    vite: {
        server: {
          hmr: {
            protocol: 'ws'
          }
        }
      }
})
