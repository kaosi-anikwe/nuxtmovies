<template>
  <Movie :movie="movie" />
</template>

<script setup>
definePageMeta({
  layout: "movie",
});
const { id } = useRoute().params;
const uri = `/api/details/${id}`;
const { data: movie } = await useFetch(uri, {
  key: id,
});
if (movie.value.error) {
  throw createError({
    statusCode: 404,
    message: "Movie not found.",
    fatal: true,
  });
}
</script>

<style scoped></style>
