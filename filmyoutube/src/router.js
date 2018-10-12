import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Task from '@/components/Task'

import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
})
