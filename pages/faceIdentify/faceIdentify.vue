<template>
  <div class="sss">
    <div class="bg">
      <bg/>
    </div>
    <div>
      <Row>
        <i-col span="4">.</i-col>
        <i-col span="16" class="content">
          <div class="content-img">
            <img :src="imgUrl">
          </div>
          <div class="content-upload">上传文件
            <input type="file" class="content-input" @change="changeImg($event)">
          </div>
          <Button type="primary" @click="filter">一键美颜</Button>
          <div style="width:70%;margin:20px auto;height:400px">
            <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
              <!-- 直接使用slideritem slot -->
              <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
              <!-- 设置loading,可自定义 -->
              <div slot="loading">loading...</div>
            </slider>
          </div>
        </i-col>
        <i-col span="4"></i-col>
      </Row>
    </div>
  </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'// import slider components
import bg from '~/assets/bg.vue'
import config from '~/assets/js/config.js'
import axios from 'axios'
import md5 from 'md5'
import Qs from 'Qs'
export default {
  components: {
    bg,
    slider,
    slideritem
  },
  data () {
    return {
      imgUrl: '',
      imgData: '',
      appKey: 'T7Ogcjb7gfuhrvuW',
      appId: '2110945056',
      // Image list
      someList: [],
      // Sliding configuration [obj]
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 1000,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 300,
        infinite: 2
      }
    }
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: 'slide1',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          html: 'slide2',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          html: 'slide3',
          style: {
            'background': '#7baabe'
          }
        }
      ]
    }, 2000)
  },
  methods: {
    // 上传图片并转码
    changeImg: function (e) {
      const _this = this
      const imgLimit = 500 // 图片限制大小
      const files = e.target.files
      const image = new Image() // 浏览器缓存图片
      if (files.length > 0) {
        let dd = 0
        const timer = setInterval(function () {
          // 判断上传文件图片格式
          if (files.item(dd).type !== 'image/png' &&
            files.item(dd).type !== 'image/jpeg' &&
            files.item(dd).type !== 'image/gif') {
            return false
          }
          // 图片大小
          if (files.item(dd).size > imgLimit * 102400) {
            // to do sth
          } else {
            image.src = window.URL.createObjectURL(files.item(dd))
            image.onload = function () {
              // 默认按比例压缩
              let [w, h] = [image.width, image.height]
              let scale = w / h
              w = 300
              h = w / scale
              // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
              let quality = 0.7
              // 生成canvas
              let canvas = document.createElement('canvas')
              let ctx = canvas.getContext('2d')
              // 创建属性节点
              let anw = document.createAttribute('width')
              anw.nodeValue = w
              let anh = document.createAttribute('height')
              anh.nodeValue = h
              canvas.setAttributeNode(anw)
              canvas.setAttributeNode(anh)
              ctx.drawImage(image, 0, 0, w, h)
              let ext = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase() // 图片格式
              let base64 = canvas.toDataURL('image/' + ext, quality)
              _this.imgUrl = base64
              let aaa = base64.split(',')
              _this.imgData = aaa[1]
            }
          }
          if (dd < files.length - 1) {
            dd++
          } else {
            clearInterval(timer)
          }
        }, 1000)
      }
    },
    // 网络请求
    filter () {
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        filter: 1,
        image: this.imgData
      }
      const N = Object.keys(params).sort()
      const TT = N.map(key => {
        const value = params[key]
        return `${key}=${encodeURIComponent(value)}`
      })
      const T = TT.join('&')
      const S = `${T}&app_key=${this.appKey}`
      const sign = md5(S).toUpperCase()
      const paramter = {
        ...params,
        sign
      }
      axios.post('/fcgi-bin/ptu/ptu_imgfilter', Qs.stringify(paramter))
        .then(res => {
          this.imgUrl = 'data:image/png;base64,' + res.data.data.image
        }).catch(err => {
          console.log(err)
        })
    },
    // Listener event
    slide (data) {
      console.log(data)
    },
    onTap (data) {
      console.log(data)
    },
    onInit (data) {
      console.log(data)
    }
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
  .content {
    margin-top: 100px;
    background-color: rgba(146, 146, 146, 0.212);
    .content-img {
      text-align: center;
      position: relative;
      z-index: 10;
      margin: 4% auto 2%;
      width: 60%;
      padding-bottom: 40%;
      background-color: #fff;
      overflow: hidden;
      img {
        position: absolute;
        z-index: 30;
        display: inline-block;
        height: auto;
        max-width: 100%;
        margin: auto;
      }
    }
    .content-upload {
      display: inline-block;
      width: 150px;
      height: 40px;
      background-color: rgb(202, 0, 0);
      position: relative;
      overflow: hidden;
      .content-input {
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
