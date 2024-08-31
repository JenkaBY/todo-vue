<script setup lang="ts">
import { computed } from 'vue'
import { useTodoTasksStore } from '@/stores/todoTasksStore'
import ItemsLeftCounter from '@/components/atoms/ItemsLeftCounter.vue'
import ButtonItem from '@/components/atoms/ButtonItem.vue'

const filters = [
  { name: 'All', value: 'ALL' },
  { name: 'Active', value: 'ACTIVE' },
  { name: 'Completed', value: 'COMPLETED' }
]
const store = useTodoTasksStore()
const left = computed(() => {
  return store.itemsLeftCount
})
const currentActiveFilter = computed(() => {
  return store.filter
})
const setFilterToStore = (filterValue: string) => {
  store.updateFilter(filterValue as 'ALL' | 'COMPLETED' | 'ACTIVE')
}
</script>

<template>
  <div class="flex flex-row justify-between items-center p-4 bg-none max-h-2.5">
    <ItemsLeftCounter :count="left" />
    <div class="filter-tasks flex flex-row gap-2">
      <ButtonItem
        v-for="filter in filters"
        v-bind:key="filter.value"
        :name="filter.name"
        :val="filter.value"
        :active-classes="`${currentActiveFilter === filter.value ? 'text-grey-400 hover:text-grey-700 active' : ''}`"
        @btn-clicked="setFilterToStore"
        class="filter-item"
      />
    </div>
    <div class="clear-completion">Clear</div>
  </div>
</template>
