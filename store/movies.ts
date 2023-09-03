import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore(
  "movies",
  () => {
    const movies = ref([] as any[]);

    const addMovie = (newMovie: any) => {
      // check if movie already in store
      const exists = movies.value.some(
        (obj: any) => (obj as any).id === newMovie.id
      );
      if (!exists) {
        const movieObj = {
          id: newMovie.id,
          genres: [] as any[],
          title: newMovie.title,
          overview: newMovie.overview,
          genre_ids: newMovie.genre_ids,
          vote_count: newMovie.vote_count,
          poster_path: newMovie.poster_path,
          release_date: newMovie.release_date,
          vote_average: newMovie.vote_average,
          backdrop_path: newMovie.backdrop_path,
          imdb_id: newMovie.imdb_id ? newMovie.imdb_id : null,
        };
        // Get genres and add object to store
        const genres = useGenre(movieObj.genre_ids);
        movieObj.genres = genres;
        movies.value.push(movieObj);
      } else {
        // add IMDb id
        for (const oldMovie of movies.value) {
          if (oldMovie.id === newMovie.id && !oldMovie.imdb_id) {
            oldMovie.imdb_id = newMovie.imdb_id;
          }
        }
      }
    };

    return { movies, addMovie };
  },
  { persist: true }
);
