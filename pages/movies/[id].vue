<template>
  <Movie :movie="movie" />
</template>

<script setup>
definePageMeta({
  layout: "movie",
});
const { movie } = await useDetails();
</script>
