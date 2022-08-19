<template>
  <section class="goals-page">
    <h2>Reading goals</h2>
    <q-circular-progress
      id="books-goal"
      indeterminate
      size="200px"
      color="pink"
      track-color="light-blue"
      thickness="0.5"
      show-value
    />
    <label for="books-goal">Books</label>
  </section>
</template>

<style>
#books-goal {
  font-size: xx-small;
}
</style>
