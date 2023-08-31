<template>
  <div>
    <Header />
    <main>
      <Loader v-if="isLoading" />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useMoviesStore } from "~/store/movies";
const isLoading = useState("isLoading");
// add movies to store when app is created
const { data: movieResponse } = await useFetch("/api/movies");
const movies = movieResponse.value.results;
const movieStore = useMoviesStore();
for (const movie of movies) {
  movieStore.addMovie(movie);
}
</script>
