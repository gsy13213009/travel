<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="item" v-for="item of list">
      <img :src="item.imgUrl" class="item-img"/>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      list: Array
    },
    data () {
      return {}
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
