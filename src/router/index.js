import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  // {
  //   path: '/index',
  //   component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  // },
  // {
  //   path: '/order',
  //   component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
  // },
  // {
  //   path: '/me',
  //   component: () => import(/* webpackChunkName: "me" */ '../views/me.vue')
  // },  
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/aftersale',
    component: () => import(/* webpackChunkName: "aftersale" */ '../views/Aftersale.vue')
  },
  {
    path: '/store',
    component: () => import(/* webpackChunkName: "store" */ '../views/store.vue')
  },
  {
    path: '/signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/signin.vue')
  },
  {
    path: '/setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting.vue')
  },
  
  {
    path: '/credit',
    component: () => import(/* webpackChunkName: "credit" */ '../views/credit.vue')
  },
  {
    path: '/address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address.vue')
  },
  {
    path: '/authentication',
    component: () => import(/* webpackChunkName: "authentication" */ '../views/authentication.vue')
  },
  {
    path: '/main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main.vue')
  },
  {
    path: '/addAddress',
    component: () => import(/* webpackChunkName: "addAddress" */ '../views/addAddress.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router
