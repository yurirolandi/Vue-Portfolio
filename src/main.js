import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'   
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import  './plugins/SmoothScroll'
import './plugins/axios.js'
import './registerServiceWorker'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import '@fortawesome/free-solid-svg-icons/index'
import 'font-awesome/css/font-awesome.css'


Vue.use(BootstrapVue)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
