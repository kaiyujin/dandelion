import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Input from '@/components/Input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
