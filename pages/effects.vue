<template>
  <div class="box">

    <div class="bg">
      <bgTwo/>
    </div>

    <Row class="row">
      <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
      <i-col :xs="24" :sm="20" :md="18" :lg="16" class="content">

        <div class="ssss">
          <div ref="img" class="content-img">
            <img v-show="!imgUrl" src="~/static/img/imgEffects/ingBg.png">
            <img v-show="imgUrl" :src="imgUrl">
          </div>

          <div class="content-btn">
            <button class="btn-upload">
              <span>上传图片</span>
              <input
                type="file"
                class="upload"
                @change="changeImg($event)"
              >
            </button>
            <button
              class="btn-upload"
              @click="originalImage"
            ><span>原图</span></button>
            <button
              class="btn-upload"
              @click="ageDetection"
            ><span>年龄检测</span></button>
          </div>
        </div>

        <div class="content-effects">
          <Tabs :value="this.active && this.$route.params.nameId">
            <TabPane
              class="effects-switch"
              v-for="(item) in switchFilter"
              :key="item.id"
              :label="item.title"
              :name="item.id"
            >
              <ul class="effects">
                <li 
                  v-for="(img) in item.images"
                  :key="img.id"
                  class="effects-li"
                >
                  <img
                    :src="img.url"
                    class="effects-img"
                  >
                  <a
                    class="effects-btn"
                    @click="createEffects(item.id, img.id)"
                  >
                  {{img.title}}
                  </a>
                </li>
              </ul>
            </TabPane>
          </Tabs>
        </div>

      </i-col>
      <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
    </Row>
    <div v-show="loading">
      <loading/>
    </div>
  </div>
</template>
<script>
import loading from '~/assets/loading.vue'
import bgTwo from '~/assets/bgTwo.vue'
import global from '~/assets/js/global.js'
import axios from 'axios'
import Qs from 'Qs'
export default {
  components: {
    bgTwo,
    loading
  },
  data () {
    return {
      loading: false,
      active: '1',
      imgUrl: '',
      imgUrlBase64: '',
      imgBase64: '',
      value1: 0,
      switchFilter: [
        {
          id: '1',
          title: '人像滤镜',
          images: [
            {
              id: 4,
              title: '错觉',
              url: require('~/static/img/imgEffects/filterPortrait/4.png')
            },
            {
              id: 5,
              title: '暖阳',
              url: require('~/static/img/imgEffects/filterPortrait/5.png')
            },
            {
              id: 6,
              title: '浪漫',
              url: require('~/static/img/imgEffects/filterPortrait/6.png')
            },
            {
              id: 7,
              title: '蔷薇',
              url: require('~/static/img/imgEffects/filterPortrait/7.png')
            },
            {
              id: 8,
              title: '睡莲',
              url: require('~/static/img/imgEffects/filterPortrait/8.png')
            },
            {
              id: 9,
              title: '糖果玫瑰',
              url: require('~/static/img/imgEffects/filterPortrait/9.png')
            },
            {
              id: 10,
              title: '新叶',
              url: require('~/static/img/imgEffects/filterPortrait/10.png')
            },
            {
              id: 11,
              title: '尤加利',
              url: require('~/static/img/imgEffects/filterPortrait/11.png')
            },
            {
              id: 12,
              title: '墨',
              url: require('~/static/img/imgEffects/filterPortrait/12.png')
            },
            {
              id: 13,
              title: '玫瑰初雪',
              url: require('~/static/img/imgEffects/filterPortrait/13.png')
            },
            {
              id: 14,
              title: '樱桃布丁',
              url: require('~/static/img/imgEffects/filterPortrait/14.png')
            },
            {
              id: 15,
              title: '白茶',
              url: require('~/static/img/imgEffects/filterPortrait/15.png')
            },
            {
              id: 16,
              title: '甜薄荷',
              url: require('~/static/img/imgEffects/filterPortrait/16.png')
            },
            {
              id: 17,
              title: '樱红',
              url: require('~/static/img/imgEffects/filterPortrait/17.png')
            },
            {
              id: 18,
              title: '圣代',
              url: require('~/static/img/imgEffects/filterPortrait/18.png')
            },
            {
              id: 19,
              title: '莫斯科',
              url: require('~/static/img/imgEffects/filterPortrait/19.png')
            },
            {
              id: 20,
              title: '冲绳',
              url: require('~/static/img/imgEffects/filterPortrait/20.png')
            },
            {
              id: 21,
              title: '粉碧',
              url: require('~/static/img/imgEffects/filterPortrait/21.png')
            },
            {
              id: 22,
              title: '地中海',
              url: require('~/static/img/imgEffects/filterPortrait/22.png')
            },
            {
              id: 23,
              title: '首尔',
              url: require('~/static/img/imgEffects/filterPortrait/23.png')
            },
            {
              id: 24,
              title: '佛罗伦萨',
              url: require('~/static/img/imgEffects/filterPortrait/24.png')
            },
            {
              id: 25,
              title: '札幌',
              url: require('~/static/img/imgEffects/filterPortrait/25.png')
            },
            {
              id: 26,
              title: '栀子',
              url: require('~/static/img/imgEffects/filterPortrait/26.png')
            },
            {
              id: 27,
              title: '东京',
              url: require('~/static/img/imgEffects/filterPortrait/27.png')
            },
            {
              id: 28,
              title: '昭和',
              url: require('~/static/img/imgEffects/filterPortrait/28.png')
            },
            {
              id: 29,
              title: '自然',
              url: require('~/static/img/imgEffects/filterPortrait/29.png')
            },
            {
              id: 30,
              title: '清逸',
              url: require('~/static/img/imgEffects/filterPortrait/30.png')
            },
            {
              id: 31,
              title: '染',
              url: require('~/static/img/imgEffects/filterPortrait/31.png')
            },
            {
              id: 32,
              title: '甜美',
              url: require('~/static/img/imgEffects/filterPortrait/32.png')
            }
          ]
        },
        {
          id: '2',
          title: '风景滤镜',
          images: [
            {
              id: 1,
              title: '埃及妆',
              url: require('~/static/img/imgEffects/filterScenery/1.jpg')
            },
            {
              id: 2,
              title: '巴西土著妆',
              url: require('~/static/img/imgEffects/filterScenery/2.jpg')
            },
            {
              id: 3,
              title: '灰姑娘妆',
              url: require('~/static/img/imgEffects/filterScenery/3.jpg')
            },
            {
              id: 4,
              title: '恶魔妆',
              url: require('~/static/img/imgEffects/filterScenery/4.jpg')
            },
            {
              id: 5,
              title: '武媚娘妆',
              url: require('~/static/img/imgEffects/filterScenery/5.jpg')
            },
            {
              id: 6,
              title: '星光薰衣草',
              url: require('~/static/img/imgEffects/filterScenery/6.jpg')
            },
            {
              id: 7,
              title: '花千骨',
              url: require('~/static/img/imgEffects/filterScenery/7.jpg')
            },
            {
              id: 8,
              title: '僵尸妆',
              url: require('~/static/img/imgEffects/filterScenery/8.jpg')
            },
            {
              id: 9,
              title: '爱国妆',
              url: require('~/static/img/imgEffects/filterScenery/9.jpg')
            },
            {
              id: 10,
              title: '小胡子妆',
              url: require('~/static/img/imgEffects/filterScenery/10.jpg')
            },
            {
              id: 11,
              title: '美羊羊妆',
              url: require('~/static/img/imgEffects/filterScenery/11.jpg')
            },
            {
              id: 12,
              title: '火影鸣人妆',
              url: require('~/static/img/imgEffects/filterScenery/12.jpg')
            },
            {
              id: 13,
              title: '刀马旦妆',
              url: require('~/static/img/imgEffects/filterScenery/13.jpg')
            },
            {
              id: 14,
              title: '泡泡妆',
              url: require('~/static/img/imgEffects/filterScenery/14.jpg')
            },
            {
              id: 15,
              title: '桃花妆',
              url: require('~/static/img/imgEffects/filterScenery/15.jpg')
            },
            {
              id: 16,
              title: '女皇妆',
              url: require('~/static/img/imgEffects/filterScenery/16.jpg')
            },
            {
              id: 17,
              title: '权志龙',
              url: require('~/static/img/imgEffects/filterScenery/17.jpg')
            },
            {
              id: 18,
              title: '撩妹妆',
              url: require('~/static/img/imgEffects/filterScenery/18.jpg')
            },
            {
              id: 19,
              title: '印第安妆',
              url: require('~/static/img/imgEffects/filterScenery/19.jpg')
            },
            {
              id: 20,
              title: '印度妆',
              url: require('~/static/img/imgEffects/filterScenery/20.jpg')
            },
            {
              id: 21,
              title: '萌兔妆',
              url: require('~/static/img/imgEffects/filterScenery/21.jpg')
            },
            {
              id: 22,
              title: '大圣妆',
              url: require('~/static/img/imgEffects/filterScenery/22.jpg')
            },
            {
              id: 23,
              title: '印度妆',
              url: require('~/static/img/imgEffects/filterScenery/23.jpg')
            },
            {
              id: 24,
              title: '萌兔妆',
              url: require('~/static/img/imgEffects/filterScenery/24.jpg')
            },
            {
              id: 25,
              title: '大圣妆',
              url: require('~/static/img/imgEffects/filterScenery/25.jpg')
            },
            {
              id: 26,
              title: '萌兔妆',
              url: require('~/static/img/imgEffects/filterScenery/26.jpg')
            },
            {
              id: 27,
              title: '大圣妆',
              url: require('~/static/img/imgEffects/filterScenery/27.jpg')
            },
            {
              id: 28,
              title: '印度妆',
              url: require('~/static/img/imgEffects/filterScenery/28.jpg')
            },
            {
              id: 29,
              title: '萌兔妆',
              url: require('~/static/img/imgEffects/filterScenery/29.jpg')
            },
            {
              id: 30,
              title: '大圣妆',
              url: require('~/static/img/imgEffects/filterScenery/30.jpg')
            }
          ]
        },
        {
          id: '3',
          title: '人脸美妆',
          images: [
            {
              id: 1,
              title: '芭比粉',
              url: require('~/static/img/imgEffects/faceMakeup/1.png')
            },
            {
              id: 2,
              title: '清透',
              url: require('~/static/img/imgEffects/faceMakeup/2.png')
            },
            {
              id: 3,
              title: '烟灰',
              url: require('~/static/img/imgEffects/faceMakeup/3.png')
            },
            {
              id: 4,
              title: '自然',
              url: require('~/static/img/imgEffects/faceMakeup/4.png')
            },
            {
              id: 5,
              title: '樱花粉',
              url: require('~/static/img/imgEffects/faceMakeup/5.png')
            },
            {
              id: 6,
              title: '原宿红',
              url: require('~/static/img/imgEffects/faceMakeup/6.png')
            },
            {
              id: 7,
              title: '闪亮',
              url: require('~/static/img/imgEffects/faceMakeup/7.png')
            },
            {
              id: 8,
              title: '粉紫',
              url: require('~/static/img/imgEffects/faceMakeup/8.png')
            },
            {
              id: 9,
              title: '粉嫩',
              url: require('~/static/img/imgEffects/faceMakeup/9.png')
            },
            {
              id: 10,
              title: '自然',
              url: require('~/static/img/imgEffects/faceMakeup/10.png')
            },
            {
              id: 11,
              title: '清透',
              url: require('~/static/img/imgEffects/faceMakeup/11.png')
            },
            {
              id: 12,
              title: '大地色',
              url: require('~/static/img/imgEffects/faceMakeup/12.png')
            },
            {
              id: 13,
              title: '玫瑰',
              url: require('~/static/img/imgEffects/faceMakeup/13.png')
            },
            {
              id: 14,
              title: '自然',
              url: require('~/static/img/imgEffects/faceMakeup/14.png')
            },
            {
              id: 15,
              title: '清透',
              url: require('~/static/img/imgEffects/faceMakeup/15.png')
            },
            {
              id: 16,
              title: '桃粉',
              url: require('~/static/img/imgEffects/faceMakeup/16.png')
            },
            {
              id: 17,
              title: '橘粉',
              url: require('~/static/img/imgEffects/faceMakeup/17.png')
            },
            {
              id: 18,
              title: '春夏',
              url: require('~/static/img/imgEffects/faceMakeup/18.png')
            },
            {
              id: 19,
              title: '秋冬',
              url: require('~/static/img/imgEffects/faceMakeup/19.png')
            },
            {
              id: 20,
              title: '经典复古',
              url: require('~/static/img/imgEffects/faceMakeup/20.png')
            },
            {
              id: 21,
              title: '性感混血',
              url: require('~/static/img/imgEffects/faceMakeup/21.png')
            },
            {
              id: 22,
              title: '炫彩明眸',
              url: require('~/static/img/imgEffects/faceMakeup/22.png')
            },
            {
              id: 23,
              title: '紫色魅惑',
              url: require('~/static/img/imgEffects/faceMakeup/23.png')
            }
          ]
        },
        {
          id: '4',
          title: '人脸变妆',
          images: [
            {
              id: 1,
              title: '埃及妆',
              url: require('~/static/img/imgEffects/faceDrag/1.jpg')
            },
            {
              id: 2,
              title: '巴西土著妆',
              url: require('~/static/img/imgEffects/faceDrag/2.jpg')
            },
            {
              id: 3,
              title: '灰姑娘妆',
              url: require('~/static/img/imgEffects/faceDrag/3.jpg')
            },
            {
              id: 4,
              title: '恶魔妆',
              url: require('~/static/img/imgEffects/faceDrag/4.jpg')
            },
            {
              id: 5,
              title: '武媚娘妆',
              url: require('~/static/img/imgEffects/faceDrag/5.jpg')
            },
            {
              id: 6,
              title: '星光薰衣草',
              url: require('~/static/img/imgEffects/faceDrag/6.jpg')
            },
            {
              id: 7,
              title: '花千骨',
              url: require('~/static/img/imgEffects/faceDrag/7.jpg')
            },
            {
              id: 8,
              title: '僵尸妆',
              url: require('~/static/img/imgEffects/faceDrag/8.jpg')
            },
            {
              id: 9,
              title: '爱国妆',
              url: require('~/static/img/imgEffects/faceDrag/9.jpg')
            },
            {
              id: 10,
              title: '小胡子妆',
              url: require('~/static/img/imgEffects/faceDrag/10.jpg')
            },
            {
              id: 11,
              title: '美羊羊妆',
              url: require('~/static/img/imgEffects/faceDrag/11.jpg')
            },
            {
              id: 12,
              title: '火影鸣人妆',
              url: require('~/static/img/imgEffects/faceDrag/12.jpg')
            },
            {
              id: 13,
              title: '刀马旦妆',
              url: require('~/static/img/imgEffects/faceDrag/13.jpg')
            },
            {
              id: 14,
              title: '泡泡妆',
              url: require('~/static/img/imgEffects/faceDrag/14.jpg')
            },
            {
              id: 15,
              title: '桃花妆',
              url: require('~/static/img/imgEffects/faceDrag/15.jpg')
            },
            {
              id: 16,
              title: '女皇妆',
              url: require('~/static/img/imgEffects/faceDrag/16.jpg')
            },
            {
              id: 17,
              title: '权志龙',
              url: require('~/static/img/imgEffects/faceDrag/17.jpg')
            },
            {
              id: 18,
              title: '撩妹妆',
              url: require('~/static/img/imgEffects/faceDrag/18.jpg')
            },
            {
              id: 19,
              title: '印第安妆',
              url: require('~/static/img/imgEffects/faceDrag/19.jpg')
            },
            {
              id: 20,
              title: '印度妆',
              url: require('~/static/img/imgEffects/faceDrag/20.jpg')
            },
            {
              id: 21,
              title: '萌兔妆',
              url: require('~/static/img/imgEffects/faceDrag/21.jpg')
            },
            {
              id: 22,
              title: '大圣妆',
              url: require('~/static/img/imgEffects/faceDrag/22.jpg')
            }
          ]
        },
        {
          id: '5',
          title: '动画贴纸',
          images: [
            {
              id: 1,
              title: 'NewDay',
              url: require('~/static/img/imgEffects/photo/1.png')
            },
            {
              id: 2,
              title: '欢乐球吃球',
              url: require('~/static/img/imgEffects/photo/2.png')
            },
            {
              id: 3,
              title: 'Bonvoyage',
              url: require('~/static/img/imgEffects/photo/3.jpg')
            },
            {
              id: 4,
              title: 'Enjoy',
              url: require('~/static/img/imgEffects/photo/4.png')
            },
            {
              id: 5,
              title: 'ChickenSpring',
              url: require('~/static/img/imgEffects/photo/5.png')
            },
            {
              id: 6,
              title: 'ChristmasShow',
              url: require('~/static/img/imgEffects/photo/6.png')
            },
            {
              id: 7,
              title: 'ChristmasSnow',
              url: require('~/static/img/imgEffects/photo/7.png')
            },
            {
              id: 8,
              title: 'CircleCat',
              url: require('~/static/img/imgEffects/photo/8.jpg')
            },
            {
              id: 9,
              title: 'CircleMouse',
              url: require('~/static/img/imgEffects/photo/9.jpg')
            },
            {
              id: 10,
              title: 'CirclePig',
              url: require('~/static/img/imgEffects/photo/10.jpg')
            },
            {
              id: 11,
              title: 'Comicmn',
              url: require('~/static/img/imgEffects/photo/11.png')
            },
            {
              id: 12,
              title: 'CuteBaby',
              url: require('~/static/img/imgEffects/photo/12.jpg')
            },
            {
              id: 13,
              title: 'Envolope',
              url: require('~/static/img/imgEffects/photo/13.jpg')
            },
            {
              id: 14,
              title: 'Fairytale',
              url: require('~/static/img/imgEffects/photo/14.jpg')
            },
            {
              id: 15,
              title: 'GoodNight',
              url: require('~/static/img/imgEffects/photo/15.jpg')
            },
            {
              id: 16,
              title: 'HalloweenNight',
              url: require('~/static/img/imgEffects/photo/16.jpg')
            },
            {
              id: 17,
              title: 'LovelyDay',
              url: require('~/static/img/imgEffects/photo/17.jpg')
            },
            {
              id: 18,
              title: 'Newyear2017',
              url: require('~/static/img/imgEffects/photo/18.png')
            },
            {
              id: 19,
              title: 'PinkSunny',
              url: require('~/static/img/imgEffects/photo/19.png')
            },
            {
              id: 20,
              title: 'KIRAKIRA',
              url: require('~/static/img/imgEffects/photo/20.jpg')
            },
            {
              id: 21,
              title: '欢乐球吃球',
              url: require('~/static/img/imgEffects/photo/21.jpg')
            },
            {
              id: 22,
              title: 'SnowWhite',
              url: require('~/static/img/imgEffects/photo/22.png')
            },
            {
              id: 23,
              title: 'SuperStar',
              url: require('~/static/img/imgEffects/photo/23.png')
            },
            {
              id: 24,
              title: 'WonderfulWork',
              url: require('~/static/img/imgEffects/photo/24.png')
            },
            {
              id: 25,
              title: 'Cold',
              url: require('~/static/img/imgEffects/photo/25.png')
            },
            {
              id: 26,
              title: '狼人杀守卫',
              url: require('~/static/img/imgEffects/photo/26.png')
            },
            {
              id: 27,
              title: '狼人杀猎人',
              url: require('~/static/img/imgEffects/photo/27.png')
            },
            {
              id: 28,
              title: '狼人杀预言家',
              url: require('~/static/img/imgEffects/photo/28.png')
            },
            {
              id: 29,
              title: '狼人杀村民',
              url: require('~/static/img/imgEffects/photo/29.png')
            },
            {
              id: 30,
              title: '狼人杀女巫',
              url: require('~/static/img/imgEffects/photo/30.png')
            },
            {
              id: 31,
              title: '狼人杀狼人',
              url: require('~/static/img/imgEffects/photo/31.png')
            }
          ]
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    // 上传图片并转码
    changeImg (e) {
      this.loading = true
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
              _this.imgUrlBase64 = base64
              let imgBase64 = base64.split(',')
              _this.imgBase64 = imgBase64[1]
              _this.loading = false
            }
          }
          if (dd < files.length - 1) {
            dd++
          } else {
            clearInterval(timer)
          }
        }, 1000)
      }
      _this.loading = false
    },
    // 特效
    createEffects (effects, img) {
      if (this.imgUrl !== '') {
        switch (effects) {
          case '1':
            this.filterPortrait(img)
            break
          case '2':
            this.filterScenery(img)
            break
          case '3':
            this.faceMakeup(img)
            break
          case '4':
            this.faceDrag(img)
            break
          default:
            this.photo(img)
        }
      } else {
        this.$Message.error('请先上传图片在尝试哦！')
      }
    },
    // 原图
    originalImage () {
      this.imgUrl = this.imgUrlBase64
    },
    // 年龄检测
    ageDetection () {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/ptu/ptu_faceage', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    // 人像滤镜
    filterPortrait (img) {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        filter: img,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/ptu/ptu_imgfilter', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    // 风景滤镜
    filterScenery (img) {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        filter: img,
        image: this.imgBase64,
        session_id: global.timeStamp
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/vision/vision_imgfilter', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    // 人脸美妆
    faceMakeup (img) {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        cosmetic: img,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/ptu/ptu_facecosmetic', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    // 人脸变妆
    faceDrag (img) {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        decoration: img,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/ptu/ptu_facedecoration', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    // 大头贴
    photo (img) {
      this.loading = true
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        sticker: img,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/ptu/ptu_facesticker', Qs.stringify(paramter))
        .then(res => {
          this.loading = false
          if (res.data.ret === 0) {
            this.imgUrl = 'data:image/png;base64,' + res.data.data.image
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else if (res.data.ret === 16402) {
            this.$Message.error('未检出到人脸！')
          }
        }).catch(err => {
          this.loading = false
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    }
  }
}
</script>
<style scoped lang="less">
.box {
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .row {
    margin: 0;
    padding: 0;
    .content {
      background-color: rgba(243, 218, 255, 0.329);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      margin-top: 120px;
      text-align: center;
      height: 800px;
      .ssss {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        height: 65%;
        margin: 5% 0% 3%;
        .content-img {
          text-align: center;
          width: 60%;
          height: 100%;
          margin-left: 5%;
          background-color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          img {
            max-width: 100%;
            max-height: 100%;
            margin: auto;
            align-items: center;
          }
        }
        .content-btn {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          width: 40%;
          margin: 0;
          padding: 0;
          .btn-upload {
            height: 12%;
            margin: auto;
            border: none;
            display: block;
            text-align: center;
            cursor: pointer;
            outline: none;
            overflow: hidden;
            position: relative;
            color: #fff;
            font-weight: 700;
            font-size: 15px;
            background-color: #222;
            width: 50%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
            .upload {
              position: absolute;
              z-index: 20;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              opacity: 0;
              cursor: pointer;
            }
            span {
              position: relative;
              z-index: 1;
            }
            &:after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 490%;
              width: 140%;
              background:rgb(255, 181, 249);
              -webkit-transition: all .5s ease-in-out;
              transition: all .5s ease-in-out;
              -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
              transform: translateX(-98%) translateY(-25%) rotate(45deg);
            }
            &:hover:after {
              -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
              transform: translateX(-9%) translateY(-25%) rotate(45deg);
            }
          }
        }
      }
      .content-effects {
        display: flex;
        flex-direction: row;
        .effects-switch {
          width: 100%;
        }
        .ivu-tabs-bar {
          border-bottom: 5px solid #000000;
        }
        .effects {
          display: flex;
          flex-direction: row;
          overflow: auto;
          .effects-li {
            position: relative;
            text-align: center;
            margin: 0 5px;
            list-style: none;
            .effects-img {
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
              border-radius: 50%;
              border: 1px solid #8d78b1;
            }
            .effects-btn {
              font-size: 16px;
              position: absolute;
              padding-top: 41%;
              top: 0;
              bottom: 4%;
              right: 0;
              left: 0;
              border-radius: 50%;
              font-weight: bold;
              color: rgb(255, 255, 255);
              opacity: 0;
              border: 1px solid rgb(255, 255, 255);
              background-image: linear-gradient(-135deg, #8d78b1b9, #8d78b1c7 50%, #fff 50%, #fff);
              background-size: 100% 500%;
              background-position: bottom;
              -webkit-transition: all 0.4s ease;
              &:hover {
                opacity: 1;
                background-position: top;
              }
              &:active  {
                opacity: 1;
                background-position: top;
              }
            }
          }
        }
      }
    }
  }
}
</style>
