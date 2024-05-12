<script setup>
import { ref, watch } from 'vue'
import { MovieSearch } from '@/services/KinohomeServices'
import debounce from 'lodash/debounce'

const searchQuery = ref('')
const isFocused = ref(false)
const searchResults = ref([])

// Добавляем дебаунсинг
const debouncedFetchResults = debounce(async (query) => {
  if (query) {
    try {
      const data = await MovieSearch(query)
      if (data && data.results) {
        searchResults.value = data.results.map((movie) => ({
          id: movie.id,
          title: movie.name,
          poster: movie.poster.url
        }))
        console.log(data)
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error)
    }
  } else {
    // Очищаем результаты, если запрос пуст
    searchResults.value = []
  }
}, 500)

watch(searchQuery, (newValue) => {
  debouncedFetchResults(newValue)
})

// Определи функцию для навигации
/*const navigateToSearchPage = (movieId) => {
  // Навигация по выбранному ID фильма (это пример, нужно будет адаптировать)
  // router.push({ name: 'MoviePage', params: { movieId } })
}

// очищаем результаты с задержкой, чтобы пользователь мог выбрать результат
const onBlur = () => {
  setTimeout(() => {
    if (!isFocused.value) {
      searchResults.value = []
    }
  }, 300)
}*/
</script>

<template>
  <div class="block_search relative">
    <!-- Поле поиска -->
    <input
      v-model="searchQuery"
      @input="fetchResults"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @keyup.enter="navigateToSearchPage"
      type="text"
      placeholder="Фильмы, сериалы..."
      class="input_search xl:w-64 lg:w-60 bg-white text-black rounded p-2 px-5 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
    />
    <!-- Попап с результатами поиска -->
    <div v-show="isFocused" class="absolute z-10 w-full bg-[#1d1d1d] mt-1 rounded shadow-2xl">
      <ul v-if="searchResults.length > 0" class="overflow-auto max-h-60">
        <li
          v-for="result in searchResults"
          :key="result.id"
          class="p-2 hover:bg-blue-700 text-white cursor-pointer flex items-center"
          @click="navigateToSearchPage(result.id)"
        >
          <img :src="result.poster" :alt="result.title" class="w-10 h-15 mr-4" />
          <span class="font-medium">{{ result.title }}</span>
        </li>
      </ul>
      <div v-else class="p-2 text-white text-[15px]">Ничего не найдено.</div>
    </div>
  </div>
</template>

<style scoped>
.block_search {
  margin-right: 15px;
}

@media (max-width: 650px) {
  .input_search {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 470px) {
  .input_search {
    width: 100%;
    max-width: 200px;
  }
}
</style>
