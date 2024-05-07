import axios from 'axios'
import { BASE_URL, API_KEY } from '@/constants'

const fetchSettings = {
  headers: {
    Accept: 'application/json',
    'X-API-KEY': API_KEY
  }
}

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

export function MovieSearch(query) {
  return axios
    .get(`${BASE_URL}/movie/search`, {
      params: {
        query,
        page: '1',
        limit: '10'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getComedies() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        'genres.name': 'комедия',
        year: '2023 - 2024',
        'rating.kp': '7-10',
        notNullFields: 'videos.trailers.url',
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
        notNullFields: 'videos.trailers.url',
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
        'rating.kp': '1-10',
        limit: '15',
        notNullFields: 'videos.trailers.url'
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
        notNullFields: 'videos.trailers.url',
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
        'rating.kp': '8-10',
        notNullFields: 'videos.trailers.url',
        lists: 'top250',
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
    `${BASE_URL}/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=genres&selectFields=movieLength&selectFields=poster&notNullFields=ageRating&notNullFields=shortDescription&notNullFields=poster.url&notNullFields=genres.name&notNullFields=videos.trailers.url&year=2023-2024&rating.kp=7-10&typeNumber=1&&token=${API_KEY}`,
    fetchSettings
  ).then((response) => response.json())
}

/*export function getFilms() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        limit: '60',
        typeNumber: '1',
        notNullFields: 'videos.trailers.url',
        'rating.kp': '1-10'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}*/

export function getFilms(page) {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        page: page,
        limit: 60,
        typeNumber: '1',
        notNullFields: 'videos.trailers.url',
        'rating.kp': '1-10'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getSerials(page) {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        page: page,
        limit: 60,
        typeNumber: '2',
        notNullFields: 'videos.trailers.url',
        'rating.kp': '1-10'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}

export function getCartoons(page) {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        page: page,
        limit: 60,
        typeNumber: '3',
        notNullFields: 'videos.trailers.url',
        'rating.kp': '1-10'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}
