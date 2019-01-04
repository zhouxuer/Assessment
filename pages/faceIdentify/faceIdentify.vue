<template>
  <div class="sss">
    <div class="bg">
      <bg/>
    </div>
    <div class="content">
      <a class="contentFile">上传文件
        <input type="file" class="contentInput" @change="changeImg($event)">
      </a>
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
      <img :src="imgUrl" alt="">
      <Button type="primary" @click="sss">一键美颜</Button>
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
      imgDataTop: '',
      imgData: '',
      appKey: 'T7Ogcjb7gfuhrvuW',
      appId: '2110945056'
    }
  },
  methods: {
    // 上传图片并转码
    changeImg: function (e) {
      const _this = this
      const imgLimit = 1024 // 图片限制大小
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
              w = 200
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
              _this.imgDataTop = aaa[0]
              // let index = base64.lastIndexOf(',')
              // _this.imgData = base64.substring(index + 1, base64.length)
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
    sss () {
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        filter: 1,
        image: this.imgData
      }
      // 将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      const N = Object.keys(params).sort()
      console.log(N)
      // 将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），
      const TT = N.map(key => {
        const value = params[key]
        return `${key}=${encodeURIComponent(value)}`
      })
      console.log(TT)
      // URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
      const T = TT.join('&')
      console.log(T)
      // 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
      const S = `${T}&app_key=${this.appKey}`
      console.log(S)
      // 对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
      const sign = md5(S).toUpperCase()
      console.log(sign)
      const paramter = {
        ...params,
        sign
      }
      console.log(paramter)
      axios.post('/fcgi-bin/ptu/ptu_imgfilter', Qs.stringify(paramter))
        .then(res => {
          console.log(res.data.data.image)
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
    margin-top: 200px;
    .contentFile {
      background-color: rgb(255, 255, 255);
      .contentInput {
        opacity: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
