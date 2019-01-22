<template>
  <div class="aaa">
    <img
      class="advertising-text"
      src="~/static/img/home/advertising.png"
    >
    <Carousel
      v-model="value3"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :easing="setting.easing"
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
    </Carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 3500,
        easing: 'fade'
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
