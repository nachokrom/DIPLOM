<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import  axios  from 'axios';

import  Header  from '@/components/Header/ui.vue';
import Loader from '@/components/Loader.vue';
import Footer from '@/components/Footer.vue';

const authStore = useAuthStore();

const news = ref();
const showLoader = ref(false);


/*const getAllNews = async () => {
  try {
    const response = await axios.get(`https://kinohome-af875-default-rtdb.europe-west1.firebasedatabase.app/news.json`)
    console.log(response.data);
  } catch (err) {
    console.log(err.response);
  }
}*/

const getAllNews = async () => {
  showLoader.value = true; 
  try {
    const response = await axios.get(`https://kinohome-af875-default-rtdb.europe-west1.firebasedatabase.app/news.json`);
    news.value = response.data; 
    showLoader.value = false; 
  } catch (err) {
    console.error(err.response); 
    showLoader.value = false;
  }
};

onMounted(() => {
  getAllNews();
})


</script>

<template>
  <Header />
  <main>
    <div>
      <h2 class="text-white">News</h2>
      <Loader v-if="showLoader"/>
      <div class="flex flex-column gap-3" v-else>
        
        <div class="card_news bg-white w-3/5 h-52 border-spacing-4" v-for="(newItem, i) in news" :key="i" >
          <h1 class="text-black text-2xl bottom-2"> {{ newItem.name }} </h1>
          <p class="text-black text-xs"> {{ newItem.type }} </p>
        </div>
        
      </div>
    </div>
  </main>
  <Footer />
</template>

<!-- https://kinohome-af875-default-rtdb.europe-west1.firebasedatabase.app/ -->

<style scoped>

.card_news {
  margin: 15px;
}

</style>