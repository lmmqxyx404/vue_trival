import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from './components/Vuex.vue'
import Welcome from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import TreeData from './components/TreeData.vue'
import Select from './components/Select.vue'
import Form from './components/Form.vue'
import Root from './components/Root.vue'
import Grid from './components/Grid.vue'
import Modal from './components/Modal.vue'
import TableComplex from './components/TableComplex.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/vuex'
  }, {
    path: '/vuex',
    component: Vuex
  }, {
    path: '/welcome',
    component: Welcome
  }, {
    path: '/table',
    component: Table
  }, {
    path: '/treedata',
    component: TreeData
  }, {
    path: '/select',
    component: Select
  }, {
    path: '/form',
    component: Form
  }, {
    path: '/root',
    component: Root
  }, {
    path: '/grid',
    component: Grid
  }, {
    path: '/modal',
    component: Modal
  }, {
    path: '/tablecomplex',
    component: TableComplex
  }]
})

export default router
