import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from './components/HelloWorld.vue'
import Table from './components/Table.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/table',
    component: Table
  }]
})

export default router
