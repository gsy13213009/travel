<template>
  <div class="wrapper">
    <swiper :options="swiperoption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          url: 'http://www.zgjyjn.net/uploadfile/2019/0712/20190712085727940.jpg'
        },
        {
          id: '0002',
          url: 'http://www.zgjyjn.net/uploadfile/2019/0712/20190712090347713.jpg'
        },
      ]
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

