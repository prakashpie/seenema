require('dotenv').config()
module.exports = {
  mode: 'universal',

  buildDir: 'dist',

  /*
   ** Headers of the page
   */
  head: {
    title: '',
    titleTemplate: titleChunk => {
      return titleChunk
        ? `${titleChunk} - Movie - Watch latest movie for free`
        : 'Movie - Watch latest movie for free'
    },
    meta: [
      {
        name: 'keywords',
        content:
          'Watch movie'
      },
      { name: 'robots', content: 'INDEX, FOLLOW' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: `${process.env.CODPIE_CDN_URL}css/material.css`
      }
    ],
    bodyAttrs: { 'data-toggle': 'affix', id: 'app-body', 'data-ready': true }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00d280' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/vue-material.js',
    '~/plugins/axios'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxyHeaders: false,
    proxy: false,
    debug: true,
    baseURL: process.env.API_URL,
    https: false,
    credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** env
   */
  env: {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },

  /*
   ** env
   */
  workbox: {
    importScripts: ['custom-sw.js'],
    cachingExtensions: '@/plugins/workbox-range-request.js'
  },

  /*
   ** meta
   */
  meta: {
    mobileAppIOS: true,
    appleStatusBarStyle: true,
    name: 'Movie',
    author: 'Movie',
    description:
      'Watch latest movie for free',
    theme_color: '#00d280',
    lang: 'en',
    ogTitle: 'Movie - Watch latest movie for free',
    ogHost: process.env.CODPIE_CDN_URL,
    ogImage: `img/pmh.jpg`,
    ogUrl: 'https://preview.codepie.io',
    twitterCard: 'Summary',
    twitterTitle: 'Movie - Watch latest movie for free',
    twitterSite: 'http://preview.codepie.io',
    twitterCreator: '@movie',
    nativeUI: true
  },

  /*
   ** manifest
   */
  manifest: {
    name: 'Movie',
    short_name: 'Movie',
    description: 'Movie - Watch latest movie for free',
    lang: 'en',
    crossorigin: 'use-credentials',
    theme_color: '#00d280'
  },

  /* CSS file in the project */
  css: ['@/assets/main.css']
}
