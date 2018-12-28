<template>
  <div class="aaa">
    <div class="bg">
      <bg/>
    </div>
    <Input v-model="value1" type="textarea" :rows="4" placeholder="Enter something..." class="input" />
    <Button type="primary">翻译文本</Button>
    <Input v-model="value2" type="textarea" :rows="4" placeholder="Enter something..." class="input" />
  </div>
</template>
<script>
import bg from '~/assets/bg.vue'
export default {
  components: {
    bg
  },
  data () {
    return {
      value1: '',
      value2: ''
      // time:
      // time_stamp: System.currentTimeMillis() / 1000 + ''
    }
  },
  mounted () {
    // this.queryData()
    console.log(Math.round(new Date().getTime() / 1000).toString())
  },
  methods: {
    // timeStamp () {
    //   time_stamp: System.currentTimeMillis() / 1000 + ''
    // }
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
