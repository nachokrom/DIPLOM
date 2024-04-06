import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
      component: ProfilePage,
      meta: {
        auth: true
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoritePage,
      meta: {
        auth: true
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: LoginPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterPage,
      meta: {
        auth: false
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.auth && !authStore.userInfo.token) {
    next('/signin')
  }
  else if ((to.name === 'signin' || to.name === 'signup') && authStore.userInfo.token) {
    next('/profile')
  }
  else {
    next();
  }
})

export default router

