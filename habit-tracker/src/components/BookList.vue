<script setup lang="ts">
import BookItemVue from "./BookItem.vue";
</script>

<template>
  <section class="book-list">
    <div class="book-list-settings"></div>
    <BookItemVue />
  </section>
</template>

<style scoped>
.book-list-settings {
  display: flex;
  margin: 2%;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>
