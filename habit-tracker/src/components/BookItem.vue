<template>
  <section class="book-item">
    <p id="book-title">The Lord of the Rings</p>
    <q-linear-progress rounded size="20px" value="0.57" class="book-progress" />
    <div class="settings">
      <q-btn id="book-edit" icon="bi-pencil" flat />
      <q-btn id="book-delete" icon="bi-trash3" flat />
    </div>
  </section>
</template>

<style scoped>
#book-title {
  font-size: x-large;
}
</style>
