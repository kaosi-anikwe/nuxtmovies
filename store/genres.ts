import { defineStore } from "pinia";

export const useGenreStore = defineStore("genres", {
  state: () => ({
    genres: [],
  }),
  actions: {
    addGenres(genres: any) {
      this.genres = genres;
    },
  },
});
