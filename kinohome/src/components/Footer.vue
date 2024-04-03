<template>
  <footer class="border-t border-[#8f8f8f1a] pt-10 pb-3 text-white inset-x-0">
    <div class="container mx-auto" style="max-width: 1400px; padding-left: 88px; padding-right: 0px; margin: 0 auto;">
      <div class="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Колонка №1: Логотип и информация -->
        <div class="flex flex-col">
          <router-link to="/" class="logo text-xl font-bold mr-8 hover:cursor-pointer">
            <svg width="125" height="35" xmlns="http://www.w3.org/2000/svg">
              <text fill="#1d4ed8" font-family="Arial" font-size="20" x="0" y="16">Kinohome</text>
            </svg>
          </router-link>
          <p class="text-xs text-[#ffffffa3]">Всегда готовы ответить на ваши вопросы</p>
          <a href="/" class="text-white hover:text-[#1976d2] text-xs my-2 mb-5 max-w-max">Задать вопрос</a>
          <p class="text-[#ffffffa3] ">Почта для связи:</p>
          <a href="mailto:test@kinohome.com" class="block mt-1 max-w-max">test@kinohome.com</a>
          <p class="mt-4 text-xs text-[#ffffffa3]">Kinohome.com © 2024</p>
        </div>

        <!-- Колонка №2: Разделы -->
        <div class="flex flex-col md:-mr-2">
          <p class="font-bold mb-2">Разделы</p>
          <router-link to="/" class="text-[#ffffffa3] hover:text-[#1976d2] text-xs my-2 max-w-max">Правила сайта</router-link>
          <router-link to="/" class="text-[#ffffffa3] hover:text-[#1976d2] text-xs my-2 max-w-max">Авторское право</router-link>
          <router-link to="/" class="text-[#ffffffa3] hover:text-[#1976d2] text-xs my-2 max-w-max">О нас</router-link>
          <router-link to="/" class="text-[#ffffffa3] hover:text-[#1976d2] text-xs my-2 max-w-max">Вакансии</router-link>
        </div>

        <!-- Колонка №3: Информация -->
        <div class="flex flex-col md:-ml-2">
          <p class="font-bold mb-2">Информация</p>
          <router-link to="/" class="text-[#ffffffa3] hover:text-[#1976d2] text-xs my-2 max-w-max">Пользовательское соглашение</router-link>
        </div> 

        <!-- Колонка №4: Контакты и соцсети -->
        <div>
          <p class="font-bold mb-2">Контакты</p>
          <a href="https://vk.com" class="inline-block mr-2 pr-2">
            <svg width="30px" height="30px" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path></svg>
          </a>
          <a href="https://t.me" class="inline-block mr-2 pr-2">
            <svg width="30px" height="30px" viewBox="0 0 496 512" aria-hidden="true"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>
          </a>
          <a href="https://youtube.com" class="inline-block pr-2">
            <svg width="30px" height="30px" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

