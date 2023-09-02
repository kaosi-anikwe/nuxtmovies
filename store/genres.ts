import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export const useGenreStore = defineStore("genres", {
  state: () => ({
    genres: [],
  }),
  actions: {
    addGenres(genres: any) {
      this.genres = genres;
    },
  },
  persist: true,
});
