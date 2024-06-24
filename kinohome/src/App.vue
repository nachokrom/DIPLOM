<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

const authStore = useAuthStore()
const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
  }
}
checkUser()

const siteData = reactive({
  title: `Онлайн-кинотеатр Kinohome - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве`,
  description: `Устройте кинотеатр у себя дома! 
    Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. 
    Для вас всегда доступны на любой вкус: сериалы, фильмы, мультфильмы и многое другое.`
})
useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description)
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
