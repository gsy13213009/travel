<template>
  <div>
    <div class="header">
      城市选择
      <router-link to="/">
      <div class="iconfont back-icon">&#xe624;返回</div>
      </router-link>
    </div>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CitySearch from './Search.vue'
import CityList from './List.vue'
export default {
  name: 'City',
  components: {
    CitySearch,
    CityList
  }

}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: white
    .back-icon
      position: absolute
      top: 0
      left: .1rem
      font-size: .3rem
      color: white
</style>
