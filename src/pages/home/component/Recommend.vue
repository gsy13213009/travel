<template>
  <div>
    <div class="title">热销推荐</div>
    <div class="item" v-for="data of list">
      <img :src="data.imgUrl" class="item-img"/>
      <div class="item-info">
        <p class="item-title">{{data.title}}</p>
        <p class="item-desc">{{data.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
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
