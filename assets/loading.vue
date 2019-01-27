<template>
  <Row class="loading">
    <i-col class="demo-spin-col" span="8">
      <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
    </i-col>
  </Row>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
    }
</script>
<style>
.loading {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
.demo-spin-col{
  height: 100%;
  width: 100%;
  /* height: 100px; */
  /* position: relative; */
  border: 1px solid rgba(255, 255, 255, 0.178);
}
.ivu-spin-fix {
  background-color: rgba(34, 34, 34, 0.349);
}
</style>