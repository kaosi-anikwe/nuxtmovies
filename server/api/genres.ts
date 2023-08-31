// Get list of genres with id and name
export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const uri = "https://api.themoviedb.org/3/genre/movie/list";

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
