<script setup>
import  Header  from '@/components/Header/ui.vue';
import Card from '@/components/Card.vue';
import SliderBanner from '@/components/SliderBanner.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>

    <Header />
    <main>
        <SliderBanner /> 
        <div class="container px-2 max-w-7xl mx-auto">
            <Card />
        </div>
    </main>  
    <Footer />

</template>
