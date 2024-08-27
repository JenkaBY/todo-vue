<script setup lang="ts">
defineProps<{
  applicationTitle: string
}>()
</script>

<template>
  <span class="title text-4xl font-bold tracking-[0.7em] uppercase text-white">{{
    applicationTitle
  }}</span>
</template>

<style scoped></style>
