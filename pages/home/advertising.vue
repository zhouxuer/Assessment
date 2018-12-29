<template>
  <Carousel
    v-model="value2"
    autoplay
    loop
    class="aaa"
  >
    <CarouselItem
      v-for="(item) in advertImgArr"
      :key="item.id"
    >
      <img
        :src="item.url"
        class="demo-carousel advertising-img"
      >
      <!-- <img
        class="demo-carousel advertising-text"
        src="../../assets/img/advertising.png"
      > -->
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
</template>
<script>
export default {
  data () {
    return {
      value2: 0,
      advertImgArr: [
        {
          id: 1,
          url: require('~/static/img/advertising01.jpg')
        },
        {
          id: 2,
          url: require('~/static/img/advertising02.jpg')
        },
        {
          id: 3,
          url: require('~/static/img/advertising03.jpg')
        },
        {
          id: 4,
          url: require('~/static/img/advertising04.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.aaa {
  width: 100%;
  .advertising-img {
    max-width: 100%;
    position: relative;
  }
  // .advertising-text {
  //   position: absolute;
  //   // min-width: 20%;
  //   max-width: 8%;
  //   z-index: 10000;
  //   top: 80px;
  // }
}
</style>
