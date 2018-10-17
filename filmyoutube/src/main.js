import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'
import App from './App.vue'
import lodash from 'lodash'

import router from './router'
import store from './store'

Vue.use(Vuelidate, Uimini)

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
