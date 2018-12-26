<template>
  <Carousel
    v-model="value2"
    autoplay
    loop
    class="aaa"
  >
    <CarouselItem>
      <div class="demo-carousel">
        <img 
          class="advertising-img"
          src="~/assets/img/advertising01.jpg"
        >
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img 
          class="advertising-img"
          src="~/assets/img/advertising02.jpg"
        >
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img 
          class="advertising-img"
          src="~/assets/img/advertising03.jpg"
        >
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <video
          src="~/assets/img/advertising04.mp4"
          type="video/mp4"
          poster="~/assets/img/advertising04.jpg"
          preload="none"
        >1</video>
      </div>
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    }
  }
}
</script>
<style scoped lang="less">
.aaa {
  width: 100%;
  .advertising-img {
    max-width: 100%;
    // max-width: ;
    // max-height: 800px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // background-size: cover;
    // background-position: 50%;
  }
}
</style>
