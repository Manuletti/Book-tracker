<script setup lang="ts">
import ListHabitUnitVue from "./ListHabitUnit.vue";
</script>

<template>
  <section class="list-box">
    <nav class="list-menu">
      <button id="add-habit">+</button>
    </nav>
    <div class="list">
      <ListHabitUnitVue />
    </div>
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
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#add-habit {
  font-size: x-large;
}
</style>
