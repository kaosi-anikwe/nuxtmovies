import { useMoviesStore } from "~/store/movies";

export const useDetails = async () => {
  let movie;
  const { id } = useRoute().params;
  const store = useMoviesStore();
  const movies = store.movies;
  const exists = movies.some((obj) => obj.id == id);
  if (exists) {
    movie = movies.find((obj) => obj.id == id);
    if (exists && !movie.imdb_id) {
      // get movie details and update store
      const uri = `/api/details/${id}`;
      const response = await useFetch(uri);
      movie = response.data.value;
      store.addMovie(movie);
    }
  } else {
    const uri = `/api/details/${id}`;
    const response = await useFetch(uri);
    movie = response.data.value;
  }
  // Error handling
  if (movie.error) {
    throw createError({
      statusCode: 404,
      message: "Movie not found.",
      fatal: true,
    });
  }
  return { movie };
};
