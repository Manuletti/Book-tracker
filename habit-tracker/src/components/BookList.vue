<script setup>
import BookItemVue from "./BookItem.vue";
</script>

<template>
  <section class="book-list">
    <div class="book-list-settings">
      <h4>Reading</h4>
      <q-btn id="add-book" icon="bi-plus-square" flat />
    </div>
    <BookItemVue />
  </section>
</template>

<style scoped>
.book-list-settings {
  display: flex;
}
</style>