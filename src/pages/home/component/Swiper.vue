<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- 使用wrapper，避免图片把pagination撑没了 -->
      <swiper-slide v-for="item of list" :key="item.id" class="wrapper">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 三个箭头，表示样式渗透，修改所有在wrapper下的.swiper-pagination-bullet-active */
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  /* wrapper 可以吧div撑开，保证在图片没加载成功时已经占居应有的高度 */
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    background: grey
    .swiper-img
      width: 100%
</style>

