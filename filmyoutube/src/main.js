import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import lodash from 'lodash'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(Vuelidate, Uimini)

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    var config = {
      apiKey: 'AIzaSyBvO2XRE3NiFIp47b74ygtnjcRJ5Dd3Fdc',
      authDomain: 'films-d7557.firebaseapp.com',
      databaseURL: 'https://films-d7557.firebaseio.com',
      projectId: 'films-d7557',
      storageBucket: 'films-d7557.appspot.com',
      messagingSenderId: '323432055398'
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('loggedUser', user)
      }
    })
  }
}).$mount('#app')
