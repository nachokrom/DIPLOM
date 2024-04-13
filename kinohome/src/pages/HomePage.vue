<script setup>
import { SwiperSlide } from 'swiper/vue'

import Header from '@/components/Header/ui.vue'
import Card from '@/components/Card.vue'
import SliderBanner from '@/components/SliderBanner.vue'
import SliderCard from '@/components/SliderCard.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <SliderBanner />
    <div class="container px-2 max-w-7xl mx-auto mt-24">
      <div class="news_movie mb-20">
        <h1 class="font-bold text-white text-4xl mb-5">Новинки</h1>
        <SliderCard>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </SliderCard>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped></style>
