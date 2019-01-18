// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // require styles
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper) /* { default global options } */
// import
import Vue from 'vue'
// eslint-disable-next-line import/no-duplicates
import VueAwesomeSwiper from 'vue-awesome-swiper'

// or require
// eslint-disable-next-line no-redeclare
let Vue = require('vue')
// eslint-disable-next-line no-redeclare
let VueAwesomeSwiper = require('vue-awesome-swiper')

// mount with global
Vue.use(VueAwesomeSwiper)

// If used in Nuxt.js/SSR, you should keep it only in browser build environment
// The `Process. BROWSER_BUILD` itself is just a feature, it is only valid in Nuxt.js, you need to modify it according to your own procedures, such as: in vue official ssr scaffolding it should be` process.browser`
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

// mount with component(can't work in Nuxt.js/SSR)
// import {
//   swiper,
//   swiperSlide
// } from 'vue-awesome-swiper'

// export default {
//   components: {
//     swiper,
//     swiperSlide
//   }
// }
