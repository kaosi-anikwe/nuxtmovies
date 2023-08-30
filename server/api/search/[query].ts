export default defineEventHandler(async (event) => {
  const { tmdbKey } = useRuntimeConfig();
  const searchTerm = event.context.params;
  const uri = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;
  const data = await $fetch(uri, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbKey}`,
    },
  });
  return data;
});
