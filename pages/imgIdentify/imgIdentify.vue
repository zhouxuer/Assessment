<template>
  <div class="page">
    <div class="bg">
      <bg/>
    </div>
    <div>
      <Row>
        <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
        <i-col :xs="24" :sm="20" :md="18" :lg="16" class="content">
          <div class="input">
            <Input
              v-model="value1"
              type="textarea"
              :rows="4"
              placeholder="Enter something..."
              class="input-text"
            />
            <Button class="translate-btn" type="primary" @click="generate">点击有惊喜</Button>
          </div>
          <Row class="show">
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="translate">
                <Dropdown trigger="custom" :visible="visible" class="translate-label-btn" style="margin-left: 20px">
                  <a
                    href="javascript:void(0)"
                    @click="handleOpen"
                    class="translate-label-text"
                  >
                    {{this.labelValue}}
                    <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                    <a
                      v-for="item in translateLabel"
                      :key="item.id"
                      @click="handleClose(item.id, item.value)"
                      class="translate-label-list"
                    >
                      {{item.value}}
                    </a>
                  </DropdownMenu>
                </Dropdown>
                <Button class="translate-btn" type="primary" @click="translate">翻译文本</Button>
                <Input v-model="value2" type="textarea" :rows="4" placeholder="Enter something..." class="translate-text" />
              </div>
            </i-col>
            <i-col :xs="0" :sm="2" :md="2" :lg="1">.</i-col>
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="words">
                <div class="words-part">
                  <h2 class="words-title">分词</h2>
                </div>
                <div class="words-sense">
                  <h2 class="words-title">词性</h2>
                </div>
              </div>
            </i-col>
          </Row>
        </i-col>
        <i-col :xs="0" :sm="2" :md="3" :lg="4"></i-col>
      </Row>
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
      visible: false,
      translateLabel: [
        {
          id: 0,
          value: '自动识别（中文 → 英文）'
        },
        {
          id: 1,
          value: '中文 → 英文'
        },
        {
          id: 2,
          value: '英文 → 中文'
        },
        {
          id: 5,
          value: '中文 → 法文'
        },
        {
          id: 6,
          value: '法文 → 中文'
        },
        {
          id: 9,
          value: '中文 → 粤语'
        },
        {
          id: 10,
          value: '粤语 → 中文'
        },
        {
          id: 13,
          value: '英文 → 德语'
        },
        {
          id: 14,
          value: '德语 → 英文'
        },
        {
          id: 15,
          value: '中文 → 日文'
        },
        {
          id: 16,
          value: '日文 → 中文'
        },
        {
          id: 7,
          value: '英文 → 越南语'
        },
        {
          id: 8,
          value: '越南语 → 英文'
        },
        {
          id: 3,
          value: '中文 → 西班牙文'
        },
        {
          id: 4,
          value: '西班牙文 → 中文'
        },
        {
          id: 11,
          value: '中文 → 韩文'
        }
      ],
      labelValue: '自动识别（中文 → 英文）',
      translateType: 0,
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
    handleOpen () {
      this.visible = !this.visible
    },
    handleClose (id, value) {
      this.translateType = id
      this.labelValue = value
      this.visible = false
    },
    generate () {
      this.translate()
      this.wordsPart()
    },
    translate () {
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        type: this.translateType,
        text: this.value1
      }
      // 将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      const N = Object.keys(params).sort()
      // console.log(N)
      // 将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），
      const TT = N.map(key => {
        const value = params[key]
        return `${key}=${encodeURIComponent(value)}`
      })
      // console.log(TT)
      // URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
      const T = TT.join('&')
      // console.log(T)
      // 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
      const S = `${T}&app_key=${this.appKey}`
      // console.log(S)
      // 对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
      const sign = md5(S).toUpperCase()
      // console.log(sign)
      // params.forEach(item => {
      //   item.sign = sign
      // })
      const paramter = {
        ...params,
        sign
      }
      // console.log(paramter)
      axios.post('/fcgi-bin/nlp/nlp_texttrans', Qs.stringify(paramter))
        .then(res => {
          // console.log(res.data.data.trans_text)
          this.value2 = res.data.data.trans_text
        }).catch(err => {
          console.log(err)
        })
    },
    wordsPart () {
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        text: this.value1
      }
      const N = Object.keys(params).sort()
      const TT = N.map(key => {
        const value = params[key]
        return `${key}=${encodeURIComponent(value)}`
      })
      const T = TT.join('&')
      const S = `${T}&app_key=${this.appKey}`
      const sign = md5(S).toUpperCase()
      const paramter = {
        ...params,
        sign
      }
      axios.post('/fcgi-bin/nlp/nlp_wordseg', Qs.stringify(paramter))
        .then(res => {
          console.log(res.data.data.trans_text)
          // this.value2 = res.data.data.trans_text
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped lang="less">
.page {
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
    margin-bottom: 20px;
    .input-text {
      width: 85%;
    }
  }
  .show {
    .translate {
      width: 100%;
      height: 300px;
      background-color: rgb(185, 235, 255);
      .translate-label-btn {
        width: 250px;
        height: 30px;
        background-color: #fff;
        .translate-label-list {
          display: inline-block;
          margin: 5px 5px  ;
          padding: 5px 10px;
          background-color: rgb(255, 255, 255);
          &:hover {
            background-color: rgb(59, 232, 255);
          }
        }
      }
    }
    .words {
      width: 100%;
      height: 300px;
      background-color: rgb(185, 235, 255);
      position: relative;
      .words-title {
        width: 100%;
        height: 40px;
        background-color: #fff;
      }
      .words-part {
        position:absolute;
        left: 0;
        width: 50%;
        height: 300px;
        background-color: rgb(255, 198, 198);
      }
      .words-sense {
        position:absolute;
        right: 0;
        width: 50%;
        height: 300px;
        background-color: rgb(198, 255, 233);
      }
    }
  }
}
</style>
