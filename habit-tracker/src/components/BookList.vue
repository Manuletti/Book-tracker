<script setup lang="ts">
import BookItemVue from "./BookItem.vue";
</script>

<template>
  <section class="book-list">
    <div class="book-list-settings">
      <p id="title">Reading</p>
      <q-btn id="add-book" icon="bi-plus-square" size="small" flat />
    </div>
    <BookItemVue />
  </section>
</template>

<style scoped>
.book-list-settings {
  display: flex;
  height: 50px;
  margin: 2%;
  margin-top: 3%;
  margin-bottom: 5%;
}

#title {
  font-size: xx-large;
}
</style>
