<script setup lang="ts">
import { useTodoTasksStore } from '@/stores/todaTasks'

const todoTasksStore = useTodoTasksStore()
</script>

<template>
  <ul>
    <li v-for="task in todoTasksStore.tasks" :key="task.id">{{ task.description }} {{ task.id }} {{ task.status }}</li>
  </ul>
</template>

<style scoped></style>
