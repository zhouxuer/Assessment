<template>
  <div class="aaa">
    <div class="bg">
      <bg/>
    </div>
    <Input v-model="value1" type="textarea" :rows="4" placeholder="Enter something..." class="input" />
    <Button type="primary" @click="sss">翻译文本</Button>
    <Input v-model="value2" type="textarea" :rows="4" placeholder="Enter something..." class="input" />
  </div>
</template>
<script>
import bg from '~/assets/bg.vue'
import config from '~/assets/js/config.js'
import axios from 'axios'
import md5 from 'md5'
export default {
  components: {
    bg
  },
  data () {
    return {
      value1: '',
      value2: '',
      appKey: '5YsLCOwtO5hcvx8e',
      appId: '2110940915'
    }
  },
  mounted () {
    // this.sss()
  },
  methods: {
    sss () {
      let params = [{
        appId: this.appId,
        timeStamp: config.timeStamp,
        nonceStr: config.nonceStr,
        type: '0',
        text: this.value1,
        sign: ''
      }]
      // 将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      const N = Object.keys(params).sort()
      console.log(N)
      // 将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），
      const FF = N.map(key => {
        const value = params[key]
        return `${key}=${encodeURIComponent(value)}`
      })
      console.log(FF)
      // URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
      const F = FF.join('&').toUpperCase()
      console.log(F)
      // 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
      const S = `${F}&app_id=${this.appKey}`
      console.log(S)
      // 对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
      const sign = md5(S).toUpperCase()
      console.log(sign)
      params.forEach(item => {
        item.sign = sign
      })
      const param = params[0]
      console.log(param)
      axios.post('https://api.ai.qq.com/fcgi-bin/nlp/nlp_texttrans', param,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped lang="less">
.aaa {
  margin-top: 100px;
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .input {
    width: 40%;
  }
}
</style>
