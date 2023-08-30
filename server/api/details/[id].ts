// Get movie detals with id

export default defineEventHandler(async (event) => {
  const { id } = event.context.params ?? {};
  const { tmdbKey } = useRuntimeConfig();
  const uri = `https://api.themoviedb.org/3/movie/${id}`;

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
