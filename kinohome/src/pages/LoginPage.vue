<script setup lang="ts">
import  Header  from '@/components/Header/ui.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>

    <Header />
    <main class="main-back pt-32 pb-32">
        <div class="flex items-center justify-center">
            <div class="w-96 shadow-2xl rounded-xl p-10 bg-[#222222]">
                <h1 class="text-white text-2xl mb-8 text-center">Вход</h1>
                <form class="text-center space-y-7">
                <div>
                    <input class="w-full px-4 py-2 bg-gray-600 text-white rounded" type="text" placeholder="Логин или email">
                </div>
                <div>
                    <input class="w-full px-4 py-2 mb-2 bg-gray-600 text-white rounded" type="password" placeholder="Пароль">
                    <p class="text-gray-600 text-left">
                    <a href="/reset-password" class="text-gray-600 hover:text-[#1976d2]">Забыли пароль?</a>
                    </p>
                </div>
                <button class="w-full py-2 px-4 text-white bg-blue-500 cursor-pointer rounded hover:bg-blue-600">Войти</button>
                </form>
                <!--<p class="text-gray-600 text-xs mt-2 text-center">
                Нажимая «Войти», я соглашаюсь с 
                <a href="/privacy-policy" class="text-gray-600 underline hover:text-[#1976d2]">Политикой конфиденциальности</a> 
                и 
                <a href="/user-agreement" class="text-gray-600 underline hover:text-[#1976d2]">Пользовательским соглашением</a>
                </p>-->
                <p class="text-white text-xs mt-2 text-center">
                Нет аккаунта? 
                <a href="/register" class="text-gray-600 hover:text-[#1976d2]">Зарегистрируйтесь</a>.
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