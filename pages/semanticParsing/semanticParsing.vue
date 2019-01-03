<template>
  <div class="com-upload-img">
    <input type="file" accept="image/*" @change="changeImg($event)">
    <img :src="imgData" alt="">
    <!-- <Input v-model="imgData" type="textarea" :rows="30" class="input" /> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgData: ''
    }
  },
  methods: {
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
              w = 400
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
              _this.imgData = base64
            }
          }
          if (dd < files.length - 1) {
            dd++
          } else {
            clearInterval(timer)
          }
        }, 1000)
      }
    }
  }
}
</script>
<style scoped lang="less">
.com-upload-img {
  width: 100%;
  margin-top: 200px;
  background-color: #f5ff;
  .bbb {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
