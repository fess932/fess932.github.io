import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'

import router from './router'

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
