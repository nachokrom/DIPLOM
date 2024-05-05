<script setup>
import { ref, onMounted } from 'vue'
import { getPopularMovie } from './../services/KinohomeServices'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const bannerCards = ref([])

onMounted(async () => {
  try {
    const BannerResponse = await getPopularMovie()
    bannerCards.value = BannerResponse.docs
  } catch (error) {
    console.error('Ошибка получения данных', error)
  }
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>

<template>
  <Swiper
    :modules="[Navigation, Autoplay]"
    slidesPerView="1.5"
    :centeredSlides="true"
    spaceBetween="10"
    :loop="true"
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
    <SwiperSlide v-for="bannerCard in bannerCards" :key="bannerCard.id">
      <router-link :to="`/movie/${bannerCard.id}`" class="router-link-inactive">
        <img
          v-if="bannerCard && bannerCard.poster && bannerCard.poster.url"
          :src="bannerCard.poster.url"
          :alt="bannerCard.name"
          class="slide-image rounded-lg shadow-md w-full h-full"
        />
      </router-link>
      <div>
        <div class="absolute xl:left-20 lg:left-10 md:left-6 bottom-10">
          <h2
            class="text-white text-shadow xl:text-4xl lg:text-2xl md:text-[12px] font-bold xl:mb-3 lg:mb-2 md:mb-1 outlined-text"
          >
            {{ bannerCard.name }}
          </h2>
          <div
            class="flex items-center justify-start text-white text-shadow xl:text-xl lg:text-base md:text-[10px] xl:mb-3 lg:mb-2 md:mb-2"
          >
            <p class="text-green-500 text-shadow font-semibold mb-0 xl:mr-4 lg:mr-3 md:mr-2">
              {{ bannerCard.rating.kp.toFixed(1) }}
            </p>
            <span class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold">{{
              bannerCard.year
            }}</span>
            <span
              class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold"
              v-if="bannerCard.genres && bannerCard.genres.length > 0"
              >{{ capitalizeFirstLetter(bannerCard.genres[0].name) }}</span
            >
            <span class="xl:mr-4 lg:mr-3 md:mr-2 outlined-text font-semibold"
              >{{ bannerCard.ageRating }}+</span
            >
            <span class="outlined-text font-semibold" v-if="bannerCard.movieLength"
              >{{ bannerCard.movieLength }} мин</span
            >
          </div>
          <p class="text-white text-shadow outlined-text xl:text-xl lg:text-sm md:text-[10px]">
            {{ bannerCard.shortDescription }}
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
  height: 640px;
  margin-top: 5px;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  max-width: 1250px;
  height: 640px;
  object-fit: cover;
  border-radius: 40px;
  border: 1px solid #5a5959;
}

.mySwiper .swiper-slide {
  width: 1250px;
}

.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  width: 50px;
  height: 70px;
  background-color: rgba(128, 128, 128, 0.226);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 10;
  border-radius: 8px;
}

.mySwiper .swiper-button-prev {
  left: calc(50% - 600px);
}

.mySwiper .swiper-button-next {
  right: calc(50% - 600px);
}

.mySwiper .swiper-button-prev:hover,
.mySwiper .swiper-button-next:hover {
  background-color: rgb(128, 128, 128);
}

.swiper-button-prev::after {
  content: '';
  background: url('./../assets/icons/arrow-left.svg') no-repeat center;
  font-size: 25px;
  display: block;
  width: 26px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.swiper-button-next::after {
  content: '';
  background: url('./../assets/icons/arrow-right.svg') no-repeat center;
  font-size: 25px;
  display: block;
  width: 26px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

.banner_bg-slider {
  display: block;
  width: 100%;
  position: relative;
  padding-top: 56.25%;
  border-radius: var(--radius);
  overflow: hidden;
  background-color: #111214;
  color: #fff;
}

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
  .banner_bg-slider {
    padding-top: 58%;
  }
}

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
  .banner_bg-slider {
    padding-top: 58%;
  }
}
</style>
