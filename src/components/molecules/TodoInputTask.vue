<script setup lang="ts">
import { ref } from 'vue'

import TodoInput from '@/components/atoms/TodoInput.vue'
import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'

interface TodoInputTaskProps {
  isTaskCompleted: boolean
}

withDefaults(defineProps<TodoInputTaskProps>(), {
  isTaskCompleted: false
})

const isValidTask = /^(?!\s*$).+/
const isInvalidTask = ref<boolean>(false)

const addNewTask = (event) => {
  console.log('New task added:', event.target.value)
  if (!isValidTask.test(event.target.value)) {
    console.log('Invalid task added')
    isInvalidTask.value = true
    return
  }
  event.target.value = ''
  isInvalidTask.value = false
}

const onKeyPress = (event) => {
  console.log('on key Pressed:', event.target.value)
  console.log('on key Pressed length:', event.target.value.length)
  console.log('on key Pressed length <=:', event.target.value.length <= 150)
  const validatedValue = event.target.value
  if (isInvalidTask.value && isValidTask.test(validatedValue) && validatedValue.length <= 150) {
    isInvalidTask.value = false
    return
  }
}
</script>

<template>
  <div
    class="flex flex-row justify-between p-2 bg-white rounded-lg"
    :class="{ 'border border-pink-500': isInvalidTask }"
  >
    <TaskStatusIcon :completed="false" :inactive="true" class="m-1.5" />
    <TodoInput class="w-full pl-2 pr-2" :onEnterPress="addNewTask" :onKeyPress="onKeyPress" />
  </div>
</template>

<style scoped></style>
