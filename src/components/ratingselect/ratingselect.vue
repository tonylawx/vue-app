<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span>{{desc.all}}</span>
      <span>{{desc.positive}}</span>
      <span>{{desc.ngeative}}</span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="text">只看内容的评价</span>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  const POSITIVE = 0;
  const NGEATIVE = 1;
  const ALL = 2;
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
