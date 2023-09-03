// Handles logic for index page, search, suggestions and genre

import { useMoviesStore } from "~/store/movies";

export const useIndex = async () => {
  let movies = [];
  let text = "";
  let nonIndex = true;
  let error = false;
  const store = useMoviesStore();
  const query = useRoute().query;
  if (query.q) {
    const { data: response } = await useFetch(`/api/search/${query.q}`);
    if (!response.value.error) {
      if (response.value.results) {
        // Get genres
        for (let i = 0; i < response.value.results.length; i++) {
          const genres = useGenre(response.value.results[i].genre_ids);
          response.value.results[i].genres = genres;
        }
      }
      movies = response.value.results;
      text = `Seach results for "${query.q}"`;
      useHead({
        title: `NuxtMovies | Search -"${query.q}"`,
      });
    } else error = true;
  } else if (query.genre) {
    const { data: response } = await useFetch(`/api/genres/${query.genre}`);
    if (!response.value.error) {
      if (response.value.results) {
        // Get genres
        for (let i = 0; i < response.value.results.length; i++) {
          const genres = useGenre(response.value.results[i].genre_ids);
          response.value.results[i].genres = genres;
        }
      }
      movies = response.value.results;
      text = `${query.genre} movies`;
      useHead({
        title: `NuxtMovies | ${query.genre} movies`,
      });
    } else error = true;
  } else if (query.suggestion) {
    const { data: response } = await useFetch(`/api/suggestions/${query.for}`);
    if (!response.value.error) {
      if (response.value.results) {
        // Get genres
        for (let i = 0; i < response.value.results.length; i++) {
          const genres = useGenre(response.value.results[i].genre_ids);
          response.value.results[i].genres = genres;
        }
      }
      movies = response.value.results;
      text = `Suggestions based on "${query.suggestion}"`;
    } else error = true;
  } else {
    // Get movies from store
    movies = store.movies;
    nonIndex = false;
    useHead({
      title: `NuxtMovies | Movies`,
    });
  }
  if (nonIndex) {
    // Add newly gotten movies to store
    for (const movie of movies) {
      store.addMovie(movie);
    }
  }
  return { error, nonIndex, text, movies };
};
