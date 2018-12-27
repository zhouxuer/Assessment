<template>
  <div class="layout">
    <Menu
      mode="horizontal"
      theme="dark"
      active-name="1"
    >
      <span class="layout-logo">1</span>
      <div class="layout-nav">
        <template v-for="(item) in config">
          <Menu-Item
            v-if="!item.children"
            :key="item.name"
            :to="item.to"
            :name="item.name"
          >
            {{ item.title }}
          </Menu-Item>
          <Submenu
            v-else
            :key="item.name"
            :to="item.title"
            :name="item.name"
          >
            <template slot="title">
              {{ item.title }}
            </template>
            <Menu-Item
              v-for="(item) in item.children"
              :key="item.name"
              :to="item.to"
              :name="item.name"
            >
              {{ item.title }}
            </Menu-Item>
          </Submenu>
        </template>
      </div>
    </Menu>
  </div>
</template>
<script>
import config from '~/assets/js/config.js'
export default {
  data() {
    return {
      theme1: 'light',
      config: config.navData
    }
  }
}
</script>
<style scoped lang="less">
.layout {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  .ivu-menu-dark {
    height: 70px;
    line-height: 70px;
    border-bottom: 0.5px solid rgba(230, 230, 230, 0.801);
    background-color: rgba(255, 255, 255, 0);
    &:hover {
      background-color: rgba(75, 75, 75, 0.246);
    }
  }
  .layout-logo {
    width: 100px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 50px;
  }
  .layout-nav {
    width: 800px;
    margin: 0 auto;
    .ivu-menu-submenu {
      padding: 0 50px;
    }
    .ivu-menu-item {
      padding: 0 50px;
    }
  }
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
  background-color: rgba(190, 190, 190, 0.5);
  color: rgb(98, 98, 98);
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active {
  color: rgb(255, 255, 255);
  font-weight: bold;
}
</style>
