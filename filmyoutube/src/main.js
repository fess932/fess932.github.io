import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'

import router from './router'
import store from './store'

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
