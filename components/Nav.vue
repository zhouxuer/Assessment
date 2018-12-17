<template>
  <div class="layout">
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <div class="layout-logo">1</div>
      <div class="layout-nav">
        <Menu-Item name="1">
          <Icon type="ios-navigate">1</Icon>
          Item 1
        </Menu-Item>
        <Menu-Item name="2">
          <Icon type="ios-keypad">1</Icon>
          Item 2
        </Menu-Item>
        <MenuI-tem name="3">
          <Icon type="ios-analytics">1</Icon>
          Item 3
        </MenuI-tem>
        <Menu-Item name="4">
          <Icon type="ios-paper">1</Icon>
          Item 4
        </Menu-Item>
      </div>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme1: 'light'
    }
  }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
