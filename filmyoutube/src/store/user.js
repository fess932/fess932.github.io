import firebase from 'firebase/app'

export default {
  state: {
    user: null
  },
  mutations: {},
  actions: {
    async regiserUser ({commit}, {email, password}) {
      const user = await firebase.auth().createUserWithEmailAndPassword(email.password)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    checkUser (state) {
      return state.user !== null
    }
  }
}