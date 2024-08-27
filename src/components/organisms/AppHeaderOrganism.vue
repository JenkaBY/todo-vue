<script setup lang="ts">
import AppHeaderNavMolecule from '@/components/molecules/AppHeaderNavMolecule.vue'

defineProps<{
  applicationTitle: string
}>()
</script>

<template>
  <AppHeaderNavMolecule
    :application-title="applicationTitle"
    class="flex flex-row justify-items-start align-top min-h-40"
  />
</template>

<style scoped></style>
