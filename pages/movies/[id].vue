<template>
  <div>
    <p>{{ movie.original_title }}</p>
    <p>{{ movie.release_date }}</p>
    <p>{{ movie.popularity }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://api.themoviedb.org/3/movie/${id}`;
const { data: movie } = await useFetch(uri, {
  method: "get",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzA5MmI3YzliOGIzOGEyNGI3ZjJkNzc1NzFiYWMxNiIsInN1YiI6IjY0ZWI4MjNiYzVjMWVmMDBlNGFhYWY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a-FnPie2oNPpc7Z-9JxLzbC0W67J38SjgLxGGIDNR2g",
  },
  key: id,
});
</script>

<style scoped></style>
