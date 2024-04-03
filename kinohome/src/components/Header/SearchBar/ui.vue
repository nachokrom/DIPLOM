<script setup>
import { ref } from 'vue';
//import { ApiKeyMovie,  BaseUrlMovie} from '@/constants';


const searchQuery = ref('');
const isFocused = ref(false);

const searchResults = ref([]);

const fetchResults = async () => {
  searchResults.value = [];

  if (searchQuery.value) {
    try {
      // Здесь ваш код запроса на сервер или API для получения данных
      /*const response = await this.$http.get("");
      this.searchResults = response.data.results;*/
      
      /*searchResults.value = [
        { id: 1, title: 'Фильм 1', poster: 'https://placehold.it/10x15' },
        { id: 2, title: 'Фильм 2', poster: 'https://placehold.it/10x15' },
      ];*/

    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  }
};

// Здесь должна быть логика для перехода на страницу с результатами поиска
const navigateToSearchPage = () => {
  // Здесь должен быть код для навигации, например:
  //router.push(/search?query=${searchQuery.value})
};
</script>

<template>
    <div class="relative mx-4">
        <!-- Поле поиска -->
        <input
            v-model="searchQuery"
            @input="fetchResults"
            @focus="isFocused = true"
            @blur="isFocused = false"
            @keyup.enter="navigateToSearchPage"
            type="text"
            placeholder="Поиск..."
            class="bg-white text-black rounded p-2 px-5 focus:outline-none focus:ring focus:border-blue-300"
            
        />
        <!-- Попап с результатами поиска -->
        <div
            v-show="isFocused"
            class="absolute z-10 w-full bg-[#292929] mt-1 rounded shadow-2xl"
        >
            <ul v-if="searchResults.length > 0" class="overflow-auto max-h-60">
                <li
                v-for="result in searchResults"
                :key="result.id"
                class="p-2 hover:bg-blue-700 text-white cursor-pointer flex items-center"
                >
                <img :src="result.poster" alt="" class="w-10 h-15 mr-4" />
                <span class="font-medium">{{ result.title }}</span>
                </li>
            </ul>
            <div v-else class="p-2 text-white">
                Ничего не найдено.
            </div>
        </div>
    </div>
</template>

<style scoped>

@media (max-width: 1024px) {
  .relative {
    display: none;
  }
  
}

</style>