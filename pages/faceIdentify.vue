<template>
  <div class="ssss">
    <div class="swiper swiperBox aaa" v-swiper:swiper="swiperOption" ref="swiperBox" @mouseenter="stopSwiper" @mouseleave="startSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="~/static/img/home/advertising01.jpg">
            </div>
            <div class="swiper-slide">
                <img src="~/static/img/home/advertising02.jpg">
            </div>
            <div class="swiper-slide">
                <img src="~/static/img/home/advertising03.jpg">
            </div>
            <div class="swiper-slide">
                <img src="~/static/img/home/advertising04.jpg">
            </div>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>  
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      banners: [
        '../../static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg'
      ],
      // 所有配置均为可选（同Swiper配置）
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  swiper () {
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    return this.$refs.swiperBox.swiper
  },
  methods: {
    stopSwiper () {
    //   this.swiper.autoplay.stop()
    },
    startSwiper () {
    //   this.swiper.autoplay.start()
    }
  }
}
</script>
<style scoped lang="less">
.ssss {
  margin-top: 100px;
  .aaa {
    height: 800px;
  }
}
</style>