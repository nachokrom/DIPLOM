<script setup></script>

<template>
  <router-link to="movie/:id" class="poster_card">
    <div class="image_wrapper">
      <img
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        class="poster_img"
        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent"
        src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a3ae9e25-5b10-42f3-96ae-5d707fc6a1bc/300x450"
        alt="Название фильма"
      />
    </div>
    <div class="content_poster">
      <span class="poster_rating">9.2</span>
      <h3 class="poster_name">Чёрное зеркало</h3>
      <div class="poster_info">
        <span class="poster_year">2011</span>
        <span class="poster_lenght">1 ч 52 мин</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.poster_card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  color: #fff;
}

.image_wrapper {
  position: relative;
  display: block;
  border-radius: 16px;
  padding-top: 150%;
  background-color: #111214;
}

.image_wrapper::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
}

.poster_img {
  display: block;
  overflow: hidden;
  border-radius: 16px;
}

.content_poster {
  z-index: 2;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 23px 20px;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  transition:
    opacity 0.3s,
    visibility 0.3s,
    background-color 0.3s;
  position: absolute;
  border-radius: 16px;
  top: 0;
  left: 0;
}

.poster_rating {
  position: absolute;
  top: 23px;
  left: 20px;
  font-size: 15px;
  line-height: 24px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: 400;
  background-color: hsla(120, 100%, 50%, 0.76);
  border-radius: 5px;
}

.poster_name {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
}

.poster_info {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.poster_year,
.poster_lenght {
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.8);
}

.poster_year {
  margin-right: 12px;
}

@media (min-width: 1025px) {
  .poster_card {
    transition: transform 0.3s;
  }

  .poster_card:hover .content_poster {
    opacity: 1;
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.85);
  }
}
</style>
