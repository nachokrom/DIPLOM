import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import PageNotFound from '@/pages/PageNotFound.vue'
import HomePage from '@/pages/HomePage.vue'
import MoviesPage from '@/pages/MoviesPage.vue'
import SerialsPage from '@/pages/SerialsPage.vue'
import MultPage from '@/pages/MultPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import FavoritePage from '@/pages/FavoritePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import DetailsMoviesPage from '@/pages/DetailsMoviesPage.vue'
import ActorDetail from '@/pages/ActorDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { breadcrumb: 'Главная' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: PageNotFound
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesPage
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: DetailsMoviesPage
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
      path: '/name/:id',
      name: 'name',
      component: ActorDetail
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: {
        auth: true,
        breadcrumb: 'Личный кабинет'
      }
    },
    {
      path: '/profile/favorite',
      name: 'favorite',
      component: FavoritePage,
      children: [
        {
          path: '',
          name: 'favorite',
          component: FavoritePage,
          meta: { breadcrumb: 'Избранное' }
        }
      ],
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
    }
  ]
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.userInfo.token) {
    return '/signin'
  } else if ((to.name === 'signin' || to.name === 'signup') && authStore.userInfo.token) {
    return '/profile'
  }

  return true
})

export default router
