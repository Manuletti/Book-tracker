<template>
  <q-circular-progress
    :value="value"
    size="300px"
    color="orange"
    track-color="blue"
    class="q-ma-md"
    reverse
    angle="90"
    show-value
    :min="min"
    :max="max"
    thickness="0.5"
    animation-speed="500"
  />
  <q-slider
    name="pages"
    label-always
    :min="min"
    :max="max"
    v-model="value"
    color="blue"
    track-color="orange"
  />
</template>

<script setup>
import { ref } from "vue";

let value = ref(456);
const min = ref(0)
const max = ref(756)


</script>

<style lang="sass">
$primarycolor: red
</style>
