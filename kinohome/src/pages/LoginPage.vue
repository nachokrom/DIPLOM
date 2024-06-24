<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

import Header from '@/components/Header/ui.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

const authStore = useAuthStore()
const router = useRouter()

const email = ref()
const password = ref()

const signin = async () => {
  await authStore.auth({ email: email.value, password: password.value }, 'signin')
  router.push('/profile')
}

const dismissError = () => {
  authStore.error = null
}
</script>

<template>
  <Header />
  <main class="main-back pt-32 pb-32">
    <div class="flex items-center justify-center">
      <div class="w-96 shadow-2xl rounded-[50px] p-8 bg-[#1c1c1f]">
        <h1 class="text-white text-2xl mb-[15px] text-center">Вход</h1>
        <Transition name="fade" mode="out-in">
          <div
            v-if="authStore.error"
            class="relative bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2 mb-[10px]"
            role="alert"
          >
            <p class="text-[14px]">{{ authStore.error }}</p>
            <button @click="dismissError" class="absolute top-1.5 right-2">
              <!-- Иконка крестика -->
              <svg
                class="h-6 w-6 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </Transition>
        <form class="text-center space-y-7">
          <div>
            <input
              v-model="email"
              class="w-full px-4 py-2 bg-white text-black rounded p-2 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              v-model="password"
              class="w-full px-4 py-2 mb-2 bg-white text-black rounded p-2 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
              type="password"
              placeholder="Пароль"
            />
            <!--<p class="text-gray-600 text-left">
              <a href="/reset-password" class="text-[15px] text-gray-600 hover:text-[#1976d2]"
                >Забыли пароль?</a
              >
            </p>-->
          </div>
          <Loader v-if="authStore.loader" />
          <button
            v-else
            @click="signin"
            class="w-full py-2 px-4 text-white bg-blue-500 cursor-pointer rounded hover:bg-blue-600"
          >
            Войти
          </button>
        </form>
        <p class="text-white text-xs mt-2 text-center">
          Нет аккаунта?
          <a href="/signup" class="text-gray-600 hover:text-[#1976d2]">Зарегистрируйтесь</a>.
        </p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main-back {
  background: url('../assets/img/bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
}

.message_error {
  margin-bottom: 10px;
}

.msg_error {
  margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
