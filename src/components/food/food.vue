<template>
  <transition name="move" >
    <div class="food" ref="food" v-show="showFlag">
      <div class="food-wrapper" >
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image">
            <div class="back">
              <i class="icon-arrow_lift" @click="hide"></i>
            </div>
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
            <div class="cartcontrol-warrper">
              <cartcontrol :food="food"></cartcontrol>
            </div>
            <transition name="fade">
              <div class="buy" v-show="!food.count || food.count===0" @click.stop.prevent="addFrist">加入购物车</div>
            </transition>
          </div>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <div class="title">商品信息</div>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect></ratingselect>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type='text/ecmascript-6'>
  import Vue from "vue";
  import BScroll from "better-scroll";
  import cartcontrol from '../../components/cartcontrol/cartcontrol';
  import split from '../../components/split/split';
  import ratingselect from '../../components/ratingselect/ratingselect';

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
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      },
      addFrist(event) {
        if (!event._constructed) {
          return;
        }
        this.$root.eventHub.$emit('cartAdd', event.target);
        Vue.set(this.food, 'count', 1);
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
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
      transform: translate3d(0, 0, 0);
    }
    &.move-enter, &.move-leave-active {
      transform: translate3d(100%, 0, 0);
    }
    .food-content {
      .image-header {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .back {
          position: absolute;
          top: 10px;
          left: 0;
          .icon-arrow_lift {
            display: block;
            padding: 10px;
            font-size: 20px;
            color: #fff;
          }
        }
      }
    }
    .content {
      padding: 18px;
      .title {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }
      .detail {
        margin-bottom: 18px;
        line-height: 10px;
        height: 10px;
        font-size: 0;
        .sell-cout, .rating {
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .sell-cout {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .cartcontrol-warrper {
        position: absolute;
        right: 12px;
        bottom: 12px;
      }
      .buy {
        position: absolute;
        right: 18px;
        bottom: 18px;
        z-index: 10;
        line-height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        font-size: 10px;
        border-radius: 12px;
        color: #fff;
        background: rgb(0, 160, 220);
        &.fade-enter-active, &.fade-leave-active {
          transition: all .1s;
          opacity: 1;
        }
        &.fade-enter, &.fade-leave-active {
          opacity: 0
        }
      }
    }
    .info {
      padding: 18px;
      .title {
        line-height: 14px;
        margin-bottom: 6px;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .text {
        color: rgb(77, 85, 93);
        line-height: 24px;
        padding: 0 8px;
        font-size: 12px;
        color: rgb(77, 85, 93);
      }
    }
  }
</style>
