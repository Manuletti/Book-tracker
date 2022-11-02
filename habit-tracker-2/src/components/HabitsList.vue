<script lang="ts"></script>

<template>
  <section class="list-box">
    <nav class="list-menu">
      <button id="add-habit">+</button>
    </nav>
    <h3>Hello, I am HabitsList</h3>
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
