import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", (app) => {
    if (process.browser) {
      app.$nuxt.$pinia.use(piniaPluginPersistedstate);
    }
  });
});
