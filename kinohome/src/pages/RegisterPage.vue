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
const displayName = ref()

const signup = async () => {
  await authStore.auth(
    { displayName: displayName.value, email: email.value, password: password.value },
    'signup'
  )
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
        <h1 class="text-white text-2xl mb-8 text-center">Регистрация</h1>
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
              v-model="displayName"
              class="w-full px-4 py-2 bg-white text-black rounded p-2 focus:outline-none focus:ring focus:border-blue-300 text-[15px]"
              type="text"
              placeholder="Имя"
            />
          </div>
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
          </div>
          <Loader v-if="authStore.loader" />
          <button
            v-else
            @click="signup"
            class="w-full py-2 px-4 text-white bg-blue-500 cursor-pointer rounded hover:bg-blue-600"
          >
            Зарегистрироваться
          </button>
        </form>
        <p class="text-white text-xs mt-2 text-center">
          Есть аккаунт?
          <a href="/signin" class="text-gray-600 hover:text-[#1976d2]">Войти</a>
        </p>
        <p class="text-gray-600 text-xs mt-2 text-center">
          Нажимая «Зарегистрироваться», вы соглашаетесь с
          <a href="/privacy-policy" class="text-gray-600 underline hover:text-[#1976d2]"
            >Политикой конфиденциальности</a
          >
          и
          <a href="/user-agreement" class="text-gray-600 underline hover:text-[#1976d2]"
            >Пользовательским соглашением</a
          >
        </p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main-back {
  background: url('../assets/img/bg.webp');
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
