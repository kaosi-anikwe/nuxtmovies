<template>
  <div>
    <h1>Hello World</h1>
    <div class="container grid grid-cols-6">
      <div v-for="movie in movies.results" class="mx-3 my-2 text-center">
        <NuxtLink :to="`/movies/${movie.id}`">
          <p>{{ movie.original_title }}</p>
        </NuxtLink>
        <p>{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const url = "https://api.themoviedb.org/3/discover/movie";

const { data: movies } = await useFetch(url, {
  method: "get",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzA5MmI3YzliOGIzOGEyNGI3ZjJkNzc1NzFiYWMxNiIsInN1YiI6IjY0ZWI4MjNiYzVjMWVmMDBlNGFhYWY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a-FnPie2oNPpc7Z-9JxLzbC0W67J38SjgLxGGIDNR2g",
  },
});
</script>

<style scoped></style>
