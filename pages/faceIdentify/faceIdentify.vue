<template>
  <div class="aaa">
    <div class="bg">
      <bg/>
    </div>
    <Row
      class="code-row-bg"
      type="flex"
      justify="center"
    >
      <i-col
        span="8"
        class="ccc"
      >
        <div
          v-for="item in uploadList"
          :key="item.index"
          class="demo-upload-list"
        >
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info>
              上传图片开始制作
            </Progress>
          </template>
        </div>
        <Upload
          ref="upload"
          :show-upload-list="true"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="width: 58px;height:58px;line-height: 58px;">
          </div>
        </Upload>
        <!-- <Modal title="View Image" v-model="visible">
          <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
        </Modal> -->
      </i-col>
      <!-- <i-col
        span="8"
        class="ccc"
      >
        <img 
          class="filter-img"
          src="~/assets/img/filter02.jpg"
        >
        <span class="filter-span">
          <a>风景滤镜</a>
        </span>
      </i-col> -->
    </Row>
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
      defaultList: [
        // {
        //   'name': 'a42bdcc1178e62b4694c830f028db5c0',
        //   'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        // }
      ],
      imgName: '',
      visible: false,
      uploadList: [],
      base64_code: ''
    }
  },
  methods: {
    // handleView (name) {
    //   this.imgName = name
    //   this.visible = true
    // },
    // handleRemove (file) {
    //   const fileList = this.$refs.upload.fileList
    //   this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    // },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      })
    }
    // handleBeforeUpload () {
    //   const check = this.uploadList.length < 5
    //   if (!check) {
    //     this.$Notice.warning({
    //       title: 'Up to five pictures can be uploaded.'
    //     })
    //   }
    //   return check
    // }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  }
}
</script>
<style scoped lang="less">
.bg {
  position: fixed;
  z-index: -1000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.code-row-bg {
  margin-top: 100px;
}
.demo-upload-list{
  display: inline-block;
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  margin-right: 4px;
}
.demo-upload-list img{
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover{
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
  display: block;
}
.demo-upload-list-cover i{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
