<script setup lang="ts">
import { computed } from 'vue'
import { useTodoTasksStore } from '@/stores/todoTasksStore'
import ItemsLeftCounter from '@/components/atoms/ItemsLeftCounter.vue'

const store = useTodoTasksStore()
const left = computed(() => {
  return store.itemsLeftCount
})
</script>

<template>
  <div class="flex flex-row justify-between items-center p-4 bg-none max-h-2.5">
    <ItemsLeftCounter :count="left" />
  </div>
</template>
