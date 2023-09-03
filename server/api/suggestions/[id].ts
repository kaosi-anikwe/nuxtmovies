// Get similar movies from movie id

export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const { id } = event.context.params ?? {};
  const uri = `https://api.themoviedb.org/3/movie/${id}/similar`;

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
