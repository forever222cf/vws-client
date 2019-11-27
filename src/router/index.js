import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk ([request].js) for this route
// which is lazy-loaded when the route is visited.
const lazyLoad = view => () => import(/* webpackChunkName: "[request]" */ `@/views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  {
    path: '/lucky-spin',
    name: 'lucky-spin',
    component: lazyLoad('LuckySpin')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
