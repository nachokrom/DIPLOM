<script setup>
import Header from '@/components/Header/ui.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="main">
    <div class="container px-2 max-w-7xl mx-auto mt-10 mb-10">
      <h1 class="head_films font-bold text-white text-4xl">Избранное</h1>
      <div class="movie_cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  display: block;
}

.head_films {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
}

.movie_cards {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 55px;
}

@media (min-width: 1000px) and (max-width: 1400px) {
  .head_films {
    font-size: 28px;
    max-width: 1400px;
    margin-bottom: 18px;
  }
}

@media (max-width: 1000px) {
  .head_films {
    font-size: 24px;
    max-width: 1000px;
    margin-bottom: 15px;
  }
  .movie_cards {
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .movie_cards {
    margin-bottom: 25px;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 650px) {
  .head_films {
    font-size: 20px;
    max-width: 650px;
    margin-bottom: 10px;
  }
}

@media (max-width: 450px) {
  .head_films {
    font-size: 16px;
    max-width: 450px;
    margin-bottom: 5px;
  }
}
</style>
