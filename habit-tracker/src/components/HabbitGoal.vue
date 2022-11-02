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
    <q-linear-progress
      stripe
      rounded
      size="20px"
      :value="goals.value / 100"
      color="warning"
      class="goal-progress"
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

  border: 1px;
  border-style: solid;
  border-radius: 15px;

}
.goal-label {
  font-size: large;
}
.goal-progress {
  margin: 1rem;
}
.title {
  display: flex;
}
</style>
