<template>
  <div id="app">
    <vue-particles
      :particleOpacity='0.7'
      color="#fff"
      :particlesNumber='60'
      shapeType='circle'
      :particleSize='4'
      linesColor='#fff'
      :linesWidth='1'
      :lineLinked='true'
      :lineOpacity='0.4'
      :linesDistance='150'
      :moveSpeed='2'
      :hoverEffect='true'
      hoverMode='grab'
      :clickEffect='true'
      clickMode='push'
      class='lizi'
    >1
    </vue-particles>
    <router-view>1</router-view>
  </div>
</template>
<script>
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)  
export default {}
</script>
<style scoped lang='less'>
</style>
