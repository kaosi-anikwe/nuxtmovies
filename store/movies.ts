import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    movies: [] as any[],
  }),
  actions: {
    addMovie(movie: any) {
      // check if movie already in store
      const exists = this.movies.some(
        (obj: any) => (obj as any).id === movie.id
      );
      if (!exists) {
        const newTask = {
          id: movie.id,
          genres: [] as any[],
          title: movie.title,
          overview: movie.overview,
          genre_ids: movie.genre_ids,
          vote_count: movie.vote_count,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          backdrop_path: movie.backdrop_path,
          imdb_id: movie.imdb_id ? movie.imdb_id : null,
        };
        // Get genres
        const genres = useGenre(newTask.genre_ids);
        newTask.genres = genres;
        this.movies.push(newTask);
      } else {
        // add IMDb id
        for (const oldMovie of this.movies) {
          if (oldMovie.id === movie.id && !oldMovie.imdb_id) {
            oldMovie.imdb_id = movie.imdb_id;
          }
        }
      }
    },
  },
  persist: true,
});
