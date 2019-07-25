import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Contato',
      name: 'contato',
      component: () => import('./views/Contato/index.vue') 
    },
    {
      path: '/Profissional',
      name: 'profissional',
      component: () => import('./views/Professional/index.vue')
    }    
  ]
})
