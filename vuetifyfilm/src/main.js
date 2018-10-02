import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as fb from 'firebase/app'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyDPof-Q_nAVPjt-QU9z38xOcEP05JXpfPM',
      authDomain: 'list-c582d.firebaseapp.com',
      databaseURL: 'https://list-c582d.firebaseio.com',
      projectId: 'list-c582d',
      storageBucket: 'list-c582d.appspot.com',
      messagingSenderId: '644236981443'
    }
    fb.initializeApp(config)
  },
  render: h => h(App)
}).$mount('#app')
