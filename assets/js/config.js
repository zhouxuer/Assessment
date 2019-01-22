const httpto = ''
const navData = [
  {
    icon: '',
    title: '首页',
    to: '/',
    name: '1'
  },
  {
    icon: '',
    title: '图片特效',
    to: '/imgEffects',
    name: '2'
  },
  {
    icon: '',
    title: '图片识别',
    to: '/imgIdentify',
    name: '3'
  },
  {
    icon: '',
    title: '111',
    to: '/faceIdentify',
    name: '4'
  }
]
const timeStamp = Math.round(new Date().getTime() / 1000).toString()
const nonceStr = Math.round(new Date()).toString()
export default {
  httpto,
  navData,
  timeStamp,
  nonceStr
}
