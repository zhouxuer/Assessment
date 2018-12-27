<template>
  <div class="sss">
    <div class="bg">
      <bg/>
    </div>
    <advertising/>
    <div class="faceIdentify">
      <h4>图片特效</h4>
      <Row
        class="code-row-bg"
        type="flex"
        justify="center"
      >
        <i-col
          span="8"
          class="ccc"
        >
          <img 
            class="filter-img"
            src="~/assets/img/filter01.jpg"
          >
          <span class="filter-span">0</span>
        </i-col>
        <i-col
          span="8"
          class="ccc"
        >
          <img 
            class="filter-img"
            src="~/assets/img/filter02.jpg"
          >
          <span class="filter-span">0</span>
        </i-col>
      </Row>
    </div>
    <div class="imgIdentify">
      <h4>图片识别</h4>
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
    <div class="semanticParsing">
      <h4>语义解析</h4>
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
</template>
<script>
import bg from '~/assets/bg.vue'
import advertising from '~/pages/home/advertising.vue'
export default {
  components: {
    bg,
    advertising
  }
}
</script>
<style scoped lang="less">
.sss {
  width: 100%;
  text-align: center;
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .ccc {
    overflow: hidden;
    .filter-img {
      position: relative;
      padding: 10%;
      max-width: 100%;
      overflow: hidden;
    }
    .filter-span {
      cursor: pointer;
      transition: all 0.6s;
      position: absolute;
      top: 20%;
      left: 20%;
      bottom: 20%;
      right: 20%;
      z-index: 111;
      &:hover {
        transform: scale(1.35);
        background-color: rgba(255, 195, 213, 0.5);
      }
    }
  }
}
</style>
