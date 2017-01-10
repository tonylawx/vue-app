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
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div v-if="seller.supports" class="supports-count">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class= "icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
export default {
      props: {
        seller: {
          type: Object
        }
  },
  created() {
        // 定义classMap来切换图标
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" >
  @import "../../common/sass/mixin";
.header {
  position: relative;
  color:#fff ;
  background: rgba(7,17,27,0.5);
  .content-wrapper{
    position: relative;
    padding:24px 12px 18px 24px;
    // 消除字符产生缝隙
    font-size: 0;
    // 头像
    .avatar{
      display: inline-block;
      vertical-align: top;
      img{
        border-radius: 2px;
      }
    }
    // 内容
    .content{
      display: inline-block;
      font-size: 14px;
      margin-left: 16px;
      vertical-align: top;
      margin-bottom: 10px;
      .title{
        margin: 2px 0 8px 0;
        .brand{
          vertical-align: top;
          display: inline-block;
          width: 30px;
          height: 18px;
          @include bg-img("brand");
          background-size:30px 18px;
          background-repeat:no-repeat;
        }
        .name{
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
        }
      }
      .description{
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      // 配送内容
      .supports{
        .icon{
          vertical-align: top;
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            @include bg-img("decrease_1")
          }
          &.discount{
            @include bg-img("discount_1")
          }
          &.guarantee{
            @include bg-img("guarantee_1")
          }
          &.invoice{
            @include bg-img("invoice_1")
          }
          &.special{
            @include bg-img("special_1")
          }
        }
        .text{
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
    // 右侧数量显示
    .supports-count{
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding:0 8px ;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0,0,0,0.2);
      text-align: center;
      .count{
        vertical-align: top;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right{
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }
  .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding:0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0;
    background: rgba(7,17,27,0.2);
    .bulletin-title{
      display: inline-block;
      vertical-align: top;
      margin-top: 7px;
      width: 22px;
      height: 12px;
      @include bg-img('bulletin');
      background-size:22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text{
      vertical-align: top;
      font-size: 10px;
      margin: 0 4px;
    }
    .icon-keyboard_arrow_right{
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:-1;
    filter:blur(10px)
  }
}


</style>
