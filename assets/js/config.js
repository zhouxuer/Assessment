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
    title: '图片特效',
    to: '/imgEffects/imgEffects',
    name: '2'
    // children: [
    //   {
    //     icon: '',
    //     title: 'demoOne',
    //     to: '/Demo/DemoOne'
    //   },
    //   {/imgIdentify/imgIdentify
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
    title: '111',
    to: '/faceIdentify/faceIdentify',
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
const nonceStr = Math.round(new Date()).toString()
export default {
  httpto,
  navData,
  timeStamp,
  nonceStr
}
