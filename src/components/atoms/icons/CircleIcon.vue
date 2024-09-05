<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    lineColor: string
    hoverClasses: string
  }>(),
  {
    lineColor: 'neutral',
    hoverClasses: 'none'
  }
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    class="size-5 stroke-[0.8]"
    :class="`${props.lineColor} ${props.hoverClasses}`"
  >
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
</template>


