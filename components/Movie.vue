<template>
  <div class="relative">
    <div class="bigsize-header">
      <section class="big-teaser-wrap active">
        <div
          class="big-teaser-image"
          :style="
            movie.backdrop_path
              ? `background-image: url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
              : `background-image: url(/images/no-image-landscape.png)`
          "
        ></div>
        <div class="wrap">
          <div class="big-teaser-content">
            <div class="big-teaser-data-wrap">
              <div class="subpage-poster-wrap-mobile">
                <img
                  :src="
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : '@/assets/images/no-image-portrait.png'
                  "
                  :alt="movie.title"
                  class="base"
                  width="120"
                  height="180"
                />
                <img
                  :src="
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : '/images/no-image-portrait.png'
                  "
                  :alt="movie.title"
                  class="real"
                  width="120"
                  height="180"
                />
              </div>
              <div class="big-teaser-item-data">
                <span v-if="movie.release_date" class="item-year">
                  {{ movie.release_date.split("-")[0] }}, <i>Movie</i>
                </span>
                <span class="item-title">
                  {{ movie.title }}
                </span>
                <span class="item-genre">
                  <NuxtLink
                    v-for="genre in movie.genres"
                    :to="`/genres/?genre=${genre.name}`"
                    >{{ genre.name }}</NuxtLink
                  >
                </span>
              </div>
              <div class="big-teaser-buttons">
                <span class="button-trailer">
                  <i class="icon-trailer"> </i>
                  Watch Trailer
                </span>
                <NuxtLink
                  :to="`https://themoviedb.org/movie/${movie.id}`"
                  target="_blank"
                  class="button-tmdb-rating"
                >
                  <i>
                    <b>{{ movie.vote_average }}</b>
                    TMDb
                  </i>
                </NuxtLink>
                <NuxtLink
                  :to="`https://www.imdb.com/title/${movie.imdb_id}`"
                  target="_blank"
                  class="button-imdb-rating"
                >
                  <i> {{ movie.vote_count }} Vote Count</i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="subpage-content active">
      <div class="wrap">
        <div class="subpage-overview">
          <h2>Overview</h2>
          <p>
            {{ movie.overview }}
          </p>
        </div>
        <div class="subpage-sidebar">
          <div class="subpage-poster-wrap">
            <div class="item-actions">
              <NuxtLink
                :to="`/suggestions?for=${movie.id}&suggestion=${movie.title}`"
                class="has-suggestion"
              >
                <i class="icon-suggest"></i>
              </NuxtLink>
            </div>
            <img
              :src="
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : '/images/no-image-portrait.png'
              "
              :alt="movie.title"
              class="base"
              width="272"
              height="408"
            />
            <img
              :src="
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : '/images/no-image-portrait.png'
              "
              :alt="movie.title"
              class="real"
              width="272"
              height="408"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { movie } = defineProps(["movie"]);
useHead({
  title: `NuxtMovies - ${movie.title}`,
});
</script>

<style scoped></style>
