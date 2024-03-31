<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const mobileMenuOpen = ref(false);

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
          <nav class="py-5">
            <router-link to="/" class="block px-5 py-2 rounded hover:bg-blue-700">Главная</router-link>
            <router-link to="/movies" class="block px-5 py-2 rounded hover:bg-blue-700">Фильмы</router-link>
            <router-link to="/serials" class="block px-5 py-2 rounded hover:bg-blue-700">Сериалы</router-link>
            <router-link to="/news" class="block px-5 py-2 rounded hover:bg-blue-700">Новинки</router-link>
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



@media (max-width:650px) {
  .burger_block {
    max-width: 250px;
  }
}

@media (max-width:400px) {
  .burger_block {
    max-width: 175px;
  }
}

</style>