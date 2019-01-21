<template>
  <div class="ssss">
    <div>
        <!-- <audio autoplay></audio> -->
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
  },
  methods: {
      // let recorder

    // let audio = document.querySelector('audio')

    startRecording () {
      HZRecorder.get(function (rec) {
        recorder = rec
        recorder.start()
      })
    },

    stopRecording () {
      recorder.stop()
    },

    playRecording () {
      recorder.play(audio);
    },

    uploadAudio () {
      recorder.upload("Handler1.ashx", function (state, e) {
        switch (state) {
          case 'uploading':
            // let percentComplete = Math.round(e.loaded * 100 / e.total) + '%';
            break
          case 'ok':
            // alert(e.target.responseText);
            alert("上传成功")
            break
          case 'error':
            alert("上传失败")
            break
          case 'cancel':
            alert("上传被取消")
            break
        }
      })
    }
  }
}
</script>
<style>
.ssss {
  margin-top: 300px;
}
</style>