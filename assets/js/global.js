const timeStamp = Math.round(new Date().getTime() / 1000).toString()
const nonceStr = Math.round(new Date()).toString()

function GB2312UTF8 () {
  this.Dig2Dec = function (s) {
    var retV = 0
    if (s.length === 4) {
      for (var i = 0; i < 4; i++) {
        // eslint-disable-next-line no-eval
        retV += eval(s.charAt(i)) * Math.pow(2, 3 - i)
      }
      return retV
    }
    return -1
  }
  this.Hex2Utf8 = function (s) {
    var retS = ''
    var tempS = ''
    var ss = ''
    if (s.length === 16) {
      tempS = '1110' + s.substring(0, 4)
      tempS += '10' + s.substring(4, 10)
      tempS += '10' + s.substring(10, 16)
      var sss = '0123456789ABCDEF'
      for (var i = 0; i < 3; i++) {
        retS += '%'
        // eslint-disable-next-line no-eval
        ss = tempS.substring(i * 8, (eval(i) + 1) * 8)
        retS += sss.charAt(this.Dig2Dec(ss.substring(0, 4)))
        retS += sss.charAt(this.Dig2Dec(ss.substring(4, 8)))
      }
      return retS
    }
    return ''
  }
  this.Dec2Dig = function (n1) {
    var s = ''
    var n2 = 0
    for (var i = 0; i < 4; i++) {
      n2 = Math.pow(2, 3 - i)
      if (n1 >= n2) {
        s += '1'
        n1 = n1 - n2
      } else { s += '0' }
    }
    return s
  }

  this.Str2Hex = function (s) {
    var c = ''
    var n
    var ss = '0123456789ABCDEF'
    var digS = ''
    for (let i = 0; i < s.length; i++) {
      c = s.charAt(i)
      n = ss.indexOf(c)
      // eslint-disable-next-line no-eval
      digS += this.Dec2Dig(eval(n))
    }
    return digS
  }
  this.Gb2312ToUtf8 = function (s1) {
    var s = escape(s1)
    var sa = s.split('%')
    var retV = ''
    if (sa[0] !== '') {
      retV = sa[0]
    }
    for (var i = 1; i < sa.length; i++) {
      if (sa[i].substring(0, 1) === 'u') {
        retV += this.Hex2Utf8(this.Str2Hex(sa[i].substring(1, 5)))
        if (sa[i].length) {
          retV += sa[i].substring(5)
        }
      } else {
        retV += unescape('%' + sa[i])
        if (sa[i].length) {
          retV += sa[i].substring(5)
        }
      }
    }
    return retV
  }
  this.Utf8ToGb2312 = function (str1) {
    var substr = ''
    var a = ''
    var b = ''
    var c = ''
    var i = -1
    i = str1.indexOf('%')
    if (i === -1) {
      return str1
    }
    while (i !== -1) {
      if (i < 3) {
        substr = substr + str1.substr(0, i - 1)
        str1 = str1.substr(i + 1, str1.length - i)
        a = str1.substr(0, 2)
        str1 = str1.substr(2, str1.length - 2)
        if (parseInt('0x' + a) & 0x80 === 0) {
          substr = substr + String.fromCharCode(parseInt('0x' + a))
        } else if (parseInt('0x' + a) & 0xE0 === 0xC0) { // two byte
          b = str1.substr(1, 2)
          str1 = str1.substr(3, str1.length - 3)
          var widechar = (parseInt('0x' + a) & 0x1F) << 6
          widechar = widechar | (parseInt('0x' + b) & 0x3F)
          substr = substr + String.fromCharCode(widechar)
        } else {
          b = str1.substr(1, 2)
          str1 = str1.substr(3, str1.length - 3)
          c = str1.substr(1, 2)
          str1 = str1.substr(3, str1.length - 3)
          let widechar = (parseInt('0x' + a) & 0x0F) << 12
          widechar = widechar | ((parseInt('0x' + b) & 0x3F) << 6)
          widechar = widechar | (parseInt('0x' + c) & 0x3F)
          substr = substr + String.fromCharCode(widechar)
        }
      } else {
        substr = substr + str1.substring(0, i)
        str1 = str1.substring(i)
      }
      i = str1.indexOf('%')
    }

    return substr + str1
  }
}

// function Utf8ToUnicode (strUtf8) {
//   var bstr = ''
//   var nTotalChars = strUtf8.length// total chars to be processed.
//   var nOffset = 0// processing point on strUtf8
//   var nRemainingBytes = nTotalChars// how many bytes left to be converted
//   var nOutputPosition = 0
//   var iCode, iCode1, iCode2// the value of the unicode.

//   while (nOffset < nTotalChars) {
//     iCode = strUtf8.charCodeAt(nOffset)
//     if ((iCode & 0x80) == 0) { // 1 byte.
//       if (nRemainingBytes < 1) { // not enough data
//         break
//       }

//       bstr += String.fromCharCode(iCode & 0x7F)
//       nOffset++
//       nRemainingBytes -= 1
//     } else if ((iCode & 0xE0) == 0xC0) { // 2 bytes
//       iCode1 = strUtf8.charCodeAt(nOffset + 1)
//       if (nRemainingBytes < 2 || // not enough data
//         (iCode1 & 0xC0) != 0x80) { // invalid pattern
//         break
//       }

//       bstr += String.fromCharCode(((iCode & 0x3F) << 6) | (iCode1 & 0x3F))
//       nOffset += 2
//       nRemainingBytes -= 2
//     } else if ((iCode & 0xF0) == 0xE0) { // 3 bytes
//       iCode1 = strUtf8.charCodeAt(nOffset + 1)
//       iCode2 = strUtf8.charCodeAt(nOffset + 2)
//       if (nRemainingBytes < 3 || // not enough data
//         (iCode1 & 0xC0) != 0x80 || // invalid pattern
//         (iCode2 & 0xC0) != 0x80) {
//         break
//       }

//       bstr += String.fromCharCode(((iCode & 0x0F) << 12) |
//         ((iCode1 & 0x3F) << 6) |
//         (iCode2 & 0x3F))
//       nOffset += 3
//       nRemainingBytes -= 3
//     } else {
//       break
//     }
//   }

//   if (nRemainingBytes !== 0) {
//     // bad UTF8 string.
//     return ''
//   }

//   return bstr
// }

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
  changeImg,
  GB2312UTF8
}
