<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import Header from '@/components/Header/ui.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Button from '@/components/Button.vue'

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)
const router = useRouter()

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}
</script>

<template>
  <Header />
  <main class="container px-2 max-w-7xl mx-auto mt-10 mb-10">
    <div class="breadcrumbs">
      <Breadcrumbs />
    </div>
    <h1 class="head_profile font-bold text-white text-4xl">Личный кабинет</h1>
    <div class="btns_lk">
      <router-link to="/profile/favorite" class="btns_lk-item">
        <svg
          class="bookmark_icon"
          id="Layer_1"
          enable-background="new 0 0 100 100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m85.1 100c-.5 0-1.6 0-2.1-.5h-.5l-32.5-13.6-32.4 13.6c-2.1 1-4.7.5-6.3-.5s-2.6-3.1-2.6-5.2v-73.3c0-11.5 8.9-20.4 20.4-20.4h41.9c11.5 0 20.4 8.9 20.4 20.4v73.3c0 2.1-1 4.2-2.6 5.2-1.1.5-2.7 1-3.7 1zm-56-90c-5.2 0-9.9 4.7-9.9 9.9v67.5l30.8-13 30.9 13.1v-67.6c0-5.2-4.7-9.9-9.9-9.9z"
            />
          </g>
        </svg>
        <span>Избранное</span>
      </router-link>
    </div>
    <div class="btn_logout">
      <Button text="Выйти" v-if="token" @click.prevent="logout" />
    </div>
  </main>
</template>

<style scoped>
.head_profile {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
}

.btn_logout {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
}

.btns_lk {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 20px;
}

.btns_lk-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 8px 40px;
  border-radius: 8px;
  gap: 12px;
  max-width: 150px;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  background-color: rgba(153, 153, 191, 0.2);
  transition: background-color 0.3s;
}

.btns_lk-item:hover {
  background-color: rgba(153, 153, 191, 0.3);
}

.bookmark_icon {
  display: block;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  fill: #fff;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .head_profile {
    font-size: 28px;
    max-width: 1400px;
    margin-bottom: 18px;
  }
}

@media (max-width: 1000px) {
  .head_profile {
    font-size: 24px;
    max-width: 1000px;
    margin-bottom: 15px;
  }
}

@media (max-width: 650px) {
  .head_profile {
    font-size: 20px;
    max-width: 650px;
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .btns_lk-item {
    padding: 20px 8px 30px;
    max-width: calc(50% - var(--offset) / 2);
  }
}

@media (max-width: 450px) {
  .head_profile {
    font-size: 16px;
    max-width: 450px;
    margin-bottom: 5px;
  }
}
</style>
