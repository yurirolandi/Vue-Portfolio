import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contato from './components/Contato/index.vue'
import Profissional from './components/Professional/index.vue'


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
      component: Contato 
    },
    {
      path: '/Profissional',
      name: 'profissional',
      component: Profissional
    }
  ]
})
