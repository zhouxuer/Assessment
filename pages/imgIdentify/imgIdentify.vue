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
          <Row class="show">
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="noun">
                <h2 class="noun-title">专有名词</h2>
              </div>
            </i-col>
            <i-col :xs="0" :sm="2" :md="2" :lg="1">.</i-col>
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="synonym">
                <h2 class="synonym-title">同义词</h2>
              </div>
            </i-col>
          </Row>
          <Row class="show">
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="intentions">
                <h2 class="intentions-title">意图成分</h2>
                <div>
                  <h2 class="intentions-title">意图</h2>
                  <div
                    v-show="intentionsVal"
                    v-for="item in intentionsArr"
                    :key="item.id"
                  ><span v-if="item.id == intentionsVal">{{item.value}}</span></div>
                </div>
                <div>
                  <h2 class="intentions-title">成分</h2>
                  <div
                    v-show="compositionVal.length"
                    v-for="item in compositionVal"
                    :key="item.com_word"
                  >
                  <span v-for="aaa in compositionArr" :key="aaa.id" v-show="aaa.id == item.com_type">
                    <p>{{aaa.value}} {{item.com_word}}</p>
                    </span>
                  </div>
                </div>
              </div>
            </i-col>
            <i-col :xs="0" :sm="2" :md="2" :lg="1">.</i-col>
            <i-col :xs="24" :sm="11" :md="11" :lg="11.5">
              <div class="emotional">
                <h2 class="emotional-title">情感分析</h2>
                <div v-show="emotionalVal" v-for="item in emotionalArr" :key="item.id">
                  <Progress v-show="item.id == emotionalVal" :percent="item.value" :stroke-width="20">
                    <Icon type="checkmark-circled"></Icon>
                    <span>成功</span>
                  </Progress>
                </div>
              </div>
            </i-col>
          </Row>
          <div class="show">
            <div class="chat">
              <div>
                <Poptip word-wrap content="Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.">
                  <Button>Long Content</Button>
                </Poptip>
              </div>
              <div class="chat-input">
                <Input
                  v-model="value3"
                  type="textarea"
                  :rows="1"
                  placeholder="Enter something..."
                  class="chat-text"
                />
                <Button class="translate-btn" type="primary" @click="chat">发送聊天</Button>
              </div>
            </div>
          </div>
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
      intentionsArr: [
        {
          id: 0,
          value: '未知'
        },
        {
          id: 1,
          value: '天气'
        },
        {
          id: 2,
          value: '音乐'
        },
        {
          id: 3,
          value: '股票'
        },
        {
          id: 4,
          value: '新闻'
        }
      ],
      intentionsVal: null,
      compositionArr: [
        {
          id: 0,
          value: '未知'
        },
        {
          id: 1,
          value: '歌词'
        },
        {
          id: 2,
          value: '下载地址'
        },
        {
          id: 3,
          value: '乐器'
        },
        {
          id: 4,
          value: '歌曲'
        },
        {
          id: 5,
          value: '人名'
        },
        {
          id: 6,
          value: '时间'
        },
        {
          id: 7,
          value: '地点'
        },
        {
          id: 8,
          value: '风格'
        },
        {
          id: 9,
          value: '数字'
        },
        {
          id: 10,
          value: '视频'
        },
        {
          id: 11,
          value: '民族'
        },
        {
          id: 12,
          value: '专辑'
        },
        {
          id: 13,
          value: '序数词'
        },
        {
          id: 14,
          value: '综艺'
        },
        {
          id: 15,
          value: '乐队'
        },
        {
          id: 16,
          value: '景点'
        },
        {
          id: 17,
          value: '电影'
        },
        {
          id: 18,
          value: '电视剧'
        },
        {
          id: 19,
          value: '百科'
        },
        {
          id: 34,
          value: '股票名称'
        },
        {
          id: 35,
          value: '股票代码'
        },
        {
          id: 36,
          value: '指数'
        },
        {
          id: 37,
          value: '价格'
        },
        {
          id: 38,
          value: '行情'
        },
        {
          id: 40,
          value: '山'
        },
        {
          id: 41,
          value: '湖'
        },
        {
          id: 42,
          value: '是否'
        },
        {
          id: 43,
          value: '餐馆'
        },
        {
          id: 44,
          value: '菜名'
        },
        {
          id: 45,
          value: '儿歌'
        },
        {
          id: 46,
          value: '故事'
        },
        {
          id: 47,
          value: '相声'
        },
        {
          id: 48,
          value: '评书'
        },
        {
          id: 49,
          value: '有声内容'
        },
        {
          id: 128,
          value: '类别词'
        },
        {
          id: 129,
          value: '关系词'
        },
        {
          id: 130,
          value: '省略词'
        }
      ],
      compositionVal: [],
      emotionalArr: [
        {
          id: '-1',
          value: 20
        },
        {
          id: '0',
          value: 50
        },
        {
          id: '1',
          value: 80
        }
      ],
      emotionalVal: null,
      translateType: 0,
      value1: '',
      value2: '',
      value3: '',
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
      this.intentions()
      this.emotional()
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
    },
    intentions () {
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
      axios.post('/fcgi-bin/nlp/nlp_wordcom', Qs.stringify(paramter))
        .then(res => {
          console.log(res.data.data.com_tokens)
          this.intentionsVal = res.data.data.intent
          this.compositionVal = res.data.data.com_tokens
        }).catch(err => {
          console.log(err)
        })
    },
    emotional () {
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
      axios.post('/fcgi-bin/nlp/nlp_textpolar', Qs.stringify(paramter))
        .then(res => {
          console.log(res.data.data.polar)
          this.emotionalVal = res.data.data.polar
        }).catch(err => {
          console.log(err)
        })
    },
    chat () {
      let params = {
        app_id: this.appId,
        time_stamp: config.timeStamp,
        nonce_str: config.nonceStr,
        session: config.nonceStr,
        question: this.value3
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
      axios.post('/fcgi-bin/nlp/nlp_textchat', Qs.stringify(paramter))
        .then(res => {
          console.log(res.data.data.answer)
          // this.emotionalVal = res.data.data.polar
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
    // margin-bottom: 20px;
    .input-text {
      width: 85%;
    }
  }
  .show {
    margin-top: 30px;
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
    .noun {
      width: 100%;
      height: 300px;
      background-color: rgb(253, 244, 193);
    }
    .synonym {
      width: 100%;
      height: 300px;
      background-color: rgb(253, 244, 193);
    }
    .intentions {
      width: 100%;
      height: 300px;
      background-color: rgb(253, 244, 193);
    }
    .emotional {
      width: 100%;
      height: 300px;
      background-color: rgb(253, 244, 193);
    }
    .chat {
      width: 100%;
      height: 300px;
      background-color: rgb(253, 244, 193);
      text-align: center;
      position: relative;
      .chat-input {
        position: absolute;
        bottom: 0;
        width: 100%;
        .chat-text {
          width: 80%;
        }
      }
    }
  }
}
</style>
