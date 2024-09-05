<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import { computed, ref } from 'vue'

import TodoInput from '@/components/atoms/TodoInput.vue'
import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import { app } from '@/constants/constants'
import { useTodoTasksStore } from '@/stores/todoTasksStore'

interface TodoInputTaskProps {
  isTaskCompleted: boolean
}

withDefaults(defineProps<TodoInputTaskProps>(), {
  isTaskCompleted: false
})
const todoTasksStore = useTodoTasksStore()

const inputTodoTaskValue = ref<string>('')
const rules = computed(() => ({
  inputTodoTaskValue: {
    required,
    maxLength: maxLength(app.validation.inputTask.length.max)
  }
}))
const $v = useVuelidate(rules, { inputTodoTaskValue })

const addNewTask = async () => {
  const result = await $v.value.$validate()

  if (result) {
    todoTasksStore.addTask(inputTodoTaskValue.value)
    inputTodoTaskValue.value = ''
    $v.value.$reset()
  }
}
const hasError = computed(() => $v.value.inputTodoTaskValue.$error && $v.value.inputTodoTaskValue.$dirty)
</script>

<template>
  <div class="flex flex-col justify-start">
    <div
      class="flex flex-row justify-between p-2 bg-white rounded-lg input-wrapper"
      :class="{ 'border border-pink-500': hasError }"
    >
      <TaskStatusIcon class="m-1.5" />
      <TodoInput
        class="w-full pl-2 pr-2"
        v-model:input-value.trim="inputTodoTaskValue"
        @enter-key-pressed="addNewTask"
        place-holder="Enter a new task..."
        :is-disabled="false"
      />
    </div>
    <small
      v-if="hasError"
      class="validation-message ml-5 text-pink-500"
    >
      {{ $v.inputTodoTaskValue.$errors[0].$message }}</small
    >
  </div>
</template>


