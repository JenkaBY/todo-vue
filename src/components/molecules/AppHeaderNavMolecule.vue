<script setup lang="ts">
import AppTitleAtom from '@/components/atoms/AppTitleAtom.vue'

defineProps<{
  applicationTitle: string
}>()
const moonUnicode = '&#9790;'
</script>

<template>
  <div class="flex flex-row justify-between">
    <AppTitleAtom :application-title="applicationTitle" />
    <span v-html="moonUnicode" class="text-3xl items-center"></span>
  </div>
</template>

<style scoped></style>
