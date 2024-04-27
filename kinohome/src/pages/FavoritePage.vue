<script setup>
import Header from '@/components/Header/ui.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main class="container px-2 max-w-7xl mx-auto mt-10 mb-10">
    <h1 class="head_films font-bold text-white text-4xl">Избранное</h1>
    <div class="grid grid-cols-6 gap-4 py-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.head_films {
  max-width: 1264px;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
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
