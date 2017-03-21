<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller" ref="food"></router-view>
    </keep-alive>
  </div>
</template>
<script>
    import header from './components/header/header.vue';
    import {urlParse} from 'common/js/util';
    const ERR_OK = 0;
    export default {
        // header数据
        data () {
          return {
            seller: {
              id: (() => {
                let queryParam = urlParse();
                return queryParam.id;
             })()
           }
          };
        },
        created() {
          this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
          // .body返回的才是Object对象
             let data = response.data.data;
            // 判断errno是否为0
             if (response.data.errno === ERR_OK) {
               this.seller = Object.assign({}, this.seller, data);
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
    @include border-1px(rgba(7, 17, 27, 0.1));
    > .tab-item {
      flex: 1;
      text-align: center;
      & > a{
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active{
          border-top: 1px solid red;
        }
      }
    }
  }
</style>
