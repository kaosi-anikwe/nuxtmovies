<template>
  <div class="wrap-content">
    <div v-if="nonIndex">
      <div class="search-results">
        <h2>{{ text }}</h2>
      </div>
    </div>
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup>
const { nonIndex, text, movies } = await useIndex();
console.log(movies)
</script>

<style scoped></style>
