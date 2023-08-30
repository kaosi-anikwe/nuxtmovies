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
</script>

<style scoped></style>
