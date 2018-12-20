<template>
  <div>
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
.aaa {
  width: 200px;
  height: 200px;
  background-color: #f5ff;
  .bbb {
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
