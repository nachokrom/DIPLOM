<script setup>
import { ref } from 'vue'
import Header from '@/components/Header/ui.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
import ButtonInfo from '@/components/ButtonInfo.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import Tabs from '@/components/Tabs.vue'

const showFullDescription = ref(false)
const fullDescription =
  'После событий первой части суперсемейка пользуется повышенным вниманием со стороны журналистов. Неожиданно оказалось, что обаятельная Миссис Исключительная гораздо лучше смотрится на экране телевизора, чем её муж. Мистеру Исключительному все чаще приходится сидеть дома и приглядывать за детьми, у каждого из которых есть свои причины быть недовольным собственными суперспособностями. Однако семейным проблемам предстоит отступить на второй план, когда окажется, что спокойствию Суперсемейки угрожает новый могущественный враг.'

const tabs = [
  { name: 'description', label: 'Описание' },
  { name: 'images', label: 'Изображения' }
]
const selectedTab = ref('description')

const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>

<template>
  <Header />
  <main>
    <section class="movie_banner">
      <div class="banner_height"></div>
      <div class="banner_bg"></div>
      <div class="container mx-auto max-w-7xl px-2 banner_container">
        <div class="banner_content">
          <div class="banner_title">
            <h1 class="movie_title">Суперсемейка 2 Смотреть онлайн</h1>
          </div>

          <div class="banner_category">
            <span class="category_raiting">7.2</span>
            <span class="category_item">2020</span>
            <span class="category_item">Комедия</span>
            <span class="category_item">6+</span>
            <span class="category_item">США</span>
            <span class="category_item">1 ч 50 мин</span>
          </div>

          <p class="banner_description">
            После событий первой части суперсемейка пользуется повышенным вниманием со стороны
            журналистов. Мистеру Исключительному все чаще приходится сидеть дома и приглядывать за
            детьми.
          </p>

          <div class="banner_casting">
            <div class="author">
              <span class="label_author">Режиссёр:</span>
              <ul class="list_author">
                <li class="author_item">
                  <a href="/actor/:id" class="item_link-author">Брэд Бёрд</a>
                </li>
              </ul>
            </div>
            <div class="actors">
              <span class="label_actors">Актеры:</span>
              <ul class="list_actors">
                <li class="actors_item">
                  <a href="/actor/:id" class="item_link-actors">Крэйг Т.Нельсон</a>
                </li>
                <li class="actors_item">
                  <a href="/actor/:id" class="item_link-actors">Холли Хантер</a>
                </li>
                <li class="actors_item">
                  <a href="/actor/:id" class="item_link-actors">Сара Вауэлл</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="banner_btn">
            <Button text="Смотреть онлайн" />
            <ButtonInfo text="Трейлер" />
            <ButtonInfo iconName="icon1" />
            <ButtonInfo iconName="icon2" />
            <ButtonInfo iconName="icon3" />
          </div>
          <div class="banner_btn-sm">
            <Button text="Смотреть онлайн" />
            <div class="button_sm flex items-center justify-center">
              <ButtonIcon icon="icon4" buttonLabel="Трейлер" />
              <ButtonIcon icon="icon1" buttonLabel="Запомнить" />
              <ButtonIcon icon="icon2" buttonLabel="Оценить" />
              <ButtonIcon icon="icon3" buttonLabel="Поделится" />
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
                {{ fullDescription }}
              </p>

              <!-- Полное описание -->
              <p
                v-show="showFullDescription"
                class="description m-0 text-base font-light text-left text-[hsla(0,0%,100%,.7)]"
              >
                {{ fullDescription }}
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
      <div class="container mx-auto max-w-7xl px-2 pb-20">
        <h1 class="title_actor">Актёры и создатели</h1>
        <div>fsfsf</div>
      </div>
    </section>
  </main>
  <Footer />
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
  left: -1px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #000 3.31%,
    rgba(0, 0, 0, 0.99) 7.71%,
    rgba(0, 0, 0, 0.96) 12.11%,
    rgba(0, 0, 0, 0.91) 16.51%,
    rgba(0, 0, 0, 0.85) 20.91%,
    rgba(0, 0, 0, 0.76) 25.31%,
    rgba(0, 0, 0, 0.67) 29.71%,
    rgba(0, 0, 0, 0.55) 34.11%,
    rgba(0, 0, 0, 0.44) 38.52%,
    rgba(0, 0, 0, 0.33) 42.92%,
    rgba(0, 0, 0, 0.23) 47.32%,
    rgba(0, 0, 0, 0.15) 51.72%,
    rgba(0, 0, 0, 0.08) 56.12%,
    rgba(0, 0, 0, 0.03) 60.52%,
    rgba(0, 0, 0, 0.01) 64.92%,
    transparent 69.32%
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
    rgba(0, 0, 0, 0.03) 55.25%,
    rgba(0, 0, 0, 0.08) 57.88%,
    rgba(0, 0, 0, 0.14) 60.51%,
    rgba(0, 0, 0, 0.23) 63.13%,
    rgba(0, 0, 0, 0.33) 65.76%,
    rgba(0, 0, 0, 0.44) 68.39%,
    rgba(0, 0, 0, 0.55) 71.01%,
    rgba(0, 0, 0, 0.66) 73.64%,
    rgba(0, 0, 0, 0.77) 76.27%,
    rgba(0, 0, 0, 0.85) 78.89%,
    rgba(0, 0, 0, 0.92) 81.52%,
    rgba(0, 0, 0, 0.96) 84.15%,
    rgba(0, 0, 0, 0.99) 86.77%,
    #000 89.4%
  );
}

.banner_height {
  display: block;
  padding-bottom: 45%;
}

.banner_bg {
  background-image: url('./../assets/img/supersemeika.jpg');
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: top 30% right;
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
  margin-right: 7px;
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
  max-width: 800px;
}

.title_actor {
  display: inline-flex;
  align-items: center;
  color: white;
  font-size: 23px;
  line-height: 29px;
  font-weight: 500;
  margin-bottom: 30px;
}

@media (max-width: 1300px) {
  .banner_height {
    padding-bottom: 53%;
  }
}

@media (max-width: 1024px) {
  .banner_height {
    padding-bottom: 56.25%;
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
}
</style>
