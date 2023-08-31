// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NuxtMovies",
      link: [{ rel: "icon", type: "image/png", href: "/favicon(blue).png" }],
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
  runtimeConfig: {
    tmdbKey: process.env.TMDB_PRIVATE_KEY,
  },
});
