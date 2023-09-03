// Get movies with genre

export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const { genre } = event.context.params ?? {};
  const uri = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`;

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
