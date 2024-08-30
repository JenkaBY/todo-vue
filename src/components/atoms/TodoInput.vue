<script setup lang="ts">
interface TodoInputProps {
  inputValue: string
  placeHolder: string
  isDisabled: boolean
}

withDefaults(defineProps<TodoInputProps>(), {
  inputValue: '',
  placeHolder: 'Enter a text...',
  isDisabled: false,
})

const emit = defineEmits<{
  (e: 'update:inputValue', value: string): any
  (e: 'enterKeyPressed', value: string): any
}>()

const handleEnterKeyPressed = (event: any) => {
  emit('enterKeyPressed', event.target.value)
}
const handleUpdate = (event: any) => {
  emit('update:inputValue', event.target.value)
}
</script>

<template>
  <input
    :disabled="isDisabled"
    type="text"
    class="focus:outline-none bg-transparent"
    :placeholder="placeHolder"
    :value="inputValue"
    @keyup.enter="handleEnterKeyPressed"
    @input="handleUpdate"
  />
</template>

<style scoped></style>
