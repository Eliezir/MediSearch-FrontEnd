import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Medicines from '@/pages/medicines-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/medicines',
    name: 'Medicines',
    component: Medicines
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router