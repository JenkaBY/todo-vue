<script setup lang="ts">
import TodoInputTask from '@/components/molecules/TodoInputTask.vue'
import TodoTasksList from '@/components/molecules/TodoTasksList.vue'
</script>

<template>
  <main class="max-h-screen">
    <TodoInputTask class="-mt-20" :isTaskCompleted="false" />
    <TodoTasksList class="mt-8 overflow-auto max-h-screen-60" />
  </main>
</template>

<style scoped>
.max-h-screen-60 {
  max-height: 60vh;
}
</style>
