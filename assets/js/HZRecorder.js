export function HZRecorder (stream, config) {
  config = config || {}
  config.sampleBits = config.sampleBits || 16 // 采样数位 8, 16
  config.sampleRate = config.sampleRate || 16000 // 采样率16khz

  let context = new (window.webkitAudioContext || window.AudioContext)()
  let audioInput = context.createMediaStreamSource(stream)
  let createScript = context.createScriptProcessor || context.createJavaScriptNode
  let recorder = createScript.apply(context, [4096, 1, 1])

  let audioData = {
    size: 0, // 录音文件长度
    buffer: [], // 录音缓存
    inputSampleRate: context.sampleRate, // 输入采样率
    inputSampleBits: 16, // 输入采样数位 8, 16
    outputSampleRate: config.sampleRate, // 输出采样率
    oututSampleBits: config.sampleBits, // 输出采样数位 8, 16
    input: function (data) {
      this.buffer.push(new Float32Array(data))
      this.size += data.length
    },
    compress: function () { // 合并压缩
      // 合并
      let data = new Float32Array(this.size)
      let offset = 0
      for (let i = 0; i < this.buffer.length; i++) {
        data.set(this.buffer[i], offset)
        offset += this.buffer[i].length
      }
      // 压缩
      let compression = parseInt(this.inputSampleRate / this.outputSampleRate)
      let length = data.length / compression
      let result = new Float32Array(length)
      let index = 0
      let j = 0
      while (index < length) {
        result[index] = data[j]
        j += compression
        index++
      }
      return result
    },
    encodeWAV: function () {
      let sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate)
      let sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits)
      let bytes = this.compress()
      let dataLength = bytes.length * (sampleBits / 8)
      let buffer = new ArrayBuffer(44 + dataLength)
      let data = new DataView(buffer)

      let channelCount = 1 // 单声道
      let offset = 0

      let writeString = function (str) {
        for (let i = 0; i < str.length; i++) {
          data.setUint8(offset + i, str.charCodeAt(i))
        }
      }

      // 资源交换文件标识符
      writeString('RIFF')
      offset += 4
      // 下个地址开始到文件尾总字节数,即文件大小-8
      data.setUint32(offset, 36 + dataLength, true)
      offset += 4
      // WAV文件标志
      writeString('WAVE')
      offset += 4
      // 波形格式标志
      writeString('fmt ')
      offset += 4
      // 过滤字节,一般为 0x10 = 16
      data.setUint32(offset, 16, true)
      offset += 4
      // 格式类别 (PCM形式采样数据)
      data.setUint16(offset, 1, true)
      offset += 2
      // 通道数
      data.setUint16(offset, channelCount, true)
      offset += 2
      // 采样率,每秒样本数,表示每个通道的播放速度
      data.setUint32(offset, sampleRate, true)
      offset += 4
      // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
      data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true)
      offset += 4
      // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
      data.setUint16(offset, channelCount * (sampleBits / 8), true)
      offset += 2
      // 每样本数据位数
      data.setUint16(offset, sampleBits, true)
      offset += 2
      // 数据标识符
      writeString('data')
      offset += 4
      // 采样数据总数,即数据总大小-44
      data.setUint32(offset, dataLength, true)
      offset += 4
      // 写入采样数据
      if (sampleBits === 8) {
        for (let i = 0; i < bytes.length; i++, offset++) {
          let s = Math.max(-1, Math.min(1, bytes[i]))
          let val = s < 0 ? s * 0x8000 : s * 0x7FFF
          val = parseInt(255 / (65535 / (val + 32768)))
          data.setInt8(offset, val, true)
        }
      } else {
        for (let i = 0; i < bytes.length; i++, offset += 2) {
          let s = Math.max(-1, Math.min(1, bytes[i]))
          data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
        }
      }

      return new Blob([data], {
        type: 'audio/wav'
      })
    }
  }
  // 开始录音
  this.start = function () {
    audioInput.connect(recorder)
    recorder.connect(context.destination)
  }

  // 停止
  this.stop = function () {
    recorder.disconnect()
  }

  // 获取音频文件
  this.getBlob = function () {
    this.stop()
    return audioData.encodeWAV()
  }

  // 回放
  this.play = function (audio) {
    let blob = this.getBlob()
    // saveAs(blob, "F:/3.wav");
    audio.src = window.URL.createObjectURL(blob())
  }

  // 上传
  this.upload = function () {
    return this.getBlob()
  }

  // 音频采集
  recorder.onaudioprocess = function (e) {
    audioData.input(e.inputBuffer.getChannelData(0))
    // record(e.inputBuffer.getChannelData(0));
  }
}
