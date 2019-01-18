<template>
  <div class="ssss">
    <div>
        <audio autoplay></audio>
        <input onclick="startRecording()" type="button" value="录音" />
        <input onclick="stopRecording()" type="button" value="停止" />
        <input onclick="playRecording()" type="button" value="播放" />
        <input onclick="uploadAudio()" type="button" value="提交" />
    </div>
  </div>
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