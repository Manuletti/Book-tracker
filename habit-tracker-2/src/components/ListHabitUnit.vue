<template>
  <section class="list-unit">
    <q-circular-progress
      show-value
      value="37"
      max="76"
      size="125px"
      thickness="0.2"
      color="green"
      track-color="lime"
      class="q-ma-md"
      >37 | 76</q-circular-progress
    >
    <h3 class="habit-title">Meditation</h3>
  </section>
</template>

<style>
.list-unit {
  display: flex;
  gap: 1rem;

  width: 426px;
  height: 160px;

  background: #f6fde7;
  border: 3px solid #2cb832;
  border-radius: 10px;
}
.habit-title {
  font-weight: lighter;
}
#goal,
#achived {
  position: absolute;
  font-size: 27px;
  color: #000000;
}
</style>
