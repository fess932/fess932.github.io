import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import lodash from 'lodash'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
