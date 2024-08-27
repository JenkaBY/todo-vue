<script setup lang="ts">
import AppHeaderOrganism from '@/components/organisms/AppHeaderOrganism.vue'
import AppMainOrganism from '@/components/organisms/AppMainOrganism.vue'
</script>

<template>
  <div class="flex flex-col align-top justify-center m-auto columns-1 w-3/5 min-w-96">
    <AppHeaderOrganism application-title="Todo" />
    <AppMainOrganism />
  </div>
</template>

<style scoped></style>
