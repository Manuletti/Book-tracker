<template>
  <section class="goals-page">
    <h2>Reading goals</h2>
    <q-circular-progress
      class="circular-goal"
      id="books-goal"
      size="200px"
      track-color="light-blue"
      thickness="0.5"
      show-value
      value="15"
      max=100
      reverse
    />
    <label class="goal-label" for="books-goal">Books</label>
    <q-circular-progress
      id="pages-goal"
      size="200px"
      color="pink"
      track-color="light-blue"
      thickness="0.5"
      show-value
      value="257"
      max="1000"
      reverse
    />
    <label class="goal-label" for="pages-goal">Pages</label>    
    <q-circular-progress
      id="minutes-goal"
      size="200px"
      color="pink"
      track-color="light-blue"
      thickness="0.5"
      show-value
      value="2527"
      max="10000"
      reverse
    />
    <label class="goal-label" for="minutes-goal">Minutes</label>
  </section>
</template>

<style lang="scss"></style>
