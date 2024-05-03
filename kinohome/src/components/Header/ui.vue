<script setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount, computed } from 'vue'
import Navigation from '@/components/Header/Navigation/ui.vue'
import SearchBar from '@/components/Header/SearchBar/ui.vue'
import UserMenu from '@/components/Header/UserMenu/ui.vue'
import BurgerMenu from '@/components/Header/BurgerMenu/ui.vue'

const scrollPosition = ref(0)
const lastScrollPosition = ref(0)
const headerVisible = ref(true)

const windowWidth = ref(window.innerWidth)
const isMobile = computed(() => windowWidth.value < 1048)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

const handleScroll = () => {
  scrollPosition.value = window.scrollY

  if (scrollPosition.value > lastScrollPosition.value && scrollPosition.value > 75) {
    headerVisible.value = false
  } else {
    headerVisible.value = true
  }

  lastScrollPosition.value = scrollPosition.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, { passive: true })
})
</script>

<template>
  <header :class="['header text-white bg-[#1d1d1d]', !headerVisible && 'hidden-header']">
    <div class="header_container container mx-auto max-w-7xl px-2">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <!-- Логотип и навигация для десктопов-->
          <router-link to="/" class="logo text-xl font-bold mr-1 hover:cursor-pointer">
            <svg width="130" height="50" xmlns="http://www.w3.org/2000/svg">
              <text
                class="logo_text"
                fill="#3b82f6"
                font-family="Arial"
                font-size="25"
                x="10"
                y="31"
              >
                Kinohome
              </text>
            </svg>
          </router-link>
          <Navigation v-if="!isMobile" />
        </div>
        <!-- Блок поиска и управления -->
        <div class="flex items-center">
          <SearchBar />
          <BurgerMenu v-if="isMobile" />
          <!-- Кнопка входа -->
          <UserMenu v-if="!isMobile" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: transform 0.3s;
}

.hidden-header {
  transform: translateY(-100%);
}

.header_container {
  height: 75px;
  transition: height 0.3s;
}

.logo_text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
