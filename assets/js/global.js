const timeStamp = Math.round(new Date().getTime() / 1000).toString()
const nonceStr = Math.round(new Date()).toString()

// 上传图片并转码
function changeImg (e) {
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
          let imgUrl = base64
          return imgUrl
          // let aaa = base64.split(',')
          // _this.imgData = aaa[1]
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
export default {
  timeStamp,
  nonceStr,
  changeImg
}
