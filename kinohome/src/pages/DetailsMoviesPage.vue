<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SliderCard from '@/components/SliderCard.vue'
import { SwiperSlide } from 'swiper/vue'
import { addToFavorites, removeFromFavorites, checkIsFavorite } from '@/services/favoriteService'
import { useAuthStore } from '@/stores/auth.js'

import Header from '@/components/Header/ui.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
import ButtonInfo from '@/components/ButtonInfo.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import Tabs from '@/components/Tabs.vue'
import ActorCard from '@/components/ActorCard.vue'
import Popup from '@/components/Popup.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import CopyButton from '@/components/CopyButton.vue'

import { getFilmById } from '@/services/KinohomeServices'

const showOnlinePopup = ref(false)
const showTrailerPopup = ref(false)
const showStarsPopup = ref(false)
const showSharePopup = ref(false)

const selectedStar = ref(null)
const hoveredStar = ref(null)

function saveRating() {
  if (selectedStar.value !== null) {
    localStorage.setItem('movieRating', selectedStar.value)
    showStarsPopup.value = false
    console.log('Оценка сохранена и попап закрыт:', selectedStar.value)
  } else {
    console.log('Оценка не выбрана')
  }
}

const showFullDescription = ref(false)

const tabs = [
  { name: 'description', label: 'Описание' },
  { name: 'images', label: 'Изображения' }
]
const selectedTab = ref('description')

const changeTab = (tabName) => {
  selectedTab.value = tabName
}

const currentUrl = ref(window.location.href)

const movieDetail = ref(null)

const routeDetail = useRoute()

const backgroundStyle = computed(() => {
  if (movieDetail.value?.backdrop?.url) {
    return {
      backgroundImage: `url('${movieDetail.value.backdrop.url}')`
    }
  }
  return {}
})

const directors = computed(() => {
  if (movieDetail.value && movieDetail.value.persons) {
    return movieDetail.value.persons.filter((person) => person.profession === 'режиссеры')
  }
  return []
})

const hasDirectors = computed(() => directors.value.length > 0)

const firstThreeActors = computed(() => {
  if (movieDetail.value && movieDetail.value.persons) {
    return movieDetail.value.persons.filter((person) => person.profession === 'актеры').slice(0, 3)
  }
  return []
})

const filteredPersons = computed(() => {
  if (movieDetail.value && movieDetail.value.persons) {
    return movieDetail.value.persons.filter((person) => person.name)
  }
  return []
})

const router = useRouter()
const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)
const userInfo = authStore.userInfo
const isFavorite = ref(false)

onMounted(async () => {
  const movieId = routeDetail.params.id
  try {
    const data = await getFilmById(movieId)
    movieDetail.value = data
    if (userInfo.userId) {
      isFavorite.value = await checkIsFavorite(movieId)
    }
  } catch (error) {
    console.error('There was an error fetching the movie details:', error)
  }
})

const handleFavoriteClick = async () => {
  if (!token.value) {
    router.push('/signin')
    return
  }

  if (isFavorite.value) {
    await removeFromFavorites(movieDetail.value.id)
    isFavorite.value = false
  } else {
    await addToFavorites(movieDetail.value.id)
    isFavorite.value = true
  }
}
</script>

<template>
  <Header />
  <main>
    <section class="movie_banner">
      <div class="banner_height"></div>
      <div class="banner_bg" :style="backgroundStyle" v-if="movieDetail?.backdrop?.url"></div>
      <div class="container mx-auto max-w-7xl px-2 banner_container">
        <div class="banner_content">
          <div class="banner_title">
            <h1 class="movie_title">{{ movieDetail?.name }}</h1>
          </div>

          <div class="banner_category">
            <span class="category_raiting">{{ movieDetail?.rating.kp.toFixed(1) }}</span>
            <span class="category_item">{{ movieDetail?.year }}</span>
            <span
              class="category_item"
              v-for="(genre, index) in movieDetail?.genres"
              :key="index"
              >{{ genre.name.charAt(0).toUpperCase() + genre.name.slice(1) }}</span
            >
            <span class="category_item" v-if="movieDetail?.ageRating"
              >{{ movieDetail?.ageRating }}+</span
            >
            <span class="category_item">{{ movieDetail?.countries[0].name }}</span>
            <span class="category_item" v-if="movieDetail?.movieLength"
              >{{ movieDetail?.movieLength }} мин</span
            >
          </div>

          <p class="banner_description">
            {{ movieDetail?.shortDescription }}
          </p>

          <div class="banner_casting">
            <div class="author" v-if="hasDirectors">
              <span class="label_author">Режиссёр:</span>
              <ul class="list_author">
                <li class="author_item" v-for="director in directors" :key="director.id">
                  <a :href="`/name/${director.id}`" class="item_link-author">{{ director.name }}</a>
                </li>
              </ul>
            </div>
            <div class="actors" v-if="firstThreeActors.length">
              <span class="label_actors">Актеры:</span>
              <ul class="list_actors">
                <li class="actors_item" v-for="actor in firstThreeActors" :key="actor.id">
                  <a :href="`/name/${actor.id}`" class="item_link-actors">{{ actor.name }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="banner_btn">
            <Button text="Смотреть онлайн" @click="showOnlinePopup = true" />
            <ButtonInfo text="Трейлер" @click="showTrailerPopup = true" />
            <ButtonInfo iconName="icon1" @click="handleFavoriteClick" />
            <ButtonInfo iconName="icon2" @click="showStarsPopup = true" />
            <ButtonInfo iconName="icon3" @click="showSharePopup = true" />
          </div>
          <div class="banner_btn-sm">
            <Button text="Смотреть онлайн" @click="showOnlinePopup = true" />
            <div class="button_sm flex items-center justify-center">
              <ButtonIcon icon="icon4" buttonLabel="Трейлер" @click="showTrailerPopup = true" />
              <ButtonIcon icon="icon1" buttonLabel="Избранное" @click="handleFavoriteClick" />
              <ButtonIcon icon="icon2" buttonLabel="Оценить" @click="showStarsPopup = true" />
              <ButtonIcon icon="icon3" buttonLabel="Поделится" @click="showSharePopup = true" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="description-section">
      <div class="container mx-auto max-w-7xl px-2">
        <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
          <div v-if="selectedTab === 'description'">
            <div class="container_desc">
              <!-- Сокращенное описание -->
              <p
                v-if="!showFullDescription"
                class="description line-clamp-3 m-0 text-base font-light text-left text-[hsla(0,0%,100%,.7)]"
              >
                {{ movieDetail?.description }}
              </p>

              <!-- Полное описание -->
              <p
                v-show="showFullDescription"
                class="description m-0 text-base font-light text-left text-[hsla(0,0%,100%,.7)]"
              >
                {{ movieDetail?.description }}
              </p>

              <!-- Кнопка для показа/скрытия полного описания -->
              <button
                @click="showFullDescription = !showFullDescription"
                class="btn_desc text-blue-600 hover:text-blue-700 transition duration-300 mt-2"
              >
                {{ showFullDescription ? 'Скрыть подробности' : 'Подробное описание' }}
              </button>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
    <section>
      <div class="container mx-auto max-w-7xl px-2 pb-10">
        <h1 class="title_actor font-bold">Актёры и создатели</h1>
        <div>
          <SliderCard>
            <SwiperSlide v-for="person in filteredPersons" :key="person.id">
              <ActorCard :person="person" />
            </SwiperSlide>
          </SliderCard>
        </div>
      </div>
    </section>
  </main>
  <Footer />
  <Popup v-model:isVisible="showOnlinePopup">
    <div
      class="video-container"
      :key="showOnlinePopup"
      style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden"
    >
      <iframe
        class="w-full h-full"
        style="position: absolute; top: 0; left: 0"
        :src="movieDetail?.videos.trailers[0].url"
        :alt="movieDetail?.name"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Popup>
  <Popup v-model:isVisible="showTrailerPopup">
    <div
      class="video-container"
      :key="showTrailerPopup"
      style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden"
    >
      <iframe
        class="w-full h-full"
        style="position: absolute; top: 0; left: 0"
        :src="movieDetail?.videos.trailers[0].url"
        :alt="movieDetail?.videos.trailers[0].name"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </Popup>
  <Popup v-model:isVisible="showStarsPopup">
    <h1 class="stars_title">Оцените по 10-ти бальной шкале</h1>
    <div class="stars-container">
      <div class="grades_popup">
        <label
          class="label_stars"
          v-for="star in 10"
          :key="star"
          :class="{ highlight: hoveredStar >= star || selectedStar >= star }"
          @mouseover="hoveredStar = star"
          @mouseleave="hoveredStar = selectedStar"
          @click="selectedStar = star"
        >
          <input hidden type="radio" :value="star" v-model="selectedStar" />{{ star }}
        </label>
      </div>
      <div class="marks_diapazon">
        <span class="marks_caption">Очень плохо</span>
        <span class="marks_caption">Отлично</span>
      </div>
    </div>
    <div class="flex justify-center">
      <Button text="Поставить оценку" @click="saveRating" />
    </div>
  </Popup>
  <Popup v-model:isVisible="showSharePopup" :maxWidth="'500px'">
    <h1 class="title_share">Поделится</h1>
    <div class="btns_share">
      <ButtonShare :url-to-share="currentUrl" />
    </div>
    <div class="btn_share-copy">
      <CopyButton />
    </div>
  </Popup>
</template>

<style scoped>
.movie_banner {
  position: relative;
}

.movie_banner::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -450px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #121212 0%,
    rgba(18, 18, 18, 0.99) 20%,
    rgba(18, 18, 18, 0.96) 30%,
    rgba(18, 18, 18, 0.91) 40%,
    rgba(18, 18, 18, 0) 100%
  );
}

.movie_banner::after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 100px;
  height: 100%;
  bottom: -1px;
  right: 0;
  background: linear-gradient(
    180deg,
    transparent 50%,
    transparent 52.63%,
    rgba(18, 18, 18, 0.03) 55.25%,
    rgba(18, 18, 18, 0.08) 57.88%,
    rgba(18, 18, 18, 0.14) 60.51%,
    rgba(18, 18, 18, 0.23) 63.13%,
    rgba(18, 18, 18, 0.33) 65.76%,
    rgba(18, 18, 18, 0.44) 68.39%,
    rgba(18, 18, 18, 0.55) 71.01%,
    rgba(18, 18, 18, 0.66) 73.64%,
    rgba(18, 18, 18, 0.77) 76.27%,
    rgba(18, 18, 18, 0.85) 78.89%,
    rgba(18, 18, 18, 0.92) 81.52%,
    rgba(18, 18, 18, 0.96) 84.15%,
    rgba(18, 18, 18, 0.99) 86.77%,
    #121212 89.4%
  );
}

.banner_height {
  display: block;
  padding-bottom: 45%;
}

.banner_bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: top 30% left;
  background-size: cover;
}

.banner_container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
}

.banner_content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
}

.banner_title {
  margin-bottom: 22px;
}

.movie_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  font-size: 32px;
  line-height: 43px;
  font-weight: 600;
  color: white;
}

.banner_category {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
  margin-bottom: 10px;
}

.category_raiting {
  background-color: #12b77c;
  font-size: 15px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: 400;
  border-radius: 5px;
}

.category_item {
  font-weight: 300;
  color: hsla(0, 0%, 100%, 0.6);
}

.banner_description {
  max-width: 500px;
  font-weight: 300;
  font-size: 15px;
  line-height: 25px;
  color: hsla(0, 0%, 100%, 0.9);
  margin: 0 0 20px;
}

.banner_casting {
  margin-bottom: 35px;
}

.author {
  display: flex;
}

.author:not(:last-child) {
  margin-bottom: 12px;
}

.label_author {
  display: block;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-right: 10px;
  color: hsla(0, 0%, 100%, 0.6);
}

.list_author {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.author_item:not(:last-child) {
  margin-right: 7px;
}

.author_item:not(:last-child)::after {
  content: ',';
  cursor: text;
}

.item_link-author {
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  padding: 1px 0;
  color: white;
  position: relative;
  display: inline-block;
  outline: none;
}

.item_link-author::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: hsla(0, 0%, 100%, 0.3);
  transition: height 0.2s;
}

.item_link-author:hover::before {
  height: calc(100% + 1px);
}

.actors {
  display: flex;
}

.actors:not(:last-child) {
  margin-bottom: 12px;
}

.label_actors {
  display: block;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-right: 10px;
  color: hsla(0, 0%, 100%, 0.6);
}

.list_actors {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.actors_item:not(:last-child) {
  margin-right: 10px;
}

.actors_item:not(:last-child)::after {
  content: ',';
  cursor: text;
}

.item_link-actors {
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  padding: 1px 0;
  color: white;
  position: relative;
  display: inline-block;
  outline: none;
}

.item_link-actors::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: hsla(0, 0%, 100%, 0.3);
  transition: height 0.2s;
}

.item_link-actors:hover::before {
  height: calc(100% + 1px);
}

.banner_btn {
  display: flex;
  align-items: center;
}

.container_desc {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
  max-width: 600px;
}

.title_actor {
  display: inline-flex;
  align-items: center;
  color: white;
  font-size: 23px;
  line-height: 29px;
  margin-bottom: 30px;
}

.stars_title {
  display: block;
  text-align: center;
  max-width: 380px;
  margin: 0 auto 35px;
  font-size: 32px;
  line-height: 43px;
  font-weight: 600;
  color: #fff;
}

.stars-container {
  max-width: 90%;
  margin: 0 auto 20px;
}

.grades_popup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.label_stars {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  line-height: 28.8px;
  background-color: #2e2e2e;
  color: #fff;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.label_stars.highlight {
  background-color: #3b82f6;
  color: white;
}

.marks_diapazon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.marks_caption {
  font-size: 13px;
  line-height: 22px;
  color: hsla(0, 0%, 100%, 0.6);
  letter-spacing: 0.05em;
}

.title_share {
  width: 100%;
  font-size: 22px;
  line-height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  margin-bottom: 15px;
}

.btns_share {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn_share-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 1300px) {
  .banner_height {
    padding-bottom: 53%;
  }
}

@media (min-width: 1025px) {
  .label_stars:not(:last-child) {
    margin-right: 12px;
  }
}

@media (max-width: 1024px) {
  .banner_height {
    padding-bottom: 56.25%;
  }
  .grades_popup {
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
  }
  .stars-container {
    max-width: 100%;
    margin-bottom: 40px;
  }
}

@media (max-width: 1000px) {
  .movie_banner {
    margin-bottom: 64px;
  }
  .banner_container {
    padding-top: 40%;
    position: static;
    transform: translateX(0);
  }
  .banner_height {
    display: none;
  }
  .banner_bg {
    bottom: auto;
    height: fit-content;
    padding-bottom: 56.25%;
  }
}

@media (min-width: 576px) {
  .banner_btn {
    display: flex;
  }
  .banner_btn-sm {
    display: none;
  }
}

@media (max-width: 576px) {
  .movie_banner {
    margin-bottom: 35px;
  }
  .banner_container {
    padding-top: 50%;
  }
  .banner_bg {
    padding-bottom: 70%;
    background-position: 50%;
  }
  .banner_btn {
    display: none;
  }
  .banner_btn-sm {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .button_sm {
    width: 100%;
    margin-top: 25px;
  }
  .container_desc {
    margin-bottom: 25px;
  }
  .description {
    font-size: 12.5px;
    line-height: 24px;
  }
  .title_actor {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  .btn_desc {
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;
  }
  .stars_title {
    font-size: 24px;
    line-height: 32px;
  }
  .stars-container {
    margin-bottom: 32px;
  }
  .grades_popup {
    gap: 12px;
  }
  .label_stars {
    width: 53px;
    height: 53px;
    font-size: 16px;
    line-height: 23px;
  }
  .marks_caption {
    font-size: 10px;
    line-height: 20px;
  }
}

@media (max-width: 360px) {
  .label_stars {
    width: 45px;
    height: 45px;
  }
}
</style>
