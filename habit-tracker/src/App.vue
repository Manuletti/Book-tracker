<script setup lang="ts">
import HabbitGoalVue from "./components/HabbitGoal.vue";
import BookListVue from "./components/BookList.vue";
import FinishedListVue from "./components/FinishedList.vue";
import BookList from "./components/BookList.vue";
const readingGoal = {
  name: "Books",
  goal: "achive",
  amount: 15,
  value: 12,
  timeGoal: 3000,
  minutes: 2456,
  pagesGoal: 2000,
  pages: 1345,
};
console.log(readingGoal);
</script>

<template>
  <div class="book-tracker-body">
    <h2 class="habit-title">Book tracker</h2>
    <div class="goals">
      <HabbitGoalVue v-bind="readingGoal" />
      <HabbitGoalVue
        class="time-reading-goal"
        name="Pages"
        :amount="readingGoal.pagesGoal"
        :value="readingGoal.pages"
      />
      <HabbitGoalVue
        class="pages-score"
        name="Minutes"
        :amount="readingGoal.timeGoal"
        :value="readingGoal.minutes"
      />
    </div>
    <BookList />
    <FinishedListVue />
  </div>
</template>

<style scoped>
.goals {
  display: flex;
  gap: 1rem;
}
</style>
