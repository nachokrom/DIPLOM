<script setup>
import { ref } from 'vue';
import  Header  from '@/components/Header/ui.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';

const isDropdownOpen = ref(false);
const selectedGenre = ref('');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectGenre = (event) => {
  selectedGenre.value = event.target.value;
  isDropdownOpen.value = false;
};

</script>

<template>
  <Header />
  <main class="container px-2 max-w-7xl mx-auto mt-10">
    <h1 class="font-bold text-white text-4xl mb-10 px-4">Фильмы</h1>

    <div class="flex justify-between mb-6">
      <div class="flex space-x-2">
        <div class="selector" @click="toggleDropdown">
          <div class="selected-genre">{{ selectedGenre || 'Жанр' }}</div>
          <span class="arrow" :class="{ 'up': isDropdownOpen, 'down': !isDropdownOpen }"></span>
          <select v-show="isDropdownOpen" v-model="selectedGenre" @change="selectGenre" class="dropdown">
            <option value="comedy">Комедия</option>
            <option value="crime">Криминал</option>
            <option value="horror">Ужасы</option>
            <option value="drama">Драма</option>
          </select>
        </div>
      </div>
      <div class="selector">Рекомендуемые <i class="arrow down"></i></div>
    </div>
    <div class="grid grid-cols-5 gap-4 py-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  </main>
  <Footer />
</template>


<style scoped>
.selector {
  position: relative;
  /* Произвольная ширина селектора, вы можете задать нужную вам */
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}

.selected-genre {
  padding: 15px;
  background-color: #fff; /* Белый или любой другой цвет фона для селектора */
}

.dropdown {
  display: none; /* Скрывается по умолчанию */
  position: absolute;
  top: 100%;
  left: 0;
  width: 270px; /* Ширина выпадающего списка */
  box-sizing: border-box;
  border: 1px solid #ccc; /* Произвольные стили границы */
}

.dropdown option {
  padding: 15px;
  height: 50px; /* Высота уже включает паддинг */
  box-sizing: border-box;
  background-color: #fff;
}

.dropdown option:hover {
  background-color: lightgrey;
}

.arrow {
  position: absolute;
  top: 50%;
  right: 10px; /* Положение стрелочки внутри селектора */
  transform: translateY(-50%);
  border: solid transparent;
  border-width: 0 6px 6px;
  border-bottom-color: #000; /* Цвет стрелочки */
}

.arrow.up {
  transform: translateY(50%) rotate(180deg);
}

.arrow.down {
  transform: translateY(-50%);
}

</style>