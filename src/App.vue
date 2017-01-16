<template>
  <div>
    <v-header :seller="seller"></v-header>
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

    const ERR_OK = 0;
    export default {
        // header数据
        data () {
           return {
            seller: {}
           };
        },
        created() {
          this.$http.get('/api/seller').then((response) => {
          // .body返回的才是Object对象
            response = response.body;
            // 判断errno是否为0
            if (response.errno === ERR_OK) {
              this.seller = response.data;
            }
          });
        },
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
