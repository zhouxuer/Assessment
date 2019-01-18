<template>
  <div class="aaa">
    <img
      class="advertising-text"
      src="../../static/img/home/advertising.png"
    >
    <Carousel
      v-model="value2"
      autoplay
      loop
      class="bbb"
    >
      <CarouselItem
        v-for="(item) in advertImgArr"
        :key="item.id"
      >
        <img
          :src="item.url"
          class="demo-carousel advertising-img"
        >
      </CarouselItem>
      <!-- <CarouselItem>
        <div class="demo-carousel">
          <video
            src="~/assets/img/advertising04.mp4"
            type="video/mp4"
            poster="~/assets/img/advertising04.jpg"
            preload="none"
          >1</video>
        </div>
      </CarouselItem> -->
    </Carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 0,
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
        },
        {
          id: 4,
          url: require('~/static/img/home/advertising04.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.aaa {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  .bbb {
    width: 100%;
    margin: 0;
    padding: 0;
    .advertising-img {
      max-width: 100%;
    }
  }
  .advertising-text {
    position: absolute;
    max-width: 35%;
    left: 8%;
    z-index: 1;
    top: 20%;
  }
}
</style>
