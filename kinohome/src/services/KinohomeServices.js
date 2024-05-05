import axios from 'axios'
import { BASE_URL, API_KEY } from '@/constants'

//const getCurrentYear = () => new Date().getFullYear()

const fetchSettings = {
  headers: {
    Accept: 'application/json',
    'X-API-KEY': API_KEY
  }
}

/*export function getFilmById() {
  return fetch(`${BASE_URL}/movie/5275429&token=${API_KEY}`, fetchSettings).then((response) =>
    response.json()
  )
}*/

export function getFilmById(id) {
  return fetch(`${BASE_URL}/movie/${id}?token=${API_KEY}`, fetchSettings)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      if (response.headers.get('content-type').indexOf('application/json') !== -1) {
        return response.json()
      } else {
        throw new Error('Not a JSON response')
      }
    })
    .then((data) => data)
    .catch((error) => console.error('Fetching error:', error))
}

export function getComedies() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        'genres.name': 'комедия',
        year: '2023 - 2024',
        'rating.kp': '7-10',
        notNullFields: 'poster.url',
        limit: '15'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getFantastica() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        'genres.name': 'фантастика',
        year: '2023 - 2024',
        'rating.kp': '7-10',
        notNullFields: 'poster.url',
        limit: '15'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getNewFilmsAndSerials() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        year: '2024',
        'rating.kp': '7-10',
        limit: '15',
        notNullFields: 'poster.url'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getFamily() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        'genres.name': 'семейный',
        year: '2023 - 2024',
        'rating.kp': '7-10',
        notNullFields: 'poster.url',
        limit: '15'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getPremierMovie() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        page: '1',
        status: 'completed',
        'rating.kp': '7-10',
        notNullFields: 'poster.url',
        limit: '15'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getPopularMovie() {
  return fetch(
    `${BASE_URL}/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=movieLength&selectFields=poster&notNullFields=ageRating&notNullFields=shortDescription&notNullFields=poster.url&notNullFields=genres.name&year=2024&rating.kp=7.5-10&token=${API_KEY}`,
    fetchSettings
  ).then((response) => response.json())
}

/*export function getFilms(filters, page) {
  return fetch(
    `${BASE_URL}`
  )
}*/
