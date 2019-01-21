<template>
  <div class="ssss">
    <div>
        <audio autoplay></audio>
        <input onclick="startRecording()" type="button" value="录音" />
        <input onclick="stopRecording()" type="button" value="停止" />
        <input onclick="playRecording()" type="button" value="播放" />
        <input onclick="uploadAudio()" type="button" value="提交" />
    </div>
  </div>
</template>
<script>
import HZRecorder from '~/assets/js/HZRecorder.js'
export default {
  data () {
    return {
      recorder: null,
      audio: document.querySelector('audio')
    }
  },
  mounted () {
    this.$nextTick(() => {
      try {
        // 检查是否能够调用麦克风
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
        window.URL = window.URL || window.webkitURL
        audio_context = new AudioContext
      console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'))
      } catch (e) {
        alert('No web audio support in this browser!')
      }
      navigator.getUserMedia({ audio: true }, function (stream) {
        this.recorder = new HZRecorder(stream)
        console.log('初始化完成')
      }, function(e) {
        console.log('No live audio input: ' + e)
      })
    })
  },
  methods: {
    startRecording () {
      HZRecorder.get((rec) => {
        this.recorder = rec
        this.recorder.start()
      })
    },
    stopRecording () {
      this.recorder.stop()
    },
    playRecording () {
      this.recorder.play(this.audio)
    },
    uploadAudio () {
      this.recorder.upload('Handler1.ashx', function (state, e) {
        switch (state) {
          case 'uploading':
            // var percentComplete = Math.round(e.loaded * 100 / e.total) + '%';
            break
          case 'ok':
            // alert(e.target.responseText);
            alert('上传成功')
            break
          case 'error':
            alert('上传失败')
            break
          case 'cancel':
            alert('上传被取消')
            break
        }
      })
    }
  }
}
</script>
<style>
.ssss {
  margin-top: 300px
}
</style>