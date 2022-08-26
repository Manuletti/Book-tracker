<script setup></script>
<template>
  <div>
    <q-btn-dropdown color="blue" dropdown-icon="bi-three-dots">
      <q-item clickable v-close-popup @click="onItemClick">
        <q-item-section>
          <q-item-label>Photos</q-item-label>
        </q-item-section>
      </q-item>
      <!-- <button id="set-goal" @click="showSetInput = !showSetInput">
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
      </button> -->
    </q-btn-dropdown>
  </div>
</template>
