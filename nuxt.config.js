const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'static/less/base.sass', lang: 'less' }
  ],
  // eslint-disable-next-line no-dupe-keys
  // css: ['~assets/css/global.css'],
  // eslint-disable-next-line no-dupe-keys
  // css: ['~assets/css/main.css'],

  // eslint-disable-next-line no-dupe-keys
  // css: [{
  //   src: 'swiper/dist/css/swiper.css'
  // }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/iview', ssr: true },
    { src: '~/plugins/vue-swiper', ssr: false }
  ],
  proxy: {
    '/app/*': {
      target: 'http://xxx:8080',
      secure: false
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  // eslint-disable-next-line no-dupe-keys
  modules: [
    // Simple usage
    '@nuxtjs/proxy'
  ],
  // eslint-disable-next-line no-dupe-keys
  proxy: {
    // Simple proxy
    '/fcgi-bin': 'https://api.ai.qq.com/'
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
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
  }
}
