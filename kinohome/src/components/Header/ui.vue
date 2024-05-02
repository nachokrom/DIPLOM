<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from '@/components/Header/Navigation/ui.vue'
import SearchBar from '@/components/Header/SearchBar/ui.vue'
import UserMenu from '@/components/Header/UserMenu/ui.vue'

const scrollPosition = ref(0)
const lastScrollPosition = ref(0)
const headerVisible = ref(true)

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
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header text-white bg-[#171717]', !headerVisible && 'hidden-header']">
    <div class="header_container container mx-auto max-w-7xl px-2">
      <div class="flex justify-between items-center py-4">
        <Navigation />

        <!-- Блок поиска и управления -->
        <div class="flex items-center">
          <SearchBar />
          <!-- Кнопка входа -->
          <UserMenu />
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
</style>
