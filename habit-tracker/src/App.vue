<script setup lang="ts">
import { ref, reactive } from "vue";
import HabbitGoalVue from "./components/HabbitGoal.vue";
import BookListVue from "./components/BookList.vue";
import FinishedListVue from "./components/FinishedList.vue";

const readingGoal = reactive({
  name: "Books",
  goal: "achive",
  amount: 15,
  value: 12,
  timeGoal: 3000,
  minutes: 2456,
  pagesGoal: 2000,
  pages: 1345,
});

let showSetInput = ref(false);
let newGoal: Ref<any> = ref(null);
function setGoal(): void {
  if (newGoal.value <= 0 || typeof newGoal.value !== "number") {
    showSetInput.value = !showSetInput.value;
    return alert("The goal should be a positive number");
  }
  readingGoal.amount = newGoal;
  showSetInput.value = !showSetInput.value;
}
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
      <button id="set-goal" @click="showSetInput = !showSetInput">
        Set the goal
      </button>
      <input
        id="goal-input"
        type="number"
        v-if="showSetInput"
        v-model="newGoal"
      />
      <button id="goal-submit" @click="setGoal()" v-if="showSetInput">
        Set
      </button>
    </div>
    <BookListVue />
    <FinishedListVue />
  </div>
</template>

<style scoped>
.goals {
  display: flex;
  gap: 1rem;
}
</style>
