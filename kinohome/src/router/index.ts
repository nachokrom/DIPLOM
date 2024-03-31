import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@/pages/HomePage'
import { MoviesPage } from '@/pages/MoviesPage'
import { SerialsPage } from '@/pages/SerialsPage'
import { NewsPage } from '@/pages/NewsPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { FavoritePage } from '@/pages/FavoritePage'

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
      path: '/news',
      name: 'news',
      component: NewsPage
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
  ]
})

export default router
