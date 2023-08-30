// Handles logic for index page, search, suggestions and genre

export const useIndex = async () => {
  let movies = [];
  let text = "";
  let nonIndex = true;
  const query = useRoute().query;
  if (query.q) {
    const { data: response } = await useSearch(query.q);
    movies = response.value;
    text = `Seach results for "${query.q}"`;
    useHead({
      title: `NuxtMovies | Search -"${query.q}"`,
    });
  } else if (query.genre) {
    const { data: response } = await useFetch(`/api/genres/${query.genre}`);
    movies = response.value;
    text = `${query.genre} movies`;
    useHead({
      title: `NuxtMovies | ${query.genre} movies`,
    });
  } else if (query.suggestion) {
    const { data: response } = await useFetch(`/api/suggestions/${query.for}`);
    movies = response.value;
    text = `Suggestions based on "${query.suggestion}"`;
  } else {
    const { data: response } = await useFetch("/api/movies");
    nonIndex = false;
    movies = response.value;
  }
  return { nonIndex, text, movies };
};
