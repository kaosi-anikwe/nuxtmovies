export default defineEventHandler(async (event) => {
  const { id } = event.context.params ?? {};
  const { tmdbKey } = useRuntimeConfig();
  const uri = `https://api.themoviedb.org/3/movie/${id}`;
  const data = await $fetch(uri, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbKey}`,
    },
  });
  return data;
});
