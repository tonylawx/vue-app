<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import header from './components/header/header.vue';
    export default {
        components: {
            'v-header': header
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import './common/sass/mixin';
    .tab {
      width: 100%;
      display: flex;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7,17,27,0.1));
      > .tab-item {
        flex: 1;
        text-align: center;
      }
    }

</style>
