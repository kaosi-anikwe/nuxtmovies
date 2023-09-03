// Search for movies with query

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
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { error: "An error occurred while fetching data." };
  }
});
