<template>
  <div class="item-wrap">
    <div class="item-image-wrap">
      <NuxtLink :to="`/movies/${movie.id}`">
        <img
          :src="
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : '/images/no-image-portrait.png'
          "
          :alt="movie.title"
          class="item-image"
        />
      </NuxtLink>
    </div>
    <div class="item-content">
      <span v-if="movie.release_date" class="item-year"
        >{{ movie.release_date.split("-")[0] }} <i>Movie</i></span
      >
      <NuxtLink :to="`/movies/${movie.id}`" class="item-title">{{
        movie.title
      }}</NuxtLink>
      <span class="item-genre">{{ movie.genres.join(", ") }}</span>
    </div>
  </div>
</template>

<script setup>
const { movie } = defineProps(["movie"]);
</script>

<style scoped></style>
