<script setup>
import { defineProps } from 'vue'

defineProps({
  movie: {
    type: Object,
    required: true
  }
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>

<template>
  <router-link :to="`/movie/${movie.id}`" class="poster_card">
    <div class="image_wrapper">
      <img
        v-if="movie && movie.poster && movie.poster.url"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        class="poster_img"
        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent"
        :src="movie.poster.url"
        :alt="movie.name"
      />
    </div>
    <div class="content_poster">
      <span class="poster_rating">{{ movie.rating.kp.toFixed(1) }}</span>
      <h3 class="poster_name">{{ movie.name }}</h3>
      <span class="poster_year">{{ movie.year }}</span>
      <div class="poster_info">
        <span class="poster_genre" v-if="movie.genres && movie.genres.length > 0">{{
          capitalizeFirstLetter(movie.genres[0].name)
        }}</span>
        <span class="poster_lenght" v-if="movie.movieLength">{{ movie.movieLength }} мин</span>
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

.poster_year {
  display: block;
  font-size: 12px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.8);
  margin-top: 5px;
}

.poster_lenght {
  display: block;
  font-size: 12px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.8);
}

.poster_genre {
  display: block;
  font-size: 12px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.8);
  margin-right: 5px;
}

.poster_year {
  margin-right: 5px;
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
