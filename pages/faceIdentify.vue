<template>
  <div class="ssss">
    <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox" @mouseenter="stopSwiper" @mouseleave="startSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner,i) in banners" :key="i">
                <img :src="banner">
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
        '~/static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg',
        '~/static/img/home/advertising01.jpg'
      ],
      // 所有配置均为可选（同Swiper配置）
      swiperOption: {
        loop: true,
        speed: 500,
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange () {
          // console.log('onSlideChangeEnd', this);
          },
          tap () {
          // console.log('onTap', this);
          }
        },
        // autoplay: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        autoplayDisableOnInteraction: false,
        // effect:'cube',
        mousewheel: true,
        preloadImages: false,
        lazy: true
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
<style>
.ssss {
  margin-top: 300px;
}
/*       Just setting CSS for the page   */

* {
    margin: 0;
    padding: 0;
}
html,
css {
    width: 100%;
    height: 100%;
}
.position {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 15%;
}
#workarea {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1e1a3e;
    font-family: Raleway;
}
#personal {
    color: white;
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    right: 2%;
}
/*    start code for the actual button:         */
/*   
    Spot is the span on the inside of the href that
    fills the parent and makes the hover and link work
    for the entire div
*/

.spot {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
/*
    This is the outer svg wrapper that the SVG itself will 
    fill. Multiple svg-wrapper classes can be put side by side.
*/

.svg-wrapper {
    margin-top: 0;
    position: relative;
    width: 150px;
    /*make sure to use same height/width as in the html*/
    
    height: 40px;
    display: inline-block;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px
}
/*
  This is where we define the fill, color, thickness,
  and stroke pattern of the SVG when there is no hover.
  The dasharray and offset together define the line position
  under the words. Here's also where the transition speed is set.
*/

#shape {
    stroke-width: 6px;
    fill: transparent;
    stroke: #009FFD;
    stroke-dasharray: 85 400;
    stroke-dashoffset: -220;
    transition: 1s all ease;
}
/* 
    Pushing the text up into the SVG. Without this the
    text would be below the div's.
*/

#text {
    margin-top: -35px;
    text-align: center;
}
#text a {
    color: white;
    text-decoration: none;
    font-weight: 100;
    font-size: 1.1em;
}
/* 
    Changing the shape on hover. I change the color of the stroke,
make it thinner, then set it to again wrap around the entire parent element.
*/

.svg-wrapper:hover #shape {
    stroke-dasharray: 50 0;
    stroke-width: 3px;
    stroke-dashoffset: 0;
    stroke: #06D6A0;
}
</style>