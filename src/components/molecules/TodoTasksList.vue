<script setup lang="ts">
import { type TodoTask, useTodoTasksStore } from '@/stores/todoTasksStore'
import TodoItem from '@/components/molecules/TodoItem.vue'
import { computed, ref } from 'vue'
import draggable from 'vuedraggable'
import TaskManagement from '@/components/molecules/TaskManagement.vue'

const dragging = ref<boolean>(false)
const todoTasksStore = useTodoTasksStore()
const tasks = computed<TodoTask[]>(() => {
  return todoTasksStore.filterTodoTasks
})
</script>

<template>
  <draggable
    tag="ul"
    :list="tasks"
    group="tasks"
    @start="dragging = true"
    @end="dragging = false"
    item-key="element.id"
    class="bg-white rounded-t-lg rounded-b-lg shadow-xl shadow-slate-200 divide-y divide-slate-200"
  >
    <template #item="{ element }">
      <TodoItem
        v-bind="element as TodoTask"
        class="task-item first:rounded-t-lg last:rounded-b-lg bg-white cursor-move"
      />
    </template>
    <template #footer>
      <TaskManagement />
    </template>
  </draggable>
</template>

<style scoped></style>
