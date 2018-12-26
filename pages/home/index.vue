<template>
  <div class="sss">
    <advertising/>
    <div class="faceIdentify">
      <h4>人脸识别</h4>
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
import advertising from '~/pages/home/advertising.vue'
export default {
  components: {
    advertising
  }
}
</script>
<style scoped lang="less">
.sss {
  width: 100%;
  // background-color: rgb(238, 238, 238);
  text-align: center;
  position: relative;
  .aaa {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .advertising-img {
      // min-width: 100%;
      // min-height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      // background-size: cover;
      // background-position: 50%;
    }
  }
}
</style>
