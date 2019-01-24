<template>
  <div class="swiper swiperBox content" v-swiper:swiper="swiperOption" ref="swiperBox">
    <img
      class="advertising-text"
      src="~/static/img/home/advertising.png"
    >
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item) in advertImgArr"
        :key="item.id"
      >
        <img
          :src="item.url"
          class="demo-carousel advertising-img"
        >
      </div>
    </div>
    <div class="swiper-pagination"  slot="pagination"></div> 
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      advertImgArr: [
        {
          id: 1,
          url: require('~/static/img/home/advertising01.jpg')
        },
        {
          id: 2,
          url: require('~/static/img/home/advertising02.jpg')
        },
        {
          id: 3,
          url: require('~/static/img/home/advertising03.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.content {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  .advertising-text {
    position: absolute;
    max-width: 35%;
    left: 8%;
    z-index: 1000;
    top: 20%;
  }
}
</style>
