<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" class="wrapper">
        <div class="icon" v-for="item of page">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 前8个放在page[0]里面
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点哈哈哈哈哈哈哈"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          desc: "热门景点"
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons
    overflow: hidden
    padding-bottom: 50%
    height: 0
    .icon
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
