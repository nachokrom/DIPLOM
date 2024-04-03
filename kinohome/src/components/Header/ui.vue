<script setup lang="ts">
import  Navigation  from '@/components/Header/Navigation/ui.vue'
import  SearchBar  from '@/components/Header/SearchBar/ui.vue'
import  UserMenu  from '@/components/Header/UserMenu/ui.vue'

</script>

<template>
<header class="text-white bg-[#222222]">
    <div class="container mx-auto max-w-7xl px-2">
      <div class="flex justify-between items-center py-4">
      
        <Navigation />

        <!-- Блок поиска и управления -->
        <div class="flex items-center">
          
          <SearchBar />
          <!-- Значок смены темы сайта -->
          <div class="mx-4 hover:cursor-pointer">
            <img src="./../../assets/icons/sun-light-theme.svg" alt="">
            
          </div>
          <!-- Кнопка входа -->
          <UserMenu />
        </div>

      </div>
    </div>
</header>
</template>