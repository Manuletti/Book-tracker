<script setup lang="ts">
import HabbitGoalVue from "./components/HabbitGoal.vue";
const readingGoal = {
  name: "Books",
  goal: "achive",
  amount: 15,
  value: 3,
};
console.log(readingGoal);
</script>

<template>
  <div class="book-tracker-body">
    <h1 class="habit-title">Book tracker</h1>
    <HabbitGoalVue v-bind="readingGoal" />
  </div>
</template>
