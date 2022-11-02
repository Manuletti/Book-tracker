<script setup lang="ts">
import HabitListVue from "./components/HabitsList.vue";
import HabitViewVue from "./components/HabitView.vue";
</script>

<template>
  <section class="body">
    <HabitListVue />
    <HabitViewVue />
  </section>
</template>

<style>
.body {
  display: flex;
  gap: 2rem;

}
</style>
