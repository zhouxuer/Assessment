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
            src="~/static/img/home/filter01.jpg"
          >
          <span class="filter-span">
            <a>人像滤镜</a>
          </span>
        </i-col>
        <i-col
          span="8"
          class="ccc"
        >
          <img 
            class="filter-img"
            src="~/static/img/home/filter02.jpg"
          >
          <span class="filter-span">
            <a>风景滤镜</a>
          </span>
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
      margin: 10%;
      // padding: 10%;
      max-width: 80%;
      // box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 0.657);
    }
    .filter-span {
      opacity: 0;
      transition: all 0.6s;
      position: absolute;
      top: 20%;
      left: 20%;
      bottom: 20%;
      right: 20%;
      z-index: 111;
      &:hover {
        opacity: 1;
        transform: scale(1.3);
        background-color: rgba(201, 107, 255, 0.5);
        a {
          position: absolute;
          top: 40%;
          transform: translate(-50%);
          font-size: 35px;
          color: #ffffff;
          &:after {
            content: '';
            display: block;
            position: absolute;
            -webkit-transform-origin: right;
            transform-origin: right;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            top: 0px;
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
      }
    }
  }
}
</style>
