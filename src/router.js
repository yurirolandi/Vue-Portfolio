import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: './components/Header',
      name: 'header',
      component: () => import('./components/Header/index.vue')
    },
    {
      path: './components/About',
      name: 'about',
      component: () => import('./components/About/index.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
  ]
})
