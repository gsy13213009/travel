<template>
  <div>
    <div class="title">热销推荐</div>
    <div class="item" v-for="item of recommendlist">
      <img :src="item.url" class="item-img"/>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.subtitle}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendlist: [
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生哈哈哈哈哈哈哈哈哈付大或或接口：接口：",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2014/0511/thumb_104_134_20140511105236409.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生",
          price: "￥65"
        }
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .title
    height: .7rem
    padding-left: .1rem
    line-height: .7rem
    background: grey
    color: white
  .item
    padding: .1rem
    height: 1.9rem
    overflow: hidden
    display: flex
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding .1rem
    .item-info
      flex: 1
      padding: .1rem
      // 加上min-width: 0，解决不显示...的问题
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        border-radius: .06rem
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
</style>
