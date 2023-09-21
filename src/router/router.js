import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import UserDetails from '../views/UsersDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/userDetails/:id',
    name: 'userDetails',
    component: UserDetails,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
