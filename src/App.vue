<script setup lang="ts">
import { provide } from 'vue'

import AppHeader from '@/components/organisms/AppHeader.vue'
import AppMain from '@/components/organisms/AppMain.vue'
import { app, providerFunctionName } from '@/constants/constants'

provide(providerFunctionName.applicationTitle, app.title)
</script>

<template>
  <div class="flex flex-col align-top justify-center m-auto columns-1 w-3/5 min-w-96">
    <AppHeader />
    <AppMain />
  </div>
</template>


