<script setup>
import { ref, watch } from 'vue'
import { BASE_URL, API_KEY } from '@/constants'
import Loader from '@/components/Loader.vue'

const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': API_KEY }
}

function getResult() {
  if (!searchQuery.value) {
    hideResults()
    return
  }
  isLoading.value = true
  fetch(
    `${BASE_URL}/movie/search?page=1&limit=10&query=${searchQuery.value}&token=${API_KEY}`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      searchResults.value = data.docs || []
    })
    .catch((error) => {
      console.error('Ошибка поиска:', error)
      searchResults.value = []
    })
    .finally(() => {
      isLoading.value = false
    })
}

function hideResults() {
  searchResults.value = []
}

watch(searchQuery, getResult)
</script>

<template>
  <div class="block_search relative">
    <input
      v-model="searchQuery"
      @input="getResult"
      @focus="isFocused = true"
      @blur="isFocused = false"
      type="text"
      placeholder="Фильмы, сериалы..."
      class="input_search xl:w-64 lg:w-60 bg-white text-black rounded p-2 px-5 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
    />

    <div
      v-show="searchQuery.length"
      class="absolute z-10 w-full bg-[#1d1d1d] mt-1 rounded shadow-2xl"
    >
      <ul v-if="searchResults.length > 0" class="overflow-auto max-h-100 custom-scrollbar">
        <li
          v-for="result in searchResults"
          :key="result.id"
          class="p-2 hover:bg-blue-700 text-white cursor-pointer flex items-center"
        >
          <Loader v-if="isLoading" />
          <a :href="`/movie/${result.id}`" class="result_link">
            <img :src="result.poster.url" :alt="result.name" class="w-10 h-15 mr-4" />
            <span class="font-medium">{{ result.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.block_search {
  margin-right: 15px;
}

.result_link {
  display: flex;
  width: 100%;
  align-items: center;
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

.custom-scrollbar::-webkit-scrollbar {
  display: none;
}

.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
