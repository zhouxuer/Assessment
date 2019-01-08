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
          <div class="content-filter">
            <div class="aaa">
              <span
                v-for="(item) in switchArr"
                :key="item.id"
                class="filter-switch"
                @click="portraitSwitch"
              >
              {{item.title}}
              </span>
            </div>
            <ul class="filter" v-show="this.switch=1">
              <li 
                v-for="(item) in filterPortraitImgArr"
                :key="item.id"
                class="filter-li"
              >
                <img
                  :src="item.url"
                  class="filter-img"
                >
                <p class="filter-btn" @click="portraitFilter(item.id)">{{item.title}}</p>
              </li>
            </ul>
            <ul class="filter">
              <li 
                v-for="(item) in filterPortraitImgArr"
                :key="item.id"
                class="filter-li"
              >
                <img
                  :src="item.url"
                  class="filter-img"
                >
                <p class="filter-btn" @click="sceneryFilter(item.id)">{{item.title}}</p>
              </li>
            </ul>
          </div>
        </i-col>
        <i-col span="4"></i-col>
      </Row>
    </div>
  </div>
</template>
<script>
import bg from '~/assets/bg.vue'
import config from '~/assets/js/config.js'
import axios from 'axios'
import md5 from 'md5'
import Qs from 'Qs'
export default {
  components: {
    bg
  },
  data () {
    return {
      imgUrl: '',
      imgData: '',
      appKey: 'T7Ogcjb7gfuhrvuW',
      appId: '2110945056',
      value1: 0,
      switchArr: [
        {
          id: 1,
          title: '人像滤镜'
        },
        {
          id: 2,
          title: '风景滤镜'
        },
        {
          id: 3,
          title: '人脸美妆'
        },
        {
          id: 4,
          title: '人脸变妆'
        },
        {
          id: 5,
          title: '大头贴'
        },
        {
          id: 6,
          title: '颜龄检测'
        }
      ],
      filterPortraitImgArr: [
        {
          id: 1,
          title: '黛紫',
          url: require('~/static/img/filterPortrait/1.png')
        },
        {
          id: 2,
          title: '岩井',
          url: require('~/static/img/filterPortrait/2.png')
        },
        {
          id: 3,
          title: '粉嫩',
          url: require('~/static/img/filterPortrait/3.png')
        },
        {
          id: 4,
          title: '错觉',
          url: require('~/static/img/filterPortrait/4.png')
        },
        {
          id: 5,
          title: '暖阳',
          url: require('~/static/img/filterPortrait/5.png')
        },
        {
          id: 6,
          title: '浪漫',
          url: require('~/static/img/filterPortrait/6.png')
        },
        {
          id: 12,
          title: '墨',
          url: require('~/static/img/filterPortrait/12.png')
        },
        {
          id: 13,
          title: '玫瑰初雪',
          url: require('~/static/img/filterPortrait/13.png')
        },
        {
          id: 14,
          title: '樱桃布丁',
          url: require('~/static/img/filterPortrait/14.png')
        },
        {
          id: 15,
          title: '白茶',
          url: require('~/static/img/filterPortrait/15.png')
        },
        {
          id: 16,
          title: '甜薄荷',
          url: require('~/static/img/filterPortrait/16.png')
        },
        {
          id: 17,
          title: '樱红',
          url: require('~/static/img/filterPortrait/17.png')
        },
        {
          id: 18,
          title: '圣代',
          url: require('~/static/img/filterPortrait/18.png')
        },
        {
          id: 19,
          title: '莫斯科',
          url: require('~/static/img/filterPortrait/19.png')
        },
        {
          id: 20,
          title: '冲绳',
          url: require('~/static/img/filterPortrait/20.png')
        },
        {
          id: 21,
          title: '粉碧',
          url: require('~/static/img/filterPortrait/21.png')
        },
        {
          id: 22,
          title: '地中海',
          url: require('~/static/img/filterPortrait/22.png')
        },
        {
          id: 23,
          title: '首尔',
          url: require('~/static/img/filterPortrait/23.png')
        },
        {
          id: 24,
          title: '佛罗伦萨',
          url: require('~/static/img/filterPortrait/24.png')
        },
        {
          id: 25,
          title: '札幌',
          url: require('~/static/img/filterPortrait/25.png')
        },
        {
          id: 26,
          title: '栀子',
          url: require('~/static/img/filterPortrait/26.png')
        },
        {
          id: 27,
          title: '东京',
          url: require('~/static/img/filterPortrait/27.png')
        },
        {
          id: 28,
          title: '昭和',
          url: require('~/static/img/filterPortrait/28.png')
        }
      ]
    }
  },
  methods: {
    // 上传图片并转码
    changeImg (e) {
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
            files.item(dd).type !== 'image/png') {
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
    portraitSwitch () {
      this.switch = true
    },
    scenerySwitch () {
      this.switch = false
    },
    // 网络请求
    portraitFilter (id) {
      // console.log(id + '1111')
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        filter: id,
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
    sceneryFilter (id) {
      // console.log(id + '1111')
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        filter: id,
        image: this.imgData,
        session_id: config.timeStamp
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
      axios.post('/fcgi-bin/vision/vision_imgfilter', Qs.stringify(paramter))
        .then(res => {
          this.imgUrl = 'data:image/png;base64,' + res.data.data.image
        }).catch(err => {
          console.log(err)
        })
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
    .content-filter {
      display: flex;
      flex-direction: row;
      .aaa {
        display: block;
      }
      .filter {
        width: 80%;
        display: flex;
        flex-direction: row;
        overflow: auto;
        // display: inline;
        .filter-li {
          position: relative;
          text-align: center;
          margin: 0 5px;
          list-style: none;
          .filter-btn {
            font-size: 16px;
            text-align: center;
            position: absolute;
            padding-top: 50%;
            top: 0;
            bottom: 4%;
            right: 0;
            left: 0;
            background-color: rgba(162, 0, 255, 0.541);
            border-radius: 50%;
            font-weight: bold;
            color: rgb(255, 255, 255);
            opacity: 0;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
