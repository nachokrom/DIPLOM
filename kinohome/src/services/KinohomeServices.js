const API_KEY = import.meta.env.VITE_API_KEY_MOVIE
const getCurrentYear = () => new Date().getFullYear()

export function getFilmById(id) {
  return fetch(`/movie?search=${id}&field=id&token=${API_KEY}`).then((response) => response.json())
}

export function getNewFilms(limit) {
  return fetch(
    `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getNewSeries(limit) {
  return fetch(
    `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getFilmByName(filters, page, id) {
  return fetch(
    `/movie?${filters.genre}&search=${id}&field=name&search=${filters.rating}&field=rating.kp&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getFilms(filters, page) {
  return fetch(
    `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getSeries(filters, page) {
  return fetch(
    `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getCartoons(filters, page) {
  return fetch(
    `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getPersonById(id) {
  return fetch(`/person?search=${id}&field=id&token=${API_KEY}`).then((response) => response.json())
}

export function getFavourites(query, filters, page) {
  return fetch(
    `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getFilmsBySearch(query, type, limit) {
  return fetch(
    `/movie?search=${query}&field=name&limit=${limit}&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=true&token=${API_KEY}`
  ).then((response) => response.json())
}

export function getReviewsById(id, limit) {
  return fetch(`/review?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getMovieImages(id, limit) {
  return fetch(`/image?search=${id}&field=movieId&limit=${limit}&token=${API_KEY}`).then(
    (response) => response.json()
  )
}
