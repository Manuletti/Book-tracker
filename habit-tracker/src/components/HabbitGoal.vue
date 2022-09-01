<script setup lang="ts">
const goals = defineProps<{
  name: string | [];
  goal?: "achive" | "limit";
  amount: number;
  value: number;
  editable: boolean;
}>();
</script>

<template>
  <section class="goals-page">
    <label class="goal-label" for="books-goal">{{ goals.name }}</label>
    <q-circular-progress
      class="goal-progress"
      id="habit-tracker"
      size="150px"
      track-color="pink-8"
      reverse
      show-value
      :value="goals.value"
      :max="goals.amount"
    />
    <!-- This doesn't render in pages and minutes component -->
    <p id="goal" v-if="!goals.editable">Goal: {{ goals.amount }}</p>
    <slot v-else />
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
.title {
  display: flex;
}
</style>
