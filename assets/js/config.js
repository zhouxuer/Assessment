const httpto = ''
const navData = [
  {
    icon: '',
    title: '首页',
    to: '/home',
    name: '1'
  },
  {
    icon: '',
    title: '人脸识别',
    to: '/faceIdentify/faceIdentify',
    name: '2'
    // children: [
    //   {
    //     icon: '',
    //     title: 'demoOne',
    //     to: '/Demo/DemoOne'
    //   },
    //   {
    //     icon: '',
    //     title: 'demoTwo',
    //     to: '/Demo/DemoTwo'
    //   }
    // ]
  },
  {
    icon: '',
    title: '图片识别',
    to: '/imgIdentify/imgIdentify',
    name: '3'
  },
  {
    icon: '',
    title: '图片特效',
    to: '/ingEffects/ingEffects',
    name: '4'
  },
  {
    icon: '',
    title: '语义解析',
    to: '/semanticParsing/semanticParsing',
    name: '5'
  }
]
const timeStamp = Math.round(new Date().getTime() / 1000).toString()
// nonceStr (L) {
let L = 32
let nonceStr = ''
let randomchar = function () {
  let n = Math.floor(Math.random() * 62)
  if (n < 10) return n
  if (n < 36) return String.fromCharCode(n + 55)
  return String.fromCharCode(n + 61)
}
while (nonceStr.length < L) nonceStr += randomchar()

export default {
  httpto,
  navData,
  timeStamp,
  nonceStr
}
