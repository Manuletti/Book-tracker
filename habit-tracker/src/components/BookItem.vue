<template>
  <section class="book-item">
    <h5>The Lord of the Rings</h5>
    <q-linear-progress
      rounded
      size="20px"
      value="0.57"
      color="warning"
      class="book-progress"
    />
    <div class="settings">
      <q-btn id="book-edit" icon="bi-pencil" flat />
      <q-btn id="book-delete" icon="bi-trash3" flat />
    </div>
  </section>
</template>
