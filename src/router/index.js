import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Página Inicial',
    component: HomeView
  },

  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
