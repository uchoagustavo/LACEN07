import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import LoginView from '@/views/LoginView.vue'
import NoticiaDetalhe from '@/views/NoticiaDetalhe.vue'
import FormularioView from '@/views/FormularioView.vue'

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

  {
    path: '/noticias/:id',
    name: 'noticia-detalhe',
    component: NoticiaDetalhe,
    props: true
  },

  {
    path: '/formulario',
    name: 'formulario',
    component: FormularioView
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
