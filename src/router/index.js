import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogInView.vue'
import SignIn from '../views/SignInView.vue'
import TagIn from '../views/TagView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path : '/login',
    name : 'LogIn',
    component : LogIn
  },
  {
    path : '/signin',
    name : 'SignIn',
    component : SignIn
  },
  {
    path : '/tagin',
    name : 'TagIn',
    component : TagIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
