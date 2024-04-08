<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const slides = ref([
  new URL('./../assets/img/dr-strange.jpg', import.meta.url).href,
  new URL('./../assets/img/eternals.jpg', import.meta.url).href,
  new URL('./../assets/img/justice-league.jpg', import.meta.url).href,
  new URL('./../assets/img/thor-ragnarok.jpg', import.meta.url).href,
]);

</script>

<template>
  <Swiper
    :modules="[Navigation, Autoplay]"
    slidesPerView="auto"
    :centeredSlides="true"
    spaceBetween="30"
    :loop="true"   
    :loopedSlides="slides.length"
    class="mySwiper" 
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <img :src="slide" :alt="`Poster ${index + 1}`" class="slide-image  inset-0 w-full h-full object-cover rounded-lg shadow-md">
      
      <div>
        
        <!-- Блок с информацией о фильме -->
        <div class="absolute left-10 bottom-10">
          <h2 class="text-white text-shadow text-4xl font-bold mb-3 outlined-text">Название фильма</h2>
          <div class="flex items-center justify-start text-white text-shadow text-lg mb-3">
            <p class="text-green-500 text-shadow font-semibold text-2xl mb-0 mr-4">8.5</p>
            <span class="mr-4 outlined-text font-bold">2022</span>
            <span class="mr-4 outlined-text font-bold">Фантастика</span>
            <span class="mr-4 outlined-text font-bold">16+</span>
            <span class="outlined-text font-bold">168 мин</span>
          </div>
          <p class="text-white text-shadow outlined-text text-xl">Описание фильма...</p>
        </div>

        <div class="absolute right-20 bottom-10">
          <router-link to="`/movie/${movie.id}`"><button class="btn_slider bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300 ease-in-out">Смотреть онлайн</button></router-link>
          <button class="btn_bookmark bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><img width="35" height="35" src="https://img.icons8.com/glyph-neue/64/FFFFFF/like--v1.png" alt="like--v1" class="book_mark inline-block"/><!--<img src="./../assets/icons/heart.png" alt="Icon" class="book_mark inline-block">--></button>
        </div>
  
      </div>
      

    </SwiperSlide>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </Swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 700px;
  margin-top: 5px;  
  overflow: hidden; 
}

.slide-image {
  width: 1400px;
  height: 700px;
  object-fit: cover;
  border-radius: 40px;
  border: 1px solid #3b82f6;
}

.mySwiper .swiper-slide {
  width: 1400px;
}

.mySwiper .swiper-button-prev, .mySwiper .swiper-button-next {
  width: 50px;
  height: 70px;
  background-color: rgba(128, 128, 128, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 10;
  border-radius: 8px;
}

.mySwiper .swiper-button-prev {
  left: calc(50% - 685px);
}

.mySwiper .swiper-button-next {
  right: calc(50% - 685px);
}

.mySwiper .swiper-button-prev:hover, .mySwiper .swiper-button-next:hover {
  background-color: rgb(128, 128, 128);
}

/* Пример добавления стрелок как символов */
.mySwiper .swiper-button-prev::after {
  background: url('./../assets/img/prev.png');
  font-size: 25px;
  display: block;
  color: white;

}

.mySwiper .swiper-button-next::after {
  background: url('./../assets/img/next.png');
  font-size: 25px; 
  display: block;
  color: white;
}

.mySwiper .swiper-slide:not(.swiper-slide-active) .swiper-button-prev,
.mySwiper .swiper-slide:not(.swiper-slide-active) .swiper-button-next {
  opacity: 50;
}

.book_mark {
  width: 40px;
  height: 32px;
}

.btn_slider {
  height: 48px;
  margin-right: 10px;
}

.btn_bookmark {
  width: 60px;
  height: 48px;
}

.outlined-text {
  color: white; /* Цвет текста */
  text-shadow:
    -1px -1px 0 #979797,  
     1px -1px 0 #979797,
    -1px  1px 0 #979797,
     1px  1px 0 #979797; /* Тень, создающая эффект обводки */
}

@media (max-width: 640px) {
  .text-4xl {
    font-size: 1.5rem; 
  }
  .text-lg {
    font-size: 1.125rem; 
  }
  .text-base {
    font-size: 1rem; 
  }
}
</style>