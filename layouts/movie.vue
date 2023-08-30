<template>
  <div>
    <MovieHeader />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped>
main {
  padding-top: 0;
}
</style>
