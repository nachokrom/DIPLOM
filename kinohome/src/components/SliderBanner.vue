<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = ref([
  new URL('./../assets/img/dr-strange.jpg', import.meta.url).href,
  new URL('./../assets/img/eternals.jpg', import.meta.url).href,
  new URL('./../assets/img/justice-league.jpg', import.meta.url).href,
  new URL('./../assets/img/thor-ragnarok.jpg', import.meta.url).href
])
</script>

<template>
  <Swiper
    :modules="[Navigation, Autoplay]"
    slidesPerView="auto"
    :centeredSlides="true"
    spaceBetween="30"
    :loop="true"
    :loopedSlides="slides.length"
    class="mySwiper relative overflow-hidden"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <router-link to="`/movie/${movie.id}`" class="router-link-inactive">
        <img
          :src="slide"
          :alt="`Poster ${index + 1}`"
          class="slide-image object-cover rounded-lg shadow-md w-full h-auto"
        />
      </router-link>
      <div>
        <div class="absolute xl:left-20 lg:left-10 md:left-6 bottom-10">
          <h2
            class="text-white text-shadow xl:text-4xl lg:text-2xl md:text-base xs:text-base font-bold xl:mb-3 lg:mb-2 md:mb-1 outlined-text"
          >
            Название фильма
          </h2>
          <div
            class="flex items-center justify-start text-white text-shadow xl:text-xl lg:text-base md:text-xs xl:mb-3 lg:mb-2 md:mb-2"
          >
            <p class="text-green-500 text-shadow font-semibold mb-0 xl:mr-4 lg:mr-3 md:mr-2">8.5</p>
            <span class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold">2022</span>
            <span class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold">Фантастика</span>
            <span class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold">16+</span>
            <span class="outlined-text font-semibold">168 мин</span>
          </div>
          <p class="text-white text-shadow outlined-text xl:text-xl lg:text-sm md:text-xs">
            Бен Фостер, Дженна Ортега и Томми Ли Джонс в драме о конфликте двух братьев и бостонских
            гангстеров
          </p>
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
  height: 650px;
  margin-top: 5px;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  max-width: 1400px;
  height: 650px;
  object-fit: cover;
  border-radius: 40px;
  border: 1px solid #3b82f6;
}

.mySwiper .swiper-slide {
  width: 1400px;
}

.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
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

.mySwiper .swiper-button-prev:hover,
.mySwiper .swiper-button-next:hover {
  background-color: rgb(128, 128, 128);
}

.swiper-button-prev::after {
  background: url('./../assets/icons/prev.png');
  font-size: 25px;
  display: block;
  color: white;
}

.swiper-button-next::after {
  background: url('./../assets/icons/next.png');
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
  height: 40px;
  padding-bottom: 8px;
}

.btn_slider {
  height: 48px;
  margin-right: 10px;
  z-index: 10;
}

.btn_bookmark {
  width: 60px;
  height: 48px;
  z-index: 10;
}

.outlined-text {
  color: white;
  text-shadow:
    -1px -1px 0 #979797,
    1px -1px 0 #979797,
    -1px 1px 0 #979797,
    1px 1px 0 #979797;
}

/* Medium screens, from 1000px to 1400px */
@media (min-width: 1000px) and (max-width: 1400px) {
  .mySwiper {
    width: 100%;
    height: 600px;
    margin-top: 5px;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    max-width: 1000px;
    height: 600px;
    object-fit: cover;
    border-radius: 40px;
    border: 1px solid #3b82f6;
  }

  .mySwiper .swiper-slide {
    width: 1000px;
  }

  .mySwiper .swiper-button-prev {
    left: calc(50% - 480px);
  }

  .mySwiper .swiper-button-next {
    right: calc(50% - 480px);
  }
}

/* Small screens, less than 1000px */
@media (max-width: 1000px) {
  .mySwiper {
    width: 100%;
    height: 450px;
    margin-top: 5px;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    max-width: 650px;
    height: 450px;
    object-fit: cover;
    border-radius: 40px;
    border: 1px solid #3b82f6;
  }

  .mySwiper .swiper-slide {
    width: 650px;
  }

  .mySwiper .swiper-button-prev {
    left: calc(50% - 300px);
  }

  .mySwiper .swiper-button-next {
    right: calc(50% - 300px);
  }

  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next {
    width: 40px;
    height: 60px;
  }
}

/* Extra small screens, less than 600px */
@media (max-width: 650px) {
  .mySwiper {
    width: 100%;
    height: 350px;
    margin-top: 5px;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    max-width: 450px;
    height: 350px;
    object-fit: cover;
    border-radius: 40px;
    border: 1px solid #3b82f6;
  }

  .mySwiper .swiper-slide {
    width: 450px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    visibility: hidden;
  }

  .btn_slider {
    width: 115px;
    height: 40px;
    margin-right: 10px;
  }

  .book_mark {
    width: 28px;
    height: 24px;
    padding-bottom: 2px;
  }

  .btn_bookmark {
    width: 45px;
    height: 40px;
  }
}

/* Extra small screens, less than 600px */
@media (max-width: 450px) {
  .mySwiper {
    width: 100%;
    height: 250px;
    margin-top: 5px;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    max-width: 320px;
    height: 250px;
    object-fit: cover;
    border-radius: 40px;
    border: 1px solid #3b82f6;
  }

  .mySwiper .swiper-slide {
    width: 320px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    visibility: hidden;
  }

  .btn_slider {
    visibility: hidden;
  }

  .btn_bookmark {
    visibility: hidden;
  }
}
</style>
