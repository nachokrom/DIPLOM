<script setup>
import { ref, onMounted } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import Header from '@/components/Header/ui.vue'
import CardSlider from '@/components/CardSlider.vue'
import SliderBanner from '@/components/SliderBanner.vue'
import SliderCard from '@/components/SliderCard.vue'
import Footer from '@/components/Footer.vue'

import {
  getComedies,
  getFantastica,
  getNewFilmsAndSerials,
  getFamily,
  getPremierMovie
} from '@/services/KinohomeServices'

const newMovies = ref([])
const comedies = ref([])
const fantastica = ref([])
const familyMovies = ref([])
const premiers = ref([])

onMounted(async () => {
  try {
    const comediesResponse = await getComedies()
    comedies.value = comediesResponse.docs
  } catch (error) {
    console.error('Ошибка получения данных', error)
  }

  try {
    const fantasticaResponse = await getFantastica()
    fantastica.value = fantasticaResponse.docs
  } catch (fantasticError) {
    console.error('Ошибка получения данных', fantasticError)
  }

  try {
    const newMoviesResponse = await getNewFilmsAndSerials()
    newMovies.value = newMoviesResponse.docs
  } catch (NewFilmsAndSerialsError) {
    console.error('Ошибка получения данных', NewFilmsAndSerialsError)
  }

  try {
    const familyMoviesResponse = await getFamily()
    familyMovies.value = familyMoviesResponse.docs
  } catch (familyMoviesError) {
    console.error('Ошибка получения данных', familyMoviesError)
  }

  try {
    const premierResponse = await getPremierMovie()
    premiers.value = premierResponse.docs
  } catch (premierError) {
    console.error('Ошибка получения данных', premierError)
  }
})
</script>

<template>
  <Header />
  <div>
    <SliderBanner />
  </div>

  <div class="xl:mt-14 lg:mt-9 md:mt-6">
    <div class="xl:mb-14 lg:mb-10 md:mb-10">
      <h1 class="head_section font-bold text-white text-4xl">Новинки 2024</h1>
      <SliderCard>
        <SwiperSlide v-for="newMovie in newMovies" :key="newMovie.id">
          <CardSlider :movie="newMovie" />
        </SwiperSlide>
      </SliderCard>
    </div>
    <div class="xl:mb-14 lg:mb-10 md:mb-10">
      <h1 class="head_section font-bold text-white text-4xl">Стоит посмотреть</h1>
      <SliderCard>
        <SwiperSlide v-for="premier in premiers" :key="premier.id">
          <CardSlider :movie="premier" />
        </SwiperSlide>
      </SliderCard>
    </div>
    <div class="xl:mb-14 lg:mb-10 md:mb-10">
      <h1 class="head_section font-bold text-white text-4xl">Комедия</h1>
      <SliderCard>
        <SwiperSlide v-for="comedy in comedies" :key="comedy.id">
          <CardSlider :movie="comedy" />
        </SwiperSlide>
      </SliderCard>
    </div>
    <div class="xl:mb-14 lg:mb-10 md:mb-10">
      <h1 class="head_section font-bold text-white text-4xl">Фантастика</h1>
      <SliderCard>
        <SwiperSlide v-for="fantastic in fantastica" :key="fantastic.id">
          <CardSlider :movie="fantastic" />
        </SwiperSlide>
      </SliderCard>
    </div>
    <div class="xl:mb-14 lg:mb-10 md:mb-10">
      <h1 class="head_section font-bold text-white text-4xl">Смотрим всей семьёй</h1>
      <SliderCard>
        <SwiperSlide v-for="family in familyMovies" :key="family.id">
          <CardSlider :movie="family" />
        </SwiperSlide>
      </SliderCard>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.swiper-slide {
  width: 200px;
}

.head_section {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  padding: 0 8px;
  margin-bottom: 20px;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .head_section {
    font-size: 28px;
    max-width: 1000px;
    margin-bottom: 18px;
  }
}

@media (max-width: 1000px) {
  .head_section {
    font-size: 24px;
    max-width: 1000px;
    margin-bottom: 15px;
  }
}

@media (max-width: 650px) {
  .head_section {
    font-size: 20px;
    max-width: 650px;
    margin-bottom: 10px;
  }
}

@media (max-width: 450px) {
  .head_section {
    font-size: 16px;
    max-width: 450px;
    margin-bottom: 5px;
  }
}
</style>
