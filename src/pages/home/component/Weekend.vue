<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="item" v-for="item of recommendlist">
      <img :src="item.url" class="item-img"/>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendlist: [
        {
          url: "http://www.zgjyjn.net/uploadfile/2019/0712/20190712085727940.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生哈哈哈哈哈哈哈哈哈付大或或接口：接口：",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2019/0712/20190712085727940.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2019/0712/20190712085727940.jpg",
          title: "大连森林动物园",
          subtitle: "与动物嬉戏，共享和谐人生",
          price: "￥65"
        },
        {
          url: "http://www.zgjyjn.net/uploadfile/2019/0712/20190712085727940.jpg",
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
    height: 3rem
    overflow: hidden
    .item-img
      height: 1.7rem
      padding: .1rem 0
      width: 100%
    .item-title
      height: .5rem
      padding: 0 .1rem
      elipsis()
    .item-desc
      padding: 0 .1rem
      color: grey
      elipsis()
</style>
