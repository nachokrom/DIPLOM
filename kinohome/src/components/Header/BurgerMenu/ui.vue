<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface SearchResult {
  id: number;
  title: string;
  poster: string;
}

const mobileMenuOpen = ref(false);

const searchQuery = ref('');
const isFocused = ref(false);

const searchResults = ref<SearchResult[]>([]);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const onClickOutside = (event: MouseEvent) => {
  if (mobileMenuOpen.value && event.target instanceof Node && !document.querySelector('.burger_block')?.contains(event.target)) {
    mobileMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside);
});


const fetchResults = async () => {
  searchResults.value = [];

  if (searchQuery.value) {
    try {
      // Здесь ваш код запроса на сервер или API для получения данных

      
      searchResults.value = [
        { id: 1, title: 'Фильм 1', poster: 'https://placehold.it/10x15' },
        { id: 2, title: 'Фильм 2', poster: 'https://placehold.it/10x15' },
      ];

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
     <!-- Меню бургера для мобильных устройств -->
    <div>
        <button @click="toggleMobileMenu">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
    </div>
    <!-- Панель бургер-меню -->
    <transition name="slide" class="bg-[#292929]">
      <div class="burger_block" v-show="mobileMenuOpen" @click.self="mobileMenuOpen = false">
        <div class="burger_items py-10">
          <router-link to="/" class="logo text-xl font-bold mr-8 hover:cursor-pointer">
            <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text fill="#1d4ed8" font-family="Arial" font-size="30" x="10" y="35">Kinohome</text>
            </svg>
          </router-link>
          <div class="search_burger mx-4">
              <!-- Поле поиска -->
              <input
                  v-model="searchQuery"
                  @input="fetchResults"
                  @focus="isFocused = true"
                  @blur="isFocused = false"
                  @keyup.enter="navigateToSearchPage"
                  type="text"
                  placeholder="Поиск..."
                  class="search_burger bg-white text-black rounded p-2 px-5 focus:outline-none focus:ring focus:border-blue-300"
                  
              />
              <!-- Попап с результатами поиска -->
              <div
                  v-show="isFocused"
                  class="search_burger-popup absolute z-10 w-full bg-[#292929] mt-1 rounded shadow-2xl"
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
          <nav class="py-5">
            <router-link to="/" class="block px-5 py-2 rounded hover:bg-blue-700">Главная</router-link>
            <router-link to="/movies" class="block px-5 py-2 rounded hover:bg-blue-700">Фильмы</router-link>
            <router-link to="/serials" class="block px-5 py-2 rounded hover:bg-blue-700">Сериалы</router-link>
            <router-link to="/cartoons" class="block px-5 py-2 rounded hover:bg-blue-700">Мультфильмы</router-link>
          </nav>
        </div>
      </div>
        
    </transition>
</template>

<style scoped>
.burger_block {
  width: 100%;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 1024px) {
  .search_burger-popup {
    max-width: 235px;
  }
}

@media (max-width:450px) {
  .burger_block {
    max-width: 250px;
  }

  .search_burger {
    max-width: 200px;
  }

  .search_burger-popup {
    max-width: 200px;
  }
}

</style>