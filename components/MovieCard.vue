<template>
  <div class="item-wrap">
    <div class="item-image-wrap">
      <NuxtLink :to="`/movies/${movie.id}`">
        <img
          :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          :alt="movie.title"
          class="item-image"
        />
      </NuxtLink>
    </div>
    <div class="item-content">
      <span class="item-year"
        >{{ movie.release_date.split("-")[0] }} <i>Movie</i></span
      >
      <NuxtLink :to="`/movies/${movie.id}`" class="item-title">{{
        movie.title
      }}</NuxtLink>
      <span class="item-genre">Action</span>
    </div>
  </div>
</template>

<script setup>
const { movie } = defineProps(["movie"]);
</script>

<style scoped></style>
