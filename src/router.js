import Vue from 'vue'
import Router from 'vue-router'
import Visa from './views/Visa.vue'
window.EventBus = new Vue();
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/visa'
    },
    {
      path: '/visa',
      component:()=> import('./views/Visa.vue')
    },
    {
      path: '/passport',
      component: () => import('./views/Passport.vue')
    },
    {
      path: '/studentPass',
      component: () => import('./views/StudentPass.vue')
    },
    {
      path: '/workingPermit',
      component: () => import('./views/WorkingPermit.vue')
    },
  ]
})
