<template>
  <transition name="move">
    <div class="food" v-show="showFlag">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back">
            <i class="icon-arrow_lift" @click="hide"></i>
          </div>
          <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
              <span class="sell-count">月售{{food.sellCount}}</span>
              <span class="rating">好评率{{food.rating}}</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice"
                                                            class="old">￥{{food.oldPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type='text/ecmascript-6'>
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  .food {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
    &.move-enter-active, &.move-leave-active {
      transition: all .2s linear;
      transform: translate3d(0,0,0);
    }
    &.move-enter, &.move-leave-active {
      transform: translate3d(100%,0,0);
    }
    .food-content{
      .image-header{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .back{
          position: absolute;
          top: 10px;
          left: 0;
          .icon-arrow_lift{
            display: block;
            padding:10px;
            font-size: 20px;
            color: #fff;
          }
        }
      }
    }
    .content{
      padding: 18px;
      .title{
        line-height:14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color:rgb(7,17,27);
      }
    }
  }
</style>
