<template>
  <div class="page">

    <div class="bg">
      <bgg/>
    </div>

    <Row class="row">
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
          <button class="btn-upload" @click="generate"><span>点击有惊喜</span></button>
        </div>

        <div class="show">
          <Row class="show-row" v-show="value2">
            <i-col :xs="24" :sm="11" :md="11" :lg="11" class="translate">
              <Dropdown trigger="custom" :visible="visible" class="translate-label-btn">
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
              <Input
                v-model="value2"
                type="textarea"
                :rows="4"
                class="translate-text" />
              <p>可以选择其它语言翻译试试看！</p>
            </i-col>
            <i-col :xs="0" :sm="2" :md="2" :lg="2">.</i-col>
            <i-col :xs="24" :sm="11" :md="11" :lg="11" class="emotional">
              <p class="emotional-title"><b>情感分析</b></p>
              <hr/>
              <div
                class="emotional-progress"
                v-show="value1"
                v-for="item in emotionalArr"
                :key="item.id"
              >
                <Progress
                  v-show="emotionalVal == item.polar"
                  :percent="item.value"
                  :stroke-width="20"
                >
                  <img :src="item.urlOne">
                </Progress>
                <div v-show="emotionalVal == item.polar" class="emotional-pet">
                  <img :src="item.urlTwo">
                  <p>{{item.text}}</p>
                  <Button class="translate-btn" type="primary" @click="onChat">{{item.btn}}</Button>
                </div>
              </div>
            </i-col>
          </Row>
        </div>
   
        <div class="show" v-show="chatShow">
          <div class="chat">
            <div class="chat-content">
              <div
                class="chat-content-row"
                v-show="chatContent"
                v-for="(item,index) in chatContent"
                :key="index"
              >
                <p class="chat-content-send">{{item.valueSend}}</p>
                <p class="chat-content-receive">{{item.valueReceive}}</p>
              </div>
            </div>
            <Button class="translate-btn close" type="primary" @click="close">关闭聊天</Button>
            <Button class="translate-btn remove" type="primary" @click="remove">清空聊天记录</Button>
            <div class="chat-input">
              <Input
                v-model="value3"
                :rows="1"
                placeholder="输入你想对我说的话吧！"
                class="chat-text"
                @keyup.enter.native="chat"
              />
              <Button class="translate-btn" type="primary" @click="chat">发送聊天</Button>
            </div>
          </div>
        </div>
        <div v-show="intentionsVal">
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
      <i-col :xs="0" :sm="2" :md="3" :lg="4">.</i-col>
    </Row>

  </div>
</template>
<script>
import bgg from '~/assets/bgg.vue'
import config from '~/assets/js/config.js'
import axios from 'axios'
import md5 from 'md5'
import Qs from 'Qs'
export default {
  components: {
    bgg
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
          id: 1,
          polar: '-1',
          value: 20,
          urlOne: require('~/static/img/text/sorry.png'),
          urlTwo: require('~/static/img/text/sorry.gif'),
          text: '不开心，那就和我聊聊天，我可是个开心果哦！',
          btn: '拯救不开心'
        },
        {
          id: 2,
          polar: '0',
          value: 50,
          urlOne: require('~/static/img/text/smile.png'),
          urlTwo: require('~/static/img/text/smile.gif'),
          text: '无聊无聊无聊，可以陪我聊聊天吗？',
          btn: '陪它聊天'
        },
        {
          id: 3,
          polar: '1',
          value: 80,
          urlOne: require('~/static/img/text/happy.png'),
          urlTwo: require('~/static/img/text/happy.gif'),
          text: '心情这么好，那就和我分享一下你的趣事吧！',
          btn: '分享快乐'
        }
      ],
      emotionalVal: null,
      translateType: 0,
      chatContent: [],
      chatShow: false,
      value1: '',
      value2: '',
      value3: '',
      appKey: '5YsLCOwtO5hcvx8e',
      appId: '2110940915',
      aaa: ''
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
      if (this.value1 !== '') {
        this.emotionalVal = null
        this.translate()
        this.intentions()
        this.emotional()
      } else {
        this.$Message.error('请先输入内容在尝试哦！')
      }
    },
    onChat () {
      this.chatShow = true
    },
    close () {
      this.chatShow = false
    },
    remove () {
      this.chatContent = []
    },
    // 翻译
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
          if (res.data.ret === 16390) {
            this.$Message.error('刷新页面在尝试！')
          } else {
            this.value2 = res.data.data.trans_text
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // 意图
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
          this.intentionsVal = res.data.data.intent
          this.compositionVal = res.data.data.com_tokens
        }).catch(err => {
          console.log(err)
        })
    },
    // 情感
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
          this.emotionalVal = res.data.data.polar
          // console.log(this.emotionalVal)
        }).catch(err => {
          console.log(err)
        })
    },
    // 聊天
    chat () {
      if (this.value3 !== '') {
        this.chatContent.push({
          valueSend: this.value3
        })
      }
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
          let answer = res.data.data.answer
          if (answer !== '') {
            this.chatContent.push({
              valueReceive: answer
            })
          }
          this.value3 = ''
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped lang="less">
.page {
  .bg {
    position: fixed;
    z-index: -1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .row {
    margin: 0;
    padding: 0;
    .content {
      background-color: rgba(243, 218, 255, 0.329);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      margin-top: 120px;
      text-align: center;
      height: 800px;
      .input {
        display: flex;
        flex-direction: row;
        margin: 3% 3%;
        height: 12%;
        .input-text {
          width: 60%;
          margin: auto 0;
        }
        .btn-upload {
          height: 65%;
          width: 20%;
          margin: auto;
          border: none;
          display: block;
          text-align: center;
          cursor: pointer;
          outline: none;
          overflow: hidden;
          position: relative;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          background-color: #222;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
          span {
            position: relative;
            z-index: 1;
          }
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 490%;
            width: 140%;
            background:rgb(255, 181, 249);
            -webkit-transition: all .5s ease-in-out;
            transition: all .5s ease-in-out;
            -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
            transform: translateX(-98%) translateY(-25%) rotate(45deg);
          }
          &:hover:after {
            -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
            transform: translateX(-9%) translateY(-25%) rotate(45deg);
          }
        }
      }
      .show {
        margin: 0 3%;
        height: 35%;
        .show-row {
          height: 100%;
          margin: 0;
          padding: 0;
          .translate {
            text-align: left;
            height: 100%;
            background-color: rgba(185, 235, 255, 0.726);
            padding: 2% 2%;
            .translate-label-btn {
              display: inline-block;
              text-align: left;
              margin: auto;
              width: 40%;
              height: 30px;
              border-radius: 5%;
              background-color: #fff;
              .translate-label-text {
                line-height: 30px;
                color: #000;
                width: 100%;
                margin: 0 10%;
              }
              .translate-label-list {
                color: #000;
                display: inline-block;
                margin: 5px 5px  ;
                padding: 5px 10px;
                background-color: rgb(255, 255, 255);
                &:hover {
                  border-radius: 5%;
                  background-color: rgb(214, 250, 255);
                }
              }
            }
            .translate-btn {
              margin-left: 5%;
            }
            .translate-text {
              margin-top: 2%;
            }
          }
          .emotional {
            text-align: left;
            padding: 2% 2%;
            height: 100%;
            background-color: rgba(185, 235, 255, 0.726);
            .emotional-title {
              color: rgba(17, 17, 17, 0.726);
              font-size: 16px;
              // margin-bottom: 2%;
            }
            .emotional-progress {
              margin-top: 2%;
              .emotional-pet {
                position: relative;
                img {
                  margin-left: 10%;
                  max-width: 30%;
                }
                p {
                  position: absolute;
                  top: 20%;
                  left: 50%;
                }
                button {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                }
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
        .chat {
          width: 100%;
          height: 100%;
          margin-top: 3%;
          background-color: rgba(252, 222, 255, 0.623);
          text-align: center;
          position: relative;
          .chat-content {
            overflow: auto;
            width: 70%;
            height: 100%;
            margin: 15px auto 40px;
            .chat-content-row {}
            .chat-content-send {
              background-color: rgb(255, 172, 172);
            }
            .chat-content-receive {
              background-color: rgb(182, 253, 255);
            }
          }
          .close {
            position: absolute;
            top: 15px;
            right: 15px;
          }
          .remove {
            position: absolute;
            top: 60px;
            right: 15px;
          }
          .chat-input {
            position: absolute;
            bottom: 15px;
            width: 100%;
            .chat-text {
              width: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
