<script setup>
import { ref, onMounted } from 'vue'
import { getCartoons } from '@/services/KinohomeServices'
import Header from '@/components/Header/ui.vue'
import Card from '@/components/Card.vue'
import Filters from '@/components/Filters.vue'
import FiltersMobile from '@/components/FiltersMobile.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const genres = [
  { label: 'Семейные', value: 'семейный' },
  { label: 'Биографии', value: 'биография' },
  { label: 'Боевики', value: 'боевик' },
  { label: 'Вестерны', value: 'вестерн' },
  { label: 'Военные', value: 'военный' },
  { label: 'Детективы', value: 'детектив' },
  { label: 'Детские', value: 'детский' },
  { label: 'Документальные', value: 'документальный' },
  { label: 'Драмы', value: 'драма' },
  { label: 'Исторические', value: 'история' },
  { label: 'Комедии', value: 'комедия' },
  { label: 'Короткометражки', value: 'короткометражка' },
  { label: 'Криминал', value: 'криминал' },
  { label: 'Мелодрамы', value: 'мелодрама' },
  { label: 'Музыкальные', value: 'музыка' },
  { label: 'Мюзиклы', value: 'мюзикл' },
  { label: 'Новости', value: 'новости' },
  { label: 'Приключения', value: 'приключения' },
  { label: 'Спортивные', value: 'спорт' },
  { label: 'Триллеры', value: 'триллер' },
  { label: 'Ужасы', value: 'ужасы' },
  { label: 'Фантастика', value: 'фантастика' },
  { label: 'Фильмы-нуар', value: 'фильм-нуар' },
  { label: 'Фэнтези', value: 'фэнтези' }
]

const raiting = [
  { label: 'Больше 9', value: 'больше 9' },
  { label: 'Больше 8', value: 'больше 8' },
  { label: 'Больше 7', value: 'больше 7' },
  { label: 'Больше 6', value: 'больше 6' },
  { label: 'Больше 5', value: 'больше 5' }
]

const years = [
  { label: '2024', value: '2024' },
  { label: '2022-2023', value: '2022-2023' },
  { label: '2020-2021', value: '2020-2021' },
  { label: '2014-2019', value: '2014-2019' },
  { label: '2010-2014', value: '2010-2014' },
  { label: '2000-2009', value: '2000-2009' },
  { label: '1990-1999', value: '1990-1999' },
  { label: '1980-1989', value: '1980-1989' },
  { label: '1970-1979', value: '1970-1979' },
  { label: '1960-1969', value: '1960-1969' },
  { label: 'до 1959', value: '1959' }
]

const sort = [
  { label: 'Рекомендуемые', value: 'рекомендуемые' },
  { label: 'По рейтингу', value: 'по рейтингу' },
  { label: 'По дате выхода', value: 'по дате выхода' }
]

const selectedGenres = ref(null)
const selectedRating = ref(null)
const selectedYear = ref(null)
const selectedSort = ref(null)

function updateGenre(selected) {
  selectedGenres.value = selected
}

function updateRating(selected) {
  selectedRating.value = selected
}

function updateYear(selected) {
  selectedYear.value = selected
}

function updateSort(selected) {
  selectedSort.value = selected
}
/*function applySelection() {
  const filterData = {
    genres: selectedGenres.value,
    rating: selectedRating.value,
    years: selectedYear.value,
    sort: selectedSort.value
  }
  // Вы можете сделать запрос к API, чтобы получить отфильтрованные данные
  // или применить логику фильтрации на клиенте.
  console.log(filterData)
}*/

const currentPage = ref(1)
const cartoons = ref([])
const totalItems = ref(0)

function pageChanged(newPage) {
  currentPage.value = newPage
  loadMovies()
}

const loadMovies = () => {
  getCartoons(currentPage.value)
    .then((data) => {
      cartoons.value = data.docs
      totalItems.value = data.total
      console.log(data.docs)
    })
    .catch((error) => {
      console.error('Ошибка при получении фильмов:', error)
    })
}

onMounted(loadMovies)
</script>

<template>
  <Header />
  <main class="main">
    <div class="container px-2 max-w-7xl mx-auto mt-10 mb-10">
      <div class="head_films">
        <h1 class="head_title font-bold text-white text-4xl">Мультфильмы</h1>
        <button class="mr-[10px]" @click="openModal">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="icons">
            <g id="Filters">
              <path
                d="m4 7h16.18a3 3 0 0 0 5.64 0h2.18a1 1 0 0 0 0-2h-2.18a3 3 0 0 0 -5.64 0h-16.18a1 1 0 0 0 0 2zm19-2a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"
              />
              <path
                d="m28 15h-16.18a3 3 0 0 0 -5.64 0h-2.18a1 1 0 0 0 0 2h2.18a3 3 0 0 0 5.64 0h16.18a1 1 0 0 0 0-2zm-19 2a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"
              />
              <path
                d="m28 25h-7.18a3 3 0 0 0 -5.64 0h-11.18a1 1 0 0 0 0 2h11.18a3 3 0 0 0 5.64 0h7.18a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"
              />
            </g>
          </svg>
        </button>
        <div
          class="modal_filters container mx-auto max-w-7xl px-2"
          :class="{ modal_active: isModalOpen }"
          v-show="isModalOpen"
          ref="modal"
        >
          <div class="filters_header flex justify-between items-center py-4">
            <router-link to="/" class="logo text-xl font-bold mr-1 hover:cursor-pointer">
              <svg width="130" height="50" xmlns="http://www.w3.org/2000/svg">
                <text
                  class="logo_text"
                  fill="#3b82f6"
                  font-family="Arial"
                  font-size="25"
                  x="10"
                  y="35"
                >
                  Kinohome
                </text>
              </svg>
            </router-link>

            <button class="close" @click="closeModal">
              <svg
                class="icons_close"
                id="Capa_1"
                enable-background="new 0 0 512.001 512.001"
                viewBox="0 0 512.001 512.001"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"
                  />
                </g>
              </svg>
            </button>
          </div>

          <h1 class="head_filters font-bold text-white text-2xl py-6">Фильтры</h1>
          <div class="filters_mobile">
            <FiltersMobile title="Жанры" :options="genres" @updateGenre="updateGenre" />
            <FiltersMobile title="Рейтинг" :options="raiting" @updateRating="updateRating" />
            <FiltersMobile title="Годы выхода" :options="years" @updateYear="updateYear" />
            <FiltersMobile title="Сортировка" :options="sort" @updateSort="updateSort" />
          </div>
          <div class="w-full mt-4">
            <button
              class="apply-button w-full py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
              @click="applySelection"
            >
              Применить изменения
            </button>
          </div>
        </div>
      </div>
      <div class="select_section">
        <div class="select_section-left">
          <Filters title="Жанры" :options="genres"></Filters>
          <Filters title="Рейтинг" :options="raiting"></Filters>
          <Filters title="Годы выхода" :options="years"></Filters>
        </div>
        <div class="select_section-right">
          <Filters title="Рекомендуемые" :options="sort"></Filters>
        </div>
      </div>

      <div class="movie_cards">
        <Card v-for="cartoon in cartoons" :key="cartoon.id" :mediaItem="cartoon" />
      </div>

      <Pagination :totalItems="totalItems" :itemsPerPage="60" @page-changed="pageChanged" />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  display: block;
}

.head_films {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.logo_text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie_cards {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 55px;
}

.select_section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.select_section-left,
.select_section-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icons {
  width: 25px;
  height: 25px;
  fill: white;
  transition: fill 0.3s;
  display: none;
}

.modal_filters {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #171717;
  z-index: 150;
  opacity: 0;
  /* Плавное исчезновение и уменьшение модального окна */
  visibility: hidden;
  transform: scale(1.1);

  /* Определяем анимацию только для свойств opacity и transform */
  transition:
    opacity 0.5s,
    transform 0.5s;
  transition-timing-function: ease-in-out;
}

.modal_active {
  opacity: 1;
  /* Плавное появление и увеличение модального окна */
  visibility: visible;
  transform: scale(1);

  /* Снова определяем анимацию для тех же свойств */
  transition:
    opacity 0.5s,
    transform 0.5s;
  transition-timing-function: ease-in-out;
}

.close {
  padding-right: 15px;
}

.icons_close {
  width: 22px;
  height: 22px;
  fill: white;
  transition: fill 0.3s;
}

.filters_mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .head_title {
    font-size: 28px;
    max-width: 1400px;
    margin-bottom: 18px;
  }
}

@media (max-width: 1000px) {
  .head_title {
    font-size: 24px;
    max-width: 1000px;
    margin-bottom: 15px;
  }
  .movie_cards {
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .movie_cards {
    margin-bottom: 25px;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);
  }
  .select_section {
    display: none;
  }
  .icons {
    display: block;
  }
}

@media (max-width: 650px) {
  .head_title {
    font-size: 20px;
    max-width: 650px;
    margin-bottom: 10px;
  }
}

@media (max-width: 450px) {
  .head_title {
    font-size: 16px;
    max-width: 450px;
    margin-bottom: 5px;
  }
}
</style>
