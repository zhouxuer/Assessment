<template>
  <div class="page">

    <div class="bg">
      <bgg/>
    </div>

    <Row class="row">
      <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
      <i-col :xs="24" :sm="20" :md="18" :lg="16" class="content">

        <div class="ssss">
          <div ref="img" class="content-img">
            <img :src="imgUrl">
          </div>

          <div class="git-content">
            <Tabs value="name1">
              <TabPane label="看图说话" name="name1">
                <p v-show="!seeImgValue">点击查看按钮查看内容</p>
                <p v-show="seeImgValue">{{this.seeImgValue}}</p>
              </TabPane>
              <TabPane label="多标签识别" name="name2">标签二的内容</TabPane>
              <TabPane label="模糊图片识别" name="name3">标签三的内容</TabPane>
              <TabPane label="美食图片识别" name="name4">标签四的内容</TabPane>
              <TabPane label="场景物体识别" name="name4">标签四的内容</TabPane>
            </Tabs>
          </div>
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
          <button class="btn-upload" @click="viewData"><span>查看</span></button>
        </div>

      </i-col>
      <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
    </Row>
    
  </div>
</template>
<script>
import bgg from '~/assets/bgg.vue'
import global from '~/assets/js/global.js'
import axios from 'axios'
import Qs from 'Qs'
export default {
  components: {
    bgg
  },
  data () {
    return {
      active: '1',
      imgUrl: '',
      imgUrlBase64: '',
      imgBase64: '',
      seeImgValue: ''
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
              // let scale = w / h
              // w = 300
              // h = w / scale
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
    viewData () {
      if (this.imgUrl !== '') {
        this.gitSeeImgValue()
        this.gitLabelValue()
      } else {
        this.$Message.error('请先上传图片在尝试哦！')
      }
    },
    gitSeeImgValue () {
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        image: this.imgBase64,
        session_id: global.timeStamp
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/vision/vision_imgtotext', Qs.stringify(paramter))
        .then(res => {
          if (res.data.ret === 0) {
            this.seeImgValue = res.data.data.text
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          }
        }).catch(err => {
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    },
    gitLabelValue () {
      let params = {
        app_id: global.appId,
        time_stamp: global.timeStamp,
        nonce_str: global.nonceStr,
        image: this.imgBase64
      }
      const paramter = global.signature(params)
      axios.post('/fcgi-bin/image/image_tag', Qs.stringify(paramter))
        .then(res => {
          if (res.data.ret === 0) {
            console.log(res.data.data.text)
            // this.seeImgValue = res.data.data.text
          } else if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          }
        }).catch(err => {
          this.$Message.error('抱歉，网络异常！')
          console.log(err)
        })
    }
  }
}
</script>
<style scoped lang="less">
.page {
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
    margin-bottom: 50px;
    .content {
      background-color: rgba(243, 218, 255, 0.329);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      margin-top: 120px;
      text-align: center;
      .ssss {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        height: 550px;
        text-align: center;
        margin: 5% 0% 3%;
        .content-img {
          background-image: url('../static/img/imgEffects/ingBg.png');
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          width: 50%;
          height: 100%;
          margin-left: 5%;
          background-color: rgb(255, 255, 255);
          img {
            max-width: 100%;
            max-height: 100%;
            margin: auto;
          }
        }
        .git-content {
          margin: 0 3%;
          width: 40%;
          background-color: rgba(255, 255, 255, 0.424);
        }
      }
      .content-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // text-align: center;
        margin: auto;
        padding: 0;
        width: 80%;
        .btn-upload {
          width: 30%;
          height: 60px;
          margin: 0 auto 50px;
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
  }
}
</style>
