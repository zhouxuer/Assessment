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

export default {
  httpto,
  navData
}
