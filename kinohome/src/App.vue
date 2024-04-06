<script setup>
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'));
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
  console.log(authStore.userInfo);
}

checkUser();
</script>

<template>

  <RouterView />

</template>

<style scoped>

</style>
