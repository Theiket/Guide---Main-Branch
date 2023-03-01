// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vuestic/nuxt',
  ],
  buildModules: [
    'mathjs',
  ],
  app: {
    head: {
      title: 'GUIDE',
      meta: [
        {name: 'description', content: 'Your GUIDE to Star Citizen'}
      ]
    }
  }
})