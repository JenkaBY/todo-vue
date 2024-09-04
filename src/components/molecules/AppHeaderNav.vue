<script setup lang="ts">
import { inject } from 'vue'

import { providerFunctionName } from '@/constants/constants'

import AppTitle from '@/components/atoms/AppTitle.vue'

const applicationTitle = inject<string>(providerFunctionName.applicationTitle, 'appName')
const moonUnicode = '&#9790;'
</script>

<template>
  <div class="flex flex-row justify-between">
    <AppTitle :application-title="applicationTitle" />
    <span v-html="moonUnicode" class="text-3xl items-center"></span>
  </div>
</template>


