<script setup lang="ts">
import HabitListUnitVue from "./HabitListUnit.vue";
</script>

<template>
  <section class="list-box">
    <nav class="list-menu">
      <button id="add-habit">+</button>
    </nav>
    <HabitListUnitVue />
  </section>
</template>

<style>
.list-box {
  /* Habits list */

  box-sizing: border-box;

  position: absolute;
  width: 500px;
  height: 1000px;
  left: 50px;
  top: 50px;

  background: #f7f7f7;
  border: 1px solid #a5a5a5;
}
#add-habit {
  font-size: x-large;
}
</style>
