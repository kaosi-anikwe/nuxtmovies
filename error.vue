<template>
  <main>
    <div class="wrap-content">
      <h1 class="text-center text-9xl text-customLightBlue">
        {{ error.statusCode }}
      </h1>
      <div class="text-center my-5 text-4xl">
        <p>{{ error.message }}</p>
        <button class="my-5 btn text-lg px-6 py-2" @click="handleClearError">
          Go Home...
        </button>
        <div v-html="error.stack" class="w-[80%]"></div>
      </div>
      <div class=""></div>
    </div>
  </main>
</template>

<script setup>
const { error: error } = defineProps(["error"]);
useHead({
  title: `NuxtMovies | Error ${error.statusCode}`,
});
const handleClearError = () => {
  clearError({ redirect: "/" });
};
  console.log(error);
</script>

<style>
pre {
  margin-top: 2rem;
  font-size: 17px;
  text-align: left;
}
</style>
