import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Packery from './views/Packery.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/packery',
      name: 'packery',
      component: Packery
    }
  ]
})
