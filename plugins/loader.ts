export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    useState("isLoading", () => true);
  });
  nuxtApp.hook("app:mounted", () => {
    const isLoading = useState("isLoading");
    isLoading.value = false;
  });
});
