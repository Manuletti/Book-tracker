<template>
  <section class="book-item">
    <div class="card">
      <div class="book-info">
        <p id="book-title">The Lord of the Rings</p>
        <p id="author">J.R.R. Tolkien</p>
      </div>
      <div class="settings">
        <q-btn id="book-edit" icon="bi-pencil" size="small" flat />
        <q-btn id="book-delete" icon="bi-trash3" size="small" flat />
      </div>
    </div>
    <q-linear-progress rounded size="20px" value="0.57" class="book-progress" />
  </section>
</template>

<style scoped>
.card {
  display: flex;
}
#book-title {
  font-size: x-large;
}
</style>
