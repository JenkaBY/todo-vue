<script setup lang="ts">
import { reactive } from 'vue'

const items = reactive<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
</script>

<template>
  <ul >
    <li v-for="item in items" :key="item">Todo {{ item }}</li>
  </ul>
</template>

<style scoped>

</style>
