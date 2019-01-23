<template>
  <div>
    <div class="swiper swiperBox content" v-swiper:swiper="swiperOption" ref="swiperBox">
      <div class="bg">
        <bg/>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <advertising/>
        </div>
        <div class="swiper-slide faceIdentify">
          <h1 class="faceIdentify-title">
            图片特效
            <p><i>— Photo effects —</i></p>
          </h1>
          <Row
            class="code-row-bg"
            type="flex"
            justify="center"
          >
            <i-col span="4"></i-col>
            <i-col span="5">
              <div class="filtera filter-img">
                <div class="filter__previewbox">
                  <img src="~/static/img/home/filter01.jpg" class="filter__preview" alt="Preview">
                  <nuxt-link :to="{name:'imgEffects',params:{newsId:'1'}}" class="filter__label">人像滤镜</nuxt-link>
                </div>
              </div>
              <div class="filterb filter-img">
                <div class="filter__previewbox">
                  <img src="~/static/img/home/filter02.jpg" class="filter__preview" alt="Preview">
                  <nuxt-link :to="{name:'imgEffects',params:{newsId:'2'}}" class="filter__label">风景滤镜</nuxt-link>
                </div>
              </div>
            </i-col>
            <i-col span="6">
              <div class="filterc filter-img">
                <div class="filter__previewbox">
                  <img src="~/static/img/home/filter03.jpg" class="filter__preview" alt="Preview">
                  <nuxt-link :to="{name:'imgEffects',params:{newsId:'3'}}" class="filter__label">人脸美妆</nuxt-link>
                </div>
              </div>
            </i-col>
            <i-col span="5">
              <div class="filtera filter-img">
                <div class="filter__previewbox">
                  <img src="~/static/img/home/filter02.jpg" class="filter__preview" alt="Preview">
                  <nuxt-link :to="{name:'imgEffects',params:{newsId:'4'}}" class="filter__label">人脸变妆</nuxt-link>
                </div>
              </div>
              <div class="filterb filter-img">
                <div class="filter__previewbox">
                  <img src="~/static/img/home/filter01.jpg" class="filter__preview" alt="Preview">
                  <nuxt-link :to="{name:'imgEffects',params:{newsId:'5'}}" class="filter__label">动画贴纸</nuxt-link>
                </div>
              </div>
              </i-col>
            <i-col span="4"></i-col>
          </Row>
        </div>
        <div class="swiper-slide faceIdentify">
          <h4 class="faceIdentify-title">
            图片识别
            <p><i>— Photo effects —</i></p>
          </h4> 
          <Row
            class="code-row-bg"
            type="flex"
            justify="center"
          >
            <i-col span="4">1</i-col>
            <i-col span="4">1</i-col>
            <i-col span="4">1</i-col>
            <i-col span="4">1</i-col>
          </Row>
        </div>
        <div class="swiper-slide">
          <div class="ingEffects">
            <h4>图片特效</h4>
            <Row
              class="code-row-bg"
              type="flex"
              justify="center"
            >
              <i-col span="4">1</i-col>
              <i-col span="4">1</i-col>
              <i-col span="4">1</i-col>
              <i-col span="4">1</i-col>
            </Row>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>
<script>
import bg from '~/assets/bg.vue'
import advertising from '~/components/advertising.vue'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    bg,
    advertising
  },
  data () {
    return {
      // 所有配置均为可选（同Swiper配置）
      swiperOption: {
        hashNavigation: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        shortSwipes: false,
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
  }
  // methods: {
  //   stopSwiper () {
  //   //   this.swiper.autoplay.stop()
  //   },
  //   startSwiper () {
  //   //   this.swiper.autoplay.start()
  //   }
  // }
}
</script>
<style scoped lang="less">
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // width: 100%;
  // height: 900px;
  text-align: center;
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .faceIdentify {
    margin-top: 80px;
    .faceIdentify-title {
      margin: 20px 0;
      font-size: 35px;
      color: rgb(255, 255, 255);
      p {
        margin-top: 5px;
        font-family:"Times New Roman",Georgia,Serif;
        font-size: 18px;
        color: rgb(255, 181, 249);
        font-weight: 200;
      }
      img {
        max-width: 18%;
      }
    }
    .code-row-bg {
      margin-bottom: 50px;
      .filtera {
        display: inline-block;
        padding-bottom: 10%;
        width: 90%;
        margin: 0 auto;
      }
      .filterb {
        display: inline-block;
        width: 90%;
        margin: 0 auto;
      }
      .filterc {
        margin: 0 auto;
        width: 90%;
      }
      .filter-img {
        .filter__previewbox {
          position: relative;
          overflow: hidden;
          &:before {
            content: "";
            background-color: var(--filterOverlay, rgba(255, 181, 249, 0.329));
            width: 0;
            height: 0;
            padding: 25%;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            -webkit-transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease;
            transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease;
            transition: transform calc(var(--filterAnimationDuration, .8s) / 2) ease;
            transition: transform calc(var(--filterAnimationDuration, .8s) / 2) ease, -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease;
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
          }
        }
        .filter__preview {
          outline: 2px solid white;
          outline-offset: -15px;
          max-width: 100%;
          height: auto;
        }
        &:hover {
          .filter__previewbox:before {
            -webkit-transform: translate(-50%, -50%) scale(4);
            transform: translate(-50%, -50%) scale(4);
            -webkit-transition-duration: var(--filterAnimationDuration, .8s);
            transition-duration: var(--filterAnimationDuration, .8s);
          }
          .filter__label {
            -webkit-transition-duration: calc(var(--filterAnimationDuration, .8s) / 4);
            transition-duration: calc(var(--filterAnimationDuration, .8s) / 4);
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .filter__preview {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }
        }
        .filter__label {
          cursor: pointer;
          color: rgb(255, 255, 255);
          font-size: 25px;
          text-align: center;
          -webkit-transform: translate(-200%, -50%);
          transform: translate(-300%, -50%);
          -webkit-transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease-out;
          transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease-out;
          transition: transform calc(var(--filterAnimationDuration, .8s) / 2) ease-out;
          transition: transform calc(var(--filterAnimationDuration, .8s) / 2) ease-out, -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) ease-out;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 3;
          padding: 20px 30px;
          &:after {
            content: '';
            display: block;
            position: absolute;
            -webkit-transform-origin: right;
            transform-origin: right;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            top: 0px;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #ffffff;
            -webkit-transition: -webkit-transform 0.6s
              cubic-bezier(0.55, 0, 0.1, 1);
            transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
              -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
          }
          &:before {
            content: '';
            display: block;
            position: absolute;
            -webkit-transform-origin: left;
            transform-origin: left;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #ffffff;
            -webkit-transition: -webkit-transform 0.6s
              cubic-bezier(0.55, 0, 0.1, 1);
            transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
              -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
          }
          &:hover {
            box-shadow: 5px 10px 40px 5px rgba(0, 0, 0, 0.5);
            &:after {
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
              -webkit-transform-origin: left;
              transform-origin: left;
              -webkit-transition: -webkit-transform 0.6s
                cubic-bezier(0.55, 0, 0.1, 1);
              transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
              transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
              transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
                -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            }
            &:before {
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
              -webkit-transform-origin: right;
              transform-origin: right;
              -webkit-transition: -webkit-transform 0.6s
                cubic-bezier(0.55, 0, 0.1, 1);
              transition: -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
              transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
              transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1),
                -webkit-transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
            }
          }
        }
        .filter__preview {
          -webkit-transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) cubic-bezier(0.71, 0.05, 0.29, 0.9);
          transition: -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) cubic-bezier(0.71, 0.05, 0.29, 0.9);
          transition: transform calc(var(--filterAnimationDuration, .8s) / 2) cubic-bezier(0.71, 0.05, 0.29, 0.9);
          transition: transform calc(var(--filterAnimationDuration, .8s) / 2) cubic-bezier(0.71, 0.05, 0.29, 0.9), -webkit-transform calc(var(--filterAnimationDuration, .8s) / 2) cubic-bezier(0.71, 0.05, 0.29, 0.9);
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    }
  }
}
</style>
