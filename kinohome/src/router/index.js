import { createRouter, createWebHistory } from 'vue-router'
import HomePage  from '@/pages/HomePage.vue'
import MoviesPage  from '@/pages/MoviesPage.vue'
import SerialsPage from '@/pages/SerialsPage.vue'
import MultPage  from '@/pages/MultPage.vue'
import ProfilePage  from '@/pages/ProfilePage.vue'
import FavoritePage  from '@/pages/FavoritePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesPage
    },
    {
      path: '/serials',
      name: 'serials',
      component: SerialsPage
    },
    {
      path: '/cartoons',
      name: 'cartoons',
      component: MultPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoritePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterPage
    },
  ]
})

export default router

