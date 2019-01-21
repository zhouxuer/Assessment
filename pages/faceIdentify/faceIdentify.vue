<template>
  <div class="ssss">
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
        <div id="workarea">
    <div class="position">

        <!--start button, nothing above this is necessary -->
        <div class="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                    <a href=""><span class="spot"></span>Button 1</a>
                </div>
            </svg>
        </div>
        <!--Next button -->
        <div class="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                    <a href=""><span class="spot"></span>Button 2</a>
                </div>
            </svg>
        </div>
        <!--Next button -->
        <div class="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                    <a href=""><span class="spot"></span>Button 3</a>
                </div>
            </svg>
        </div>
        <!--End button -->

    </div>
    <a id="personal" href="http://www.tylermarkpeterson.com">www.tylermarkpeterson.com</a>
</div>
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