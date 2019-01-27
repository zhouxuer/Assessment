<template>
  <div
    class="swiper swiperBox content"
    v-swiper:swiper="swiperOption"
    ref="swiperBox"
  >
    <div class="bg">
      <bgOne/>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <advertising/>
      </div>
      <div class="swiper-slide faceIdentify">
        <h1 class="title">
          图片特效
          <p><i>— Photo effects —</i></p>
        </h1>
        <Row
          class="code-row-bg"
          type="flex"
          justify="center"
        >
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
          <i-col :xs="7" :sm="6" :md="5" :lg="5">
            <div class="filtera filter-img">
              <div class="filter__previewbox">
                <img
                  src="~/static/img/home/filter01.jpg"
                  class="filter__preview" 
                  alt="Preview"
                />
                <nuxt-link
                  :to="{name:'effects',params:{nameId:'1'}}"
                  class="filter__label"
                >人像滤镜</nuxt-link>
              </div>
            </div>
            <div class="filterb filter-img">
              <div class="filter__previewbox">
                <img
                  src="~/static/img/home/filter02.jpg"
                  class="filter__preview"
                  alt="Preview"
                />
                <nuxt-link
                  :to="{name:'effects',params:{nameId:'2'}}"
                  class="filter__label"
                >风景滤镜</nuxt-link>
              </div>
            </div>
          </i-col>
          <i-col :xs="10" :sm="8" :md="6" :lg="6">
            <div class="filterc filter-img">
              <div class="filter__previewbox">
                <img
                  src="~/static/img/home/filter03.jpg"
                  class="filter__preview"
                  alt="Preview"
                />
                <nuxt-link
                  :to="{name:'effects',params:{nameId:'3'}}"
                  class="filter__label"
                >人脸美妆</nuxt-link>
              </div>
            </div>
          </i-col>
          <i-col :xs="7" :sm="6" :md="5" :lg="5">
            <div class="filtera filter-img">
              <div class="filter__previewbox">
                <img
                  src="~/static/img/home/filter02.jpg"
                  class="filter__preview"
                  alt="Preview"
                />
                <nuxt-link
                  :to="{name:'effects',params:{nameId:'4'}}"
                  class="filter__label"
                >人脸变妆</nuxt-link>
              </div>
            </div>
            <div class="filterb filter-img">
              <div class="filter__previewbox">
                <img
                  src="~/static/img/home/filter01.jpg"
                  class="filter__preview"
                  alt="Preview"
                />
                <nuxt-link
                  :to="{name:'effects',params:{nameId:'5'}}"
                  class="filter__label"
                >动画贴纸</nuxt-link>
              </div>
            </div>
            </i-col>
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
        </Row>
      </div>

      <div class="swiper-slide interestingChat">
        <h1 class="title">
          趣味闲聊
          <p><i>— Photo effects —</i></p>
        </h1> 
        <Row
          class="code-row-bg"
          type="flex"
          justify="center"
        >
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
          <i-col :xs="24" :sm="20" :md="16" :lg="16"
            class="interestingChat-content"
          >
            <div
              v-for="item in interestingChat"
              :key="item.id"
              class="translation"
            >
              <h1>{{item.title}}</h1>
              <p>{{item.text}}</p>
              <nuxt-link :to="{name:'chat'}">{{item.btn}}</nuxt-link>
            </div>
          </i-col>
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
        </Row>
      </div>

      <div class="swiper-slide computerVisual">
        <h1 class="title">
          计算机视觉
          <p><i>— Photo effects —</i></p>
        </h1> 
        <Row
          class="code-row-bg"
          type="flex"
          justify="center"
        >
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
          <i-col :xs="24" :sm="20" :md="16" :lg="16"
            class="computerVisual-content"
          >
            <div class="content-text">
              <h1>图片识别</h1>
              <p>图片识别依托腾讯领先的图片处理技术和深度识别引擎，
                可以快速、准确地识别图片内容信息并自动生成文字描述。
                标签范围涵盖上百种热词，数百种场景及数千种物体分类，
                全面地支持了不同维度层次的图片语义信息提取，更有美食
                等垂类识别，目前该技术在图片识别领域位于世界前列。
              </p> 
            </div>
            <div class='content-label'>
              <div>
                <nuxt-link
                  :to="{name:'visual',params:{nameId:'1'}}"
                >看图说话</nuxt-link>
                <nuxt-link
                  :to="{name:'visual',params:{nameId:'2'}}"
                >标签识别</nuxt-link>
                <nuxt-link 
                  :to="{name:'visual',params:{nameId:'3'}}"
                >模糊识别</nuxt-link>
                <nuxt-link
                  :to="{name:'visual',params:{nameId:'4'}}"
                >美食识别</nuxt-link>
              </div>
            </div>
          </i-col>
          <i-col :xs="0" :sm="2" :md="4" :lg="4"></i-col>
        </Row>
      </div>
    </div>
    <div class="swiper-pagination"  slot="pagination"></div>
  </div>
</template>
<script>
import bgOne from '~/assets/bgOne.vue'
import advertising from '~/components/advertising.vue'
export default {
  components: {
    bgOne,
    advertising
  },
  data () {
    return {
      // 所有配置均为可选（同Swiper配置）
      swiperOption: {
        hashNavigation: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        shortSwipes: false,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      interestingChat: [
        {
          id: 1,
          title: '文本翻译',
          text: `计算机翻译，结合了神经网络机器翻译和统计
                 机器翻译的优点，对源语言文本进行深入理解，
                 使翻译效果更为准确，大大减轻传统文本翻译
                 的读写成本，翻译更轻松。`,
          btn: '立即体验>>'
        },
        {
          id: 2,
          title: '语义解析',
          text: `情感分析依托腾讯强大的机器学习能力和文本挖
                 掘引擎，在腾讯千亿级社交语料的支撑下，不断
                 完善算法模型，以基础NLP能力为技术支撑，联系
                 上下文，深度理解语义，分析和识别文本中表达的
                 情感状态（正面、负面、中立等）。`,
          btn: '立即体验>>'
        },
        {
          id: 3,
          title: '智能闲聊',
          text: `闲聊服务基于AI Lab领先的NLP引擎能力、数据运算
                 能力和千亿级互联网语料数据的支持，同时集成了广
                 泛的知识问答能力，可实现上百种自定义属性配置，
                 以及男、女不同的语言风格及说话方式，从而让聊天
                 变得更睿智、简单和有趣。`,
          btn: '立即体验>>'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .title {
    font-size: 35px;
    color: rgb(255, 255, 255);
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
  .faceIdentify {
    margin-top: 110px;
    .code-row-bg {
      margin-top: 30px;
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
            background-color: var(--filterOverlay, rgba(255, 181, 249, 0.329));
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
          font-size: 25px;
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
  }
  .interestingChat {
    text-align: center;
    .interestingChat-content {
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .translation {
        padding: 35px;
        outline: 2px solid white;
        outline-offset: -15px;
        width: 30%;
        height: 320px;
        background-color:  rgba(243, 218, 255, 0.329);
        text-align: left;
        position: relative;
        h1 {
          color: rgb(255, 255, 255);
        }
        p {
          margin-top: 15px;
          color: rgb(255, 255, 255);
          font-size: 14px;
          text-indent: 2em;
        }
        a {
          position: absolute;
          bottom: 16px;
          right: 20px;
          font-size: 12pt;
          font-family: sans-serif;
          color: rgb(255, 181, 249);
          text-decoration: none;
          letter-spacing: 2px;
          text-align: center;
          padding: 10px 15px;
          &:after {
            width: 100%;
            height: 0;
            background: rgb(255, 181, 249);
            content: '';
            position: absolute;
            top: 75%;
            left: 0;
            opacity: 0;
            -webkit-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
            margin: auto;
          }
          &:hover {
            &:after {
              opacity: 1;
              top: 100%;
              height: 2px;
            }
          }
        }
      }
    }
  }
  .computerVisual {
    .computerVisual-content {
      margin-top: 5%;
      outline: 2px solid white;
      outline-offset: -20px;
      padding: 50px 50px;
      background-color: rgba(243, 218, 255, 0.329);
      color: rgb(255, 255, 255);
      text-align: center;
      .content-text {
        text-align: left;
        p {
          margin: 15px 0;
          font-size: 14px;
          text-indent: 2em;
        }
      }
      .content-label {
        margin-top: 15px;
        position: relative;
        div {
          margin: 50px 0 30px;
          a {
            margin: 0 10px;
            font-size: 12pt;
            font-family: sans-serif;
            color: #fff;
            text-decoration: none;
            letter-spacing: 2px;
            position: relative;
            text-align: center;
            padding: 15px 50px;
            width: 150px;
            &:before {
              content: '';
              position: absolute;
              height: 100%;
              margin: auto;
              width: calc(100% + 4px);
              top: 0;
              left: -2px;
              -webkit-transition: all 0.2s ease;
              transition: all 0.2s ease;
              -webkit-transition-delay: 0.2s;
              transition-delay: 0.2s;
            }
            &:after {
              content: '';
              position: absolute;
              height: 100%;
              margin: auto;
              border-top: 2px solid #fff;
              border-bottom: 2px solid #fff;
              width: 0;
              top: 0;
              left: 50%;
              -webkit-transition: all 0.2s ease;
              transition: all 0.2s ease;
            }
            &:hover {
              &:before {
                height: 0;
                top: 50%;
              }
              &:after {
                width: calc(100% + 4px);
                left: -2px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
