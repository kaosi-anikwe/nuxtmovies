// Search for movies with query

import { useGenre } from "~/composables/useGenre";

export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const { query } = event.context.params ?? {};
  const uri = `https://api.themoviedb.org/3/search/movie?query=${query}`;

  try {
    const data: any = await $fetch(uri, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tmdbKey}`,
      },
    });
    if (data.results) {
      // Get genres
      for (let i = 0; i < data.results.length; i++) {
        const genres = useGenre(data.results[i].genre_ids);
        data.results[i].genres = genres;
      }
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: "An error occurred while fetching data." };
  }
});
