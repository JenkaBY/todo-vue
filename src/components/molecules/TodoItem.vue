<script setup lang="ts">
import { computed } from 'vue'

import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import TodoInput from '@/components/atoms/TodoInput.vue'
import { type TodoTask, useTodoTasksStore } from '@/stores/todoTasksStore'

const task = defineProps<TodoTask>()
const taskStore = useTodoTasksStore()

const inverseTaskCompleted = () => {
  taskStore.changeStatus(task, !task.isCompleted)
}
const completed = computed(() => task.isCompleted)
const description = computed(() => task.description)
</script>

<template>
  <div class="flex flex-row justify-between p-2 bg-none">
    <TaskStatusIcon
      :completed="completed"
      :inactive="false"
      class="m-1.5"
      @icon-clicked="inverseTaskCompleted"
    />
    <TodoInput
      class="w-full pl-2 pr-2"
      :class="completed ? 'line-through' : 'none'"
      :input-value="description"
      :is-disabled="true"
    />
  </div>
</template>

<style scoped></style>
