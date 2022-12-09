import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: '/add',
    component: function () {
      return import('../views/Add.vue')
    }
  },
  {
    path: '/add/payment/:category?',
    name: '/add/payment',
    component: function () {
      return import('../views/AddPayment.vue')
    }
  },
  {
    path: '/about',
    name: '/AboutPage',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '*',
    component: function () {
      return import('../views/Er404.page.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
