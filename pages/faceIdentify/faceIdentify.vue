<template>
  <div class="aaa">
    <Input v-model="value" :type="file"/>
    <Button type="primary" @click="sss">文本</Button>
    <Input v-model="value2" type="textarea" :rows="30" class="input" />
    <img :src="url"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      value2: '',
      url: ''
    }
  },
  methods: {
    sss () {
      let file = this.files[0]
      if (!/image\/\w+/.test(file.type)) {
        alert('请确保文件为图像类型')
        return false
      }
      let fileReader = new FileReader()
      fileReader.readAsDataURL(file.files[0])
      fileReader.onload = function () {
        let imgBase64Data = this.result
        this.value2 = imgBase64Data
        this.url = imgBase64Data
      }
    }
  }
}
</script>
<style scoped lang="less">
.aaa {
  width: 100%;
  margin-top: 200px;
  background-color: #f5ff;
  .bbb {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
