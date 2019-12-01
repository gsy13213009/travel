<template>
  <div class='search'>
    <input class='search-input' type='text' placeHolder="输入城市名字"/>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .search
    height: .7rem
    background: $bgColor
    padding: .1rem
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      text-align: center
      // 需要加上这个，否则padding不生效
      box-sizing: border-box
      padding: .1rem
</style>
