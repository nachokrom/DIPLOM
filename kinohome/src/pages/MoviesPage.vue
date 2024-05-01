<script setup>
import { ref } from 'vue'
import Header from '@/components/Header/ui.vue'
import Card from '@/components/Card.vue'
import Filters from '@/components/Filters.vue'
import FiltersMobile from '@/components/FiltersMobile.vue'
import Footer from '@/components/Footer.vue'

const isModalOpen = ref(false)

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
  { label: 'Больше 9', href: '#' },
  { label: 'Больше 8', href: '#' },
  { label: 'Больше 7', href: '#' },
  { label: 'Больше 6', href: '#' },
  { label: 'Больше 5', href: '#' }
]

const years = [
  { label: '2024', href: '#' },
  { label: '2022-2023', href: '#' },
  { label: '2020-2021', href: '#' },
  { label: '2014-2019', href: '#' },
  { label: '2010-2014', href: '#' },
  { label: '2000-2009', href: '#' },
  { label: '1990-1999', href: '#' },
  { label: '1980-1989', href: '#' },
  { label: '1970-1979', href: '#' },
  { label: '1960-1969', href: '#' },
  { label: 'до 1959', href: '#' }
]

const sort = [
  { label: 'Рекомендуемые', href: '#' },
  { label: 'По рейтингу', href: '#' },
  { label: 'По дате выхода', href: '#' }
]
</script>

<template>
  <Header />
  <main class="main">
    <div class="container px-2 max-w-7xl mx-auto mt-10 mb-10">
      <div class="head_films">
        <h1 class="head_title font-bold text-white text-4xl">Фильмы</h1>
        <button @click="isModalOpen = true">
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
        <FiltersMobile v-if="isModalOpen" @close="isModalOpen = false" />
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
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
