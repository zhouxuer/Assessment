<template>
  <div class="sss">
    <bg/>
    <div class="aaa">
      <div class="bbb">11</div>
    </div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>
<script>
import bg from '~/assets/bg.vue'
export default {
  components: {
    bg
  }
}
</script>
<style scoped lang="less">
// .sss {
//   width: 1900px;
//   height: 800px;
//   background-color: rgb(32, 32, 32);
// }
.aaa {
  width: 1900px;
  height: 800px;
  background-color: rgb(34, 34, 34);
  .bbb {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
