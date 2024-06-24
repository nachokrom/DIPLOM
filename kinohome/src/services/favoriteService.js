import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, onValue } from 'firebase/database'
import { useAuthStore } from '@/stores/auth.js'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: 'kinohome-af875.firebaseapp.com',
  projectId: 'kinohome-af875',
  storageBucket: 'kinohome-af875.appspot.com',
  messagingSenderId: '194941073486',
  appId: '1:194941073486:web:a83098545e42eafc85ab1f'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// Добавление в избранное
export async function addToFavorites(movieId) {
  const { userInfo } = useAuthStore()

  if (!userInfo.value.userId) return

  const favoritesRef = ref(database, `favorites/${userInfo.value.userId}`)

  const snapshot = await get(favoritesRef)
  const favorites = snapshot.val() || []

  if (!favorites.includes(movieId)) {
    favorites.push(movieId)
    await set(favoritesRef, favorites)
  }
}

// Удаление из избранного
export async function removeFromFavorites(movieId) {
  const { userInfo } = useAuthStore()

  if (!userInfo.value.userId) return

  const favoritesRef = ref(database, `favorites/${userInfo.value.userId}`)

  const snapshot = await get(favoritesRef)
  const favorites = snapshot.val() || []

  const newFavorites = favorites.filter((id) => id !== movieId)
  await set(favoritesRef, newFavorites)
}

export async function checkIsFavorite(movieId) {
  const { userInfo } = useAuthStore()

  if (!userInfo.value.userId) return

  const favoritesRef = ref(database, `favorites/${userInfo.value.userId}`)

  return new Promise((resolve) => {
    onValue(
      favoritesRef,
      (snapshot) => {
        const favorites = snapshot.val() || []
        resolve(favorites.includes(movieId))
      },
      {
        onlyOnce: true
      }
    )
  })
}

export const getFavorites = async () => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export const toggleFavorite = async (movie) => {
  let favorites = await getFavorites()
  const index = favorites.findIndex((fav) => fav.id === movie.id)

  if (index !== -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(movie)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}
