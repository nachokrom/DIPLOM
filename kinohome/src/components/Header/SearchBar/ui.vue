<script setup>
import { ref, watch } from 'vue'
import { MovieSearch } from '@/services/KinohomeServices'
import debounce from 'lodash/debounce'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const isFocused = ref(false)
const searchResults = ref([])
const router = useRouter()

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
    searchResults.value = []
  }
}, 500)

const navigateToSearchPage = (movieId) => {
  if (movieId) {
    router.push(`/movie/${movieId}`)
  } else {
    console.log('Navigate to general search page with query: ' + searchQuery.value)
  }
}

// Следим за изменениями поискового запроса
watch(searchQuery, (newValue) => {
  debouncedFetchResults(newValue)
})
</script>

<template>
  <div class="block_search relative">
    <input
      v-model="searchQuery"
      @input="debouncedFetchResults(searchQuery)"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @keyup.enter="navigateToSearchPage"
      type="text"
      placeholder="Фильмы, сериалы..."
      class="input_search xl:w-64 lg:w-60 bg-white text-black rounded p-2 px-5 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
    />
    <div
      v-show="isFocused && searchQuery.length"
      class="absolute z-10 w-full bg-[#1d1d1d] mt-1 rounded shadow-2xl"
    >
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
