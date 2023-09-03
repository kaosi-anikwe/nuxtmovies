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
const { error, nonIndex, text, movies } = await useIndex();
if (error) {
  throw createError({
    statusCode: 500,
    message: "Internal server error. Please try again later",
    fatal: true,
  });
}
</script>

<style scoped></style>
