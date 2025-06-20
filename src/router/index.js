import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import LoginView from '@/views/LoginView.vue'
import NoticiaDetalhe from '@/views/NoticiaDetalhe.vue'
import CadastroAmostras from '@/views/CadastroAmostrasView.vue'
import InstitucionalView from '@/views/InstitucionalView.vue'
import Profissionais from '@/views/Profissionais.vue'
import Competências from '@/views/Competências.vue'

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
    path: '/cadastro-amostras',
    name: 'cadastroAmostras',
    component: CadastroAmostras
  },

  {
    path: '/institucional',
    name: 'Institucional',
    component: InstitucionalView
  },

  {
    path: '/profissionais', 
    name: 'Profissionais', 
    component: Profissionais 
  },

  {
    path: '/competencias',
    name: 'Competências',
    component: Competências
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
