<script setup lang="ts">
import { useTodoTasksStore } from '@/stores/todaTasks'
import TodoItem from '@/components/molecules/TodoItem.vue'

const todoTasksStore = useTodoTasksStore()
</script>

<template>
  <ul
    class="bg-white rounded-t-lg rounded-b-lg shadow-xl shadow-slate-200 divide-y divide-slate-200"
  >
    <li
      v-for="task in todoTasksStore.tasks"
      :key="task.id"
      class="first:rounded-t-lg last:rounded-b-lg bg-white"
    >
      <TodoItem :item="task"></TodoItem>
    </li>
  </ul>
</template>

<style scoped></style>
