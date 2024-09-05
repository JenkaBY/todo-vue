<script setup lang="ts">
import { ref } from 'vue'
import { app } from '@/constants/constants'
import AppTitle from '@/components/atoms/AppTitle.vue'

const applicationTitle = ref<string>(app.title)
</script>

<template>
  <div class="flex flex-row justify-between">
    <AppTitle :application-title="applicationTitle" />
    <span class="text-3xl items-center">☾</span>
  </div>
</template>


