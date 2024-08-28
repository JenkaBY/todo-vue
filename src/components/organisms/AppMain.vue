<script setup lang="ts">
import { reactive } from 'vue'

const items = reactive<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
</script>

<template>
  <main class="bg-amber-50">
    <h2>Just imagine it's a todo list</h2>
    <ul v-for="item in items" :key="item">
      <li>Todo {{ item }}</li>
    </ul>
  </main>
</template>

<style scoped></style>
