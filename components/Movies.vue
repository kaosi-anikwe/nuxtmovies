<template>
  <div class="wrap-content">
    <MovieCard v-for="movie in movies.results" :movie="movie" />
  </div>
</template>

<script setup>
const url = "/api/movies";
const { data: movies } = await useFetch(url);
</script>

<style scoped></style>
