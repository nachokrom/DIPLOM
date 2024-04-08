<script setup>
import { ref } from 'vue';

const hover = ref(false);

function hoverCard(value) {
  hover.value = value;
}
</script>

<template>
    <div 
        class="movie_card" 
        @mouseenter="hoverCard(true)"
        @mouseleave="hoverCard(false)"
    >
        <!-- Постер -->
        <router-link to="`/movie/${movie.id}`">
            <img 
                class="transition-transform duration-300 w-full h-full object-cover" 
                :class="{ 'scale-110': hover }" 
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a3ae9e25-5b10-42f3-96ae-5d707fc6a1bc/300x450" alt="Название фильма"
            >
        </router-link>

        <!-- Возрастное ограничение -->
        <div class="age_limit absolute top-0 left-0 bg-orange-800 text-white flex items-center justify-center">
            16+
        </div>
        
        <!-- Оценка -->
        <div class="mark absolute top-0 right-0 bg-green-500 text-white flex items-center justify-center">
            8.0
        </div>
        
        <!-- Оверлей с информацией при наведении -->
        <div 
        class="absolute bottom-0 w-full transition-opacity duration-300" 
        :class="{ 'bg-black bg-opacity-50 px-1 py-2': hover, 'h-0': !hover }"
        >
        <p class="text-white" style="font-size: 16px;">Черное Зеркало</p>
        <p class="text-gray-600" style="font-size: 12px; margin-top: 3px;">Ужасы, Драма</p>
        </div>
    </div>
</template>
  

  
<style scoped>
.movie_card  {
    width: 235px;
    height: 350px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    margin: 15px;
}

.mark {
    width: 30px; 
    height: 30px; 
    font-size: 14px; 
    border-radius: 50%; 
    margin: 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.age_limit {
    width: 15px; 
    height: 15px; 
    font-size: 14px; 
    border-radius: 2px;
    margin: 10px;
    padding: 12px;
}
</style>