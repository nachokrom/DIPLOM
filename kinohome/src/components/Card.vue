<script setup>
import { ref } from 'vue'

const hover = ref(false)

const hoverCard = (value) => {
  hover.value = value
}
</script>

<template>
  <div class="movie_card" @mouseover="hoverCard(true)" @mouseleave="hoverCard(false)">
    <!-- Постер -->
    <router-link to="`/movie/${movie.id}`">
      <div class="poster_container relative" @mouseover="hover = true" @mouseleave="hover = false">
        <img
          class="transition-transform duration-300 w-full h-full object-cover"
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a3ae9e25-5b10-42f3-96ae-5d707fc6a1bc/300x450"
          alt="Название фильма"
        />
        <div v-show="hover" class="overlay_effect"></div>
      </div>
    </router-link>

    <!-- Оценка -->
    <div
      class="mark absolute top-0 left-2 bg-green-500 text-white flex items-center justify-center"
    >
      8.0
    </div>

    <!-- Оверлей с информацией при наведении -->
    <div class="bottom-0 w-full transition-opacity duration-300">
      <p class="poster_category text-gray-600 px-1">Ужасы, Драма</p>
      <p class="poster_name text-white px-1">Черное Зеркало</p>
    </div>
  </div>
</template>

<style scoped>
.movie_card {
  width: 200px;
  max-height: 350px;
  height: auto;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
}

.overlay_effect {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.05);
  transition: opacity 0.3s ease;
}

.mark {
  width: 30px;
  height: 20px;
  font-size: 14px;
  border-radius: 10%;
  margin: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poster_category {
  font-size: 12px;
  margin-top: 5px;
}

.poster_name {
  font-size: 16px;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .movie_card {
    width: 160px;
    max-height: 300px;
  }
  .poster_name {
    font-size: 14px;
  }
  .poster_category {
    font-size: 11px;
  }
  .mark {
    width: 25px;
    height: 15px;
    font-size: 12px;
  }
}

@media (max-width: 1000px) {
  .movie_card {
    width: 100%;
    max-width: 170px;
    height: 100%;
    max-height: 300px;
  }
  .poster_name {
    font-size: 12px;
  }
  .poster_category {
    font-size: 10px;
  }
  .mark {
    width: 20px;
    height: 10px;
    font-size: 10px;
    padding: 10px;
  }
}

@media (max-width: 650px) {
  .movie_card {
    width: 100%;
    max-width: 110px;
    height: 100%;
    max-height: 300px;
  }
  .poster_name {
    font-size: 9px;
  }
  .poster_category {
    font-size: 8px;
  }
  .mark {
    width: 15px;
    height: 5px;
    font-size: 8px;
    padding: 8px;
  }
}

@media (max-width: 450px) {
  .movie_card {
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 300px;
  }
  .poster_name {
    font-size: 9px;
  }
  .poster_category {
    font-size: 8px;
  }
  .mark {
    width: 15px;
    height: 5px;
    font-size: 8px;
  }
}
</style>
