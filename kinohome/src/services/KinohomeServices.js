import axios from 'axios'
import { BASE_URL, API_KEY } from '@/constants'

//const getCurrentYear = () => new Date().getFullYear()

const fetchSettings = {
  headers: {
    Accept: 'application/json',
    'X-API-KEY': API_KEY
  }
}

export function getFilmById(id) {
  return fetch(`${BASE_URL}/movie?search=${id}&field=id&token=${API_KEY}`, fetchSettings).then(
    (response) => response.json()
  )
}
export function getComedies() {
  return axios
    .get(`${BASE_URL}/movie`, {
      params: {
        'genres.name': 'комедия',
        year: '2023 - 2024',
        'rating.kp': '7-10',
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
        limit: '15'
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
        limit: '15'
      },
      headers: {
        Accept: 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then((response) => response.data)
}
