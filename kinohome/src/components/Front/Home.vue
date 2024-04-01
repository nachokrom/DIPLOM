<template>
  <div class="container mx-auto">
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>

<script>
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies";

export default {
  components: {
    PopularMovies,
    UpcomingMovies,
  },
  mounted() {
    console.log(
      "Your process.env.VITE_BASE_URL_MOVIE",
      process.env.VITE_BASE_URL_MOVIE
    );
  },
};
</script>

<style></style>
