<template>
  <div class="sss">
    <!-- <div class="bg">
      <bg/>
    </div> -->
    <advertising/>
    <div class="faceIdentify">
      <h1 class="faceIdentify-title">图片特效
        <p><i>— Photo effects —</i></p>
        <img src="~/static/img/home/home-04-i9.png">
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
              <span class="filter__label">Effect #11</span>
            </div>
          </div>
          <div class="filterb filter-img">
            <div class="filter__previewbox">
              <img src="~/static/img/home/filter02.jpg" class="filter__preview" alt="Preview">
              <span class="filter__label">Effect #11</span>
            </div>
          </div>
        </i-col>
        <i-col span="6">
          <div class="filterc filter-img">
            <div class="filter__previewbox">
              <img src="~/static/img/home/filter03.jpg" class="filter__preview" alt="Preview">
              <span class="filter__label">人像滤镜</span>
            </div>
          </div>
        </i-col>
        <i-col span="5">
          <div class="filtera filter-img">
            <div class="filter__previewbox">
              <img src="~/static/img/home/filter02.jpg" class="filter__preview" alt="Preview">
              <span class="filter__label">Effect #11</span>
            </div>
          </div>
          <div class="filterb filter-img">
            <div class="filter__previewbox">
              <img src="~/static/img/home/filter01.jpg" class="filter__preview" alt="Preview">
              <span class="filter__label">Effect #11</span>
            </div>
          </div>
        </i-col>
        <i-col span="4"></i-col>
      </Row>
      <div class="svg-wrapper">
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
          <rect id="shape" height="40" width="150"/>
          <a href=""><span class="spot"></span>Button 1</a>
        </svg>
      </div>
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
  .faceIdentify-title {
    margin: 40px 0;
    font-size: 35px;
    color: rgb(44, 44, 44);
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
        background-color: var(--filterOverlay, rgba(0, 0, 0, 0.329));
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
      font-size: 30px;
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
</style>
