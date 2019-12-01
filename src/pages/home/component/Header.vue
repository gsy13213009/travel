<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
/* 使用stylus写style文件，设置scoped使style仅在这个文件里生效, 不影响到其他组件 */
<style lang="stylus" scoped>
  /* @代表src目录，但是在style文件里使用时需要加~号 */
  @import '~styles/varibles.styl'
  /* 1rem = html font-size = 50px, font-size在reset.css里面设置的 */
  /* 设计图给的是2x图，比如86px，因此86/2rem = 86/100，所以2x图下的86px就是.86rem */
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      color: grey
      background: #fff
      border-radius: .1rem
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      font-size: .24rem
      color: white

</style>
