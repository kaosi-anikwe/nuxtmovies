import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useGenreStore = defineStore(
  "genres",
  () => {
    const genres = ref([] as any[]);

    const addGenres = (newGenres: any) => {
      genres.value = newGenres;
    };

    return { genres, addGenres };
  },
  { persist: true }
);
