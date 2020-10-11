import Vue from 'vue'
import VueRouter from 'vue-router'
import Class from '../views/class.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/me.vue')
  },
  {
    path: '/info',
    component: () => import(/* webpackChunkName: "info" */ '../views/info.vue')
  },
  {
    path: '/sort',
    component: () => import(/* webpackChunkName: "sort" */ '../views/sort.vue')
  },
  {
    path: '/class',
    component: Class
  }

]

const router = new VueRouter({
  routes
})

export default router
