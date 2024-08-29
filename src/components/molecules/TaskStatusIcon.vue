<script setup lang="ts">
import { ref } from 'vue'

import CheckIcon from '@/components/atoms/icons/CheckIcon.vue'
import CircleIcon from '@/components/atoms/icons/CircleIcon.vue'

export interface CompletedIconProps {
  completed: boolean
  inactive: boolean
}

const props = withDefaults(defineProps<CompletedIconProps>(), {
  completed: false,
  inactive: true
}) as CompletedIconProps

const completed = ref(props.completed)
</script>

<template>
  <div :class="inactive ? '' : 'cursor-pointer'">
    <CheckIcon
      v-if="completed"
      color="white"
      class="rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border border-grey-100"
    />
    <CircleIcon
      v-if="!completed"
      line-color="stroke-neutral-200"
      :hover-classes="inactive ? 'none' : 'hover:stroke-neutral-800'"
    />
  </div>
</template>

<style scoped></style>
