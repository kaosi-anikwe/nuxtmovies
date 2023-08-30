export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const uri = "https://api.themoviedb.org/3/discover/movie";

  try {
    const response = await $fetch(uri, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${tmdbKey}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return { error: "An error occurred while fetching data." };
  }
});
