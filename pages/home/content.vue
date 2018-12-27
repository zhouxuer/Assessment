<template>
  <div>
    <div class="faceIdentify">
      <h4>图片特效</h4>
      <Row
        class="code-row-bg"
        type="flex"
        justify="center"
      >
        <i-col span="8">
          <img 
            class="filter-img"
            src="assets\img\filter01.jpg"
          >
        </i-col>
        <i-col span="8">
          <img 
            class="filter-img"
            src="~/assets/img/filter02.jpg"
          >
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.filter-img {
  max-width: 100%;
}
</style>
