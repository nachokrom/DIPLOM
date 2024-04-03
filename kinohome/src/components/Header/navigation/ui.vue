<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import  BurgerMenu  from '@/components/Header/BurgerMenu/ui.vue'; 

const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 1024); 

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};


onMounted(() => {
  window.addEventListener('resize', updateWindowWidth); 
  updateWindowWidth();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>


<template>
  <header class="text-white">
    <div class="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        
        <!-- Логотип и навигация для десктопов-->
        <div v-if="!isMobile" class="flex items-center">
          <router-link to="/" class="logo text-xl font-bold mr-8 hover:cursor-pointer hidden lg:block">
            <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text fill="#1d4ed8" font-family="Arial" font-size="30" x="10" y="35">Kinohome</text>
            </svg>
          </router-link>
          
          
          <nav class=" lg:block hidden">
            <router-link to="/" class="nav_item r-5 hover:underline">Главная</router-link>
            <router-link to="/movies" class="nav_item mr-5 hover:underline">Фильмы</router-link>
            <router-link to="/serials" class="nav_item mr-5 hover:underline">Сериалы</router-link>
            <router-link to="/cartoons" class="nav_item mr-5 hover:underline">Мультфильмы</router-link>
          </nav>
        </div>

        
      </div>
    </div>
    <BurgerMenu v-if="isMobile"/>
  </header>
</template>



<style scoped>
.nav_item {
  color: white;
  text-decoration: none;
  position: relative;
  margin-right: 16px;
}

.nav_item:last-child {
  margin-right: 0;
}

.nav_item:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: 0.3s;
}

.nav_item:hover::after {
  width: 100%;
}

.container {
  max-width: 1400px; 
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto; 
  margin-right: auto; 
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.py-4 {
  padding-top: 1rem; 
  padding-bottom: 1rem;
}

.mx-auto {
  margin-left: auto; 
  margin-right: auto; 
}

</style>