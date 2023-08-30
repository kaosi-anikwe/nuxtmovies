// Makes the API to search by query
export const useSearch = async (query: any) => {
  const search = async () => {
    const data = await useFetch(`/api/search/${query}`, { key: `${query}` });
    return data;
  };
  return await search();
};
