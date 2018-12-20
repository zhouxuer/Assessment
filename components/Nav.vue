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
  .ivu-menu-dark {
    height: 70px;
    line-height: 70px;
    background-color: #fff;
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
      color: rgb(136, 136, 136);
    }
    .ivu-menu-item {
      padding: 0 50px;
      color: rgb(136, 136, 136);
      #hover {
        background-color: rgb(40, 44, 66);
        color: rgb(255, 255, 255);
      }
    }
  }
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover,
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover {
  background-color: rgb(40, 44, 66);
  color: rgb(255, 255, 255);
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active {
  color: rgb(40, 44, 66);
  font-weight: bold;
}
</style>
