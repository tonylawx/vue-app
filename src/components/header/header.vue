<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟到达
          </div>
          <div v-if="seller.supports" class="supports">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].descirtion}}</span>
          </div>
        </div>
      </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
      props: {
        seller: {
          type: Object
        }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" >
.header {
  color:#fff ;
  background-color: #000;
  .content-wrapper{
    padding:24px 12px 18px 24px;
    //消除字符产生缝隙
    font-size: 0;
    .avatar{
      display: inline-block;
    }
    .content{
      display: inline-block;
      font-size: 14px;
    }
  }
}


</style>
