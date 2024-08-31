<script setup lang="ts">
import { computed } from 'vue'

interface LeftItemsProps {
  count: number
}

const props = defineProps<LeftItemsProps>()
const text = computed(() => {
  return `${props.count} item${props.count === 1 ? '' : 's'} left`
})
</script>

<template>
  <div class="items-left-count">
    <span class="text-xs font-semibold text-slate-400">{{ text }}</span>
  </div>
</template>
