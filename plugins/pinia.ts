import { useGenreStore } from "~/store/genres";
import { callWithNuxt } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const nuxtApp = useNuxtApp();
    const setup = async () => {
      // add genres
      const { data: genreResponse } = await useFetch("/api/genres");
      const genres = genreResponse.value.genres;
      const genreStore = useGenreStore();
      genreStore.addGenres(genres);
    };
    callWithNuxt(nuxtApp, setup);
  });
});
