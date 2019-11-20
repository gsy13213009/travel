// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入reset.css避免多种浏览器上显示效果不一样
import 'styles/reset.css'
// 引入border.css，避免移动端1像素问题
import 'styles/border.css'
// 使用click会延迟300ms，需要引入fastclick解决次问题
import fastClick from 'fastclick'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 加上它后移动端300ms的问题就解决了
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
