// Handles logic for index page, search, suggestions and genre

import { useMoviesStore } from "~/store/movies";

export const useIndex = async () => {
  let movies = [];
  let text = "";
  let nonIndex = true;
  const store = useMoviesStore();
  const query = useRoute().query;
  if (query.q) {
    console.log(query.q, "QUERY");
    const { data: response } = await useSearch(query.q);
    movies = response.value.results;
    console.log(response.value, "SCOPPED");
    text = `Seach results for "${query.q}"`;
    useHead({
      title: `NuxtMovies | Search -"${query.q}"`,
    });
  } else if (query.genre) {
    const { data: response } = await useFetch(`/api/genres/${query.genre}`);
    movies = response.value.results;
    text = `${query.genre} movies`;
    useHead({
      title: `NuxtMovies | ${query.genre} movies`,
    });
  } else if (query.suggestion) {
    const { data: response } = await useFetch(`/api/suggestions/${query.for}`);
    movies = response.value.results;
    text = `Suggestions based on "${query.suggestion}"`;
  } else {
    // Get movies from store
    movies = store.movies;
    nonIndex = false;
  }
  if (nonIndex) {
    // Add newly gotten movies to store
    for (const movie of movies) {
      store.addMovie(movie);
    }
  }
  console.log(movies, "FROM USEINDEX");
  return { nonIndex, text, movies };
};
