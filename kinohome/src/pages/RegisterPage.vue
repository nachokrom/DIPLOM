<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

import  Header  from '@/components/Header/ui.vue';
import Footer from '@/components/Footer.vue';

const authStore = useAuthStore();

const email  = ref();
const password = ref();

const signup = async () => {
    await authStore.signup({email: email.value, password: password.value}, 'signup')
}

</script>

<template>

    <Header />
    <main class="main-back pt-32 pb-32">
        <div class="flex items-center justify-center">
            <div class="w-96 shadow-2xl rounded-xl p-10 bg-[#222222]">
                <h1 class="text-white text-2xl mb-8 text-center">Регистрация</h1>
                <form class="text-center space-y-7">
                <!--<div>
                    <input class="w-full px-4 py-2 bg-gray-600 text-white rounded" type="text" placeholder="Логин">
                </div>-->
                <div>
                    <input v-model="email" class="w-full px-4 py-2 bg-gray-600 text-white rounded" type="email" placeholder="Email">
                </div>
                <div>
                    <input v-model="password" class="w-full px-4 py-2 mb-2 bg-gray-600 text-white rounded" type="password" placeholder="Пароль">
                </div>
                <!--<div>
                    <input class="w-full px-4 py-2 mb-2 bg-gray-600 text-white rounded" type="reset password" placeholder="Повторите пароль">
                </div>-->
                <button @click="signup" class="w-full py-2 px-4 text-white bg-blue-500 cursor-pointer rounded hover:bg-blue-600">
                    Зарегистрироваться
                </button>
                </form>
                <p class="text-gray-600 text-xs mt-2 text-center">
                    Нажимая «Зарегистрироваться», вы соглашаетесь с 
                <a href="/privacy-policy" class="text-gray-600 underline hover:text-[#1976d2]">Политикой конфиденциальности</a> 
                    и 
                <a href="/user-agreement" class="text-gray-600 underline hover:text-[#1976d2]">Пользовательским соглашением</a>
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

</style>