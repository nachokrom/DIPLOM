<script setup>
import { ref, onMounted } from 'vue'
import { Swiper } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const prevCardButtonRef = ref(null)
const nextCardButtonRef = ref(null)

const swiper = ref(null)

const isBeginning = ref(true)
const isEnd = ref(false)

const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance
  swiperInstance.on('reachBeginning', () => {
    isBeginning.value = true
  })
  swiperInstance.on('reachEnd', () => {
    isEnd.value = true
  })
  swiperInstance.on('fromEdge', () => {
    isBeginning.value = false
    isEnd.value = false
  })
}

onMounted(() => {
  if (swiper.value && prevCardButtonRef.value && nextCardButtonRef.value) {
    swiper.value.params.navigation.prevEl = prevCardButtonRef.value.$el
    swiper.value.params.navigation.nextEl = nextCardButtonRef.value.$el
    swiper.value.navigation.init()
    swiper.value.navigation.update()
  }
})
</script>

<template>
  <Swiper
    :modules="[Navigation]"
    :slidesPerView="6"
    :spaceBetween="50"
    class="swiper_card relative"
    :onSwiper="onSwiper"
    :breakpoints="{
      '320': { slidesPerView: 1, spaceBetween: 20 },
      '651': { slidesPerView: 2, spaceBetween: 40 },
      '1001': { slidesPerView: 6, spaceBetween: 50 }
    }"
    :navigation="{
      nextEl: '.card-button-next',
      prevEl: '.card-button-prev'
    }"
  >
    <slot></slot>

    <div v-show="!isBeginning" ref="prevCardButtonRef" class="card-button-prev"></div>
    <div v-show="!isEnd" ref="nextCardButtonRef" class="card-button-next"></div>
  </Swiper>
</template>

<style scoped>
.swiper_card {
  width: 100%;
  overflow: hidden;
}

.swiper_card .card-button-prev,
.swiper_card .card-button-next {
  width: 50px;
  height: 70px;
  background-color: rgba(128, 128, 128, 0.5);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  z-index: 20;
  border-radius: 8px;
}

.swiper_card .card-button-prev {
  left: calc(50% - 600px);
}

.swiper_card .card-button-next {
  right: calc(50% - 600px);
}

.swiper_card .card-button-prev:hover,
.swiper_card .card-button-next:hover {
  background-color: rgb(128, 128, 128);
}

.swiper_card .card-button-prev::after {
  background: url('./../assets/icons/prevCard.png');
  font-size: 25px;
  display: block;
  color: white;
}

.swiper_card .card-button-next::after {
  background: url('./../assets/icons/nextCard.png');
  font-size: 25px;
  display: block;
  color: white;
}
</style>
