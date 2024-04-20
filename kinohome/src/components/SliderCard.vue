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
    class="swiper_card"
    :onSwiper="onSwiper"
    :breakpoints="{
      '320': { slidesPerView: 3.5, spaceBetween: 10 },
      '451': { slidesPerView: 5, spaceBetween: 10 },
      '651': { slidesPerView: 5.5, spaceBetween: 10 },
      '1000': { slidesPerView: 6, spaceBetween: 20 },
      '1400': { slidesPerView: 6, spaceBetween: 20 }
    }"
    :navigation="{
      nextEl: '.card-button-next',
      prevEl: '.card-button-prev'
    }"
  >
    <slot></slot>

    <div v-show="!isBeginning" :ref="prevCardButtonRef" class="card-button-prev"></div>
    <div v-show="!isEnd" :ref="nextCardButtonRef" class="card-button-next"></div>
  </Swiper>
</template>

<style scoped>
.swiper_card {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  padding: 0 8px;
}

.card-button-prev,
.card-button-next {
  width: 50px;
  height: 70px;
  background-color: rgba(128, 128, 128, 0.247);
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  color: white;
  z-index: 10;
  border-radius: 8px;
}

.card-button-prev::after {
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

.card-button-next::after {
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

.swiper_card .card-button-prev {
  left: calc(50% - 600px);
}

.swiper_card .card-button-next {
  right: calc(50% - 600px);
}

.swiper_card .card-button-prev:hover,
.swiper_card .card-button-next:hover {
  background-color: rgba(128, 128, 128, 0.644);
  cursor: pointer;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .swiper_card {
    max-width: 1000px;
  }
  .swiper_card .card-button-prev {
    left: calc(50% - 480px);
  }
  .swiper_card .card-button-next {
    right: calc(50% - 480px);
  }
  .card-button-prev,
  .card-button-next {
    width: 40px;
    height: 60px;
  }
}

@media (max-width: 1000px) {
  .swiper_card {
    max-width: 1000px;
  }
  .card-button-prev,
  .card-button-next {
    visibility: hidden;
  }
}

@media (max-width: 650px) {
  .swiper_card {
    max-width: 650px;
  }

  .card-button-prev,
  .card-button-next {
    visibility: hidden;
  }
}

@media (max-width: 450px) {
  .swiper_card {
    max-width: 450px;
  }

  .card-button-prev,
  .card-button-next {
    visibility: hidden;
  }
}
</style>
