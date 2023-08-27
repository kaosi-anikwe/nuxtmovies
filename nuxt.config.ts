// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    "pages:extend"(pages) {
      pages.push(
        {
          name: "index",
          path: "/",
          file: "~/index.vue",
        },
        {
          name: "movies",
          path: "/movies",
          file: "~/index.vue",
        }
      );
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
