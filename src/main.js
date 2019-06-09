import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'   
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@fortawesome/free-solid-svg-icons/index'
import 'font-awesome/css/font-awesome.css'


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
