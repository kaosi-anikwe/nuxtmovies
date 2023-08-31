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
      </div>
      <div class=""></div>
    </div>
  </main>
</template>

<script setup>
const { error: error } = defineProps(["error"]);
const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped></style>
