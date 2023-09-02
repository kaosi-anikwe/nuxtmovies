import { useGenreStore } from "~/store/genres";

// Get genre names with genre ids
export const useGenre = (genreIds: any[]) => {
  const store = useGenreStore();
  const genres = store.genres;
  const movies = []; // movies to be returned
  for (const id of genreIds) {
    for (const genre of genres) {
      if ((genre as any).id === id) {
        movies.push((genre as any).name);
      }
    }
  }
  return movies;
};
