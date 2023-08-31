<template>
  <div>
    <MovieHeader />
    <main>
      <Loader v-if="isLoading" />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
const isLoading = useState("isLoading");
</script>

<style scoped>
main {
  padding-top: 0;
}
</style>
