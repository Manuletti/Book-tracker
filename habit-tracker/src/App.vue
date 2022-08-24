<script setup lang="ts">
import HabbitGoalVue from "./components/HabbitGoal.vue";
import BookListVue from "./components/BookList.vue";
import FinishedListVue from "./components/FinishedList.vue";
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
    <h2 class="habit-title">Book tracker</h2>
    <HabbitGoalVue v-bind="readingGoal" />
    <BookListVue />
    <FinishedListVue />
  </div>
</template>
