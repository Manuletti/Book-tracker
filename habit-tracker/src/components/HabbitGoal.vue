<script setup lang="ts">
const goals = defineProps<{
  name: string | [];
  goal: "achive" | "limit";
  amount: number;
  value: number;
}>();
console.log(goals);
</script>

<template>
  <section class="goals-page">
    <label class="goal-label" for="books-goal">{{ goals.name }}</label>
    <q-circular-progress
      class="goal-progress"
      id="habit-tracker"
      size="200px"
      track-color="light-blue"
      color="pink"
      reverse
      show-value
      :value="goals.value"
      :max="goals.amount"
    />
    <p>Goal: {{ goals.amount }}</p>
    <p>Left: {{ goals.amount - goals.value }}</p>
  </section>
</template>

<style lang="scss">
.goals-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.goal-label {
  font-size: xx-large;
}
.goal-progress {
  margin: 1rem;
}
</style>
