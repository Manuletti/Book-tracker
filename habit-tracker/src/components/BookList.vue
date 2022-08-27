<script setup>
import BookItemVue from "./BookItem.vue";
</script>

<template>
  <section class="book-list">
    <h4>Reading</h4>
    <div class="book-list-settings">
      <q-btn id="add-book" icon="bi-plus-square" flat />
    </div>
    <BookItemVue />
  </section>
</template>
