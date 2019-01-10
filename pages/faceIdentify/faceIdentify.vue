<template>
  <!-- <div class="ssss"> -->
    <!-- <md-card> -->
    <!-- <md-card-media> -->
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    <!-- </md-card-media> -->
  <!-- </md-card> -->
    <!-- <md-card-media>
      <swiper :options="swiperOption">
        <swiper-slide><img src="">111</swiper-slide>
        <swiper-slide><img src="">222</swiper-slide>
        <swiper-slide><img src="">333</swiper-slide>
        <swiper-slide><img src="">444</swiper-slide>
        <swiper-slide><img src="">555</swiper-slide>
        <swiper-slide><img src="">666</swiper-slide>
      </swiper>
    </md-card-media> -->
    <!--以下看需要添加-->
    <!-- <div class="swiper-scrollbar"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div> -->
  <!-- </div> -->
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: { // swiper3
        autoplay: 3000,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
<style>
.ssss {
  margin-top: 300px;
}
</style>