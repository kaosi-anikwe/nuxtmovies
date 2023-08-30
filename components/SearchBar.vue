<template>
  <div class="search-wrap">
    <div class="wrap">
      <form class="search-form" action="/search">
        <button type="submit">
          <i class="icon-search"></i>
        </button>
        <input
          type="text"
          name="q"
          id="search-input"
          autofocus="autofocus"
          placeholder="Search"
          class="search-input"
        />
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
