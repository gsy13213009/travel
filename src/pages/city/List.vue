<template>
  <div class='list'>
    <div class='area'>
      <div class='title border-topbottom'>A</div>
    </div>
    <div class='area'>
      <div class='title border-topbottom'>A</div>
    </div>
    <div class='area'>
      <div class='title border-topbottom'>A</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang='stylus' scoped>
  .border-topbottom
    &:before
      border-color: #777
    &:after
      border-color: #ccc
  .title
    line-height: .44rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem

</style>
