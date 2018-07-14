import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
