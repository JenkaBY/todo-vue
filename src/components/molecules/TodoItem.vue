<script setup lang="ts">
import { computed } from 'vue'

import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import TodoInput from '@/components/atoms/TodoInput.vue'
import { type TodoTask, TodoTaskStatus } from '@/stores/todoTasks'

interface TodoItemProps {
  item: TodoTask
}

const todoTask = defineProps<TodoItemProps>()

const isCompletedTask = computed<boolean>(() => {
  return todoTask.item.status === TodoTaskStatus.COMPLETED
})
</script>

<template>
  <div class="flex flex-row justify-between p-2 bg-none">
    <TaskStatusIcon :completed="isCompletedTask" :inactive="false" class="m-1.5" />
    <TodoInput
      class="w-full pl-2 pr-2"
      :input-value="todoTask.item.description"
      place-holder=""
      :is-disabled="true"
    />
  </div>
</template>

<style scoped></style>
