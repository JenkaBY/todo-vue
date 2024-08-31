<script setup lang="ts">
import { type TodoTask, useTodoTasksStore } from '@/stores/todoTasksStore'
import TodoItem from '@/components/molecules/TodoItem.vue'
import { reactive } from 'vue'

const todoTasksStore = useTodoTasksStore()
const tasks = reactive<TodoTask[]>(todoTasksStore.filterTodoTasks)
</script>

<template>
  <ul
    class="bg-white rounded-t-lg rounded-b-lg shadow-xl shadow-slate-200 divide-y divide-slate-200"
  >
    <li v-for="task in tasks" :key="task.id" class="first:rounded-t-lg last:rounded-b-lg bg-white">
      <TodoItem v-bind="task" class="task-item" />
    </li>
  </ul>
</template>

<style scoped></style>
