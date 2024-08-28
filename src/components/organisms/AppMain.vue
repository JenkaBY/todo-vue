<script setup lang="ts">

import TodoInputTask from '@/components/molecules/TodoInputTask.vue'
import TodoTasksList from '@/components/molecules/TodoTasksList.vue'
</script>

<template>
  <main class="bg-amber-50">
    <TodoInputTask class="-mt-20" :isTaskCompleted="false"/>
    <TodoTasksList class="mt-8"/>
  </main>
</template>

<style scoped></style>
