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
  editable: false,
  timeGoal: 3000,
  minutes: 2456,
  pagesGoal: 2000,
  pages: 1345,
});

function setGoal() {
  if (readingGoal.amount < 0 || typeof readingGoal.amount !== "number") {
    return alert("The goal should be a positive number");
  }
  readingGoal.editable = !readingGoal.editable;
}
</script>

<template>
  <div class="book-tracker-body">
    <h2 class="habit-title">Book tracker</h2>
    <div class="goals">
      <HabbitGoalVue v-bind="readingGoal">
        <div style="display: flex">
          <p>Goal:</p>
          <input
            id="goal-input"
            type="number"
            min="0"
            v-model="readingGoal.amount"
            @keyup.enter="setGoal()"
          />
        </div>
      </HabbitGoalVue>
      <q-btn
        flat
        id="goal-edit"
        icon="bi-pencil-fill"
        size="xs"
        @click="setGoal()"
      ></q-btn>
      <HabbitGoalVue
        class="time-reading-goal"
        name="Pages"
        editable="false"
        :amount="readingGoal.pagesGoal"
        :value="readingGoal.pages"
      />
      <HabbitGoalVue class="pages-score" name="Minutes" editable="false"
      :amount="readingGoal.timeGoal" :value="readingGoal.minutes" /
    </div>
    <BookListVue />
    <FinishedListVue />
  </div>
</template>

<style scoped>
.goals {
  display: flex;
}
#goal-input {
  width: 50px;
  height: 1.5em;
  margin-left: 1em;
  text-align: center;
}
#goal-edit {
  height: fit-content;
  width: fit-content;
}
</style>
