<template>
  <div>
    <div class="nav">
      <Nav/>
    </div>

    <div class="nuxt">
      <nuxt/>
    </div>

    <!-- <div class="foot">
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </div> -->
  </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>
<style scoped>
template {
  position: relative;
  height: 100%;
  width: 100%;
}
.nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
}
.nuxt {
  height: 100%;
  width: 100%; 
}
html {
  height: 100%;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.layout-footer-center {
  text-align: center;
}
</style>
