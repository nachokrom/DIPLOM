import { createRouter, createWebHistory } from 'vue-router'
import HomePage  from '@/pages/HomePage.vue'
import MoviesPage  from '@/pages/MoviesPage.vue'
import SerialsPage from '@/pages/SerialsPage.vue'
import NewsPage  from '@/pages/NewsPage.vue'
import ProfilePage  from '@/pages/ProfilePage.vue'
import FavoritePage  from '@/pages/FavoritePage.vue'

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
