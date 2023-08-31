<template>
  <div>
    <Header />
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
