<script setup lang="ts">
interface TodoInputProps {
  inputValue: string
  placeHolder: string
}

withDefaults(defineProps<TodoInputProps>(), {
  inputValue: '',
  placeHolder: 'Enter a text...'
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
    type="text"
    class="focus:outline-none"
    :placeholder="placeHolder"
    :value="inputValue"
    @keyup.enter="handleEnterKeyPressed"
    @input="handleUpdate"
  />
</template>

<style scoped></style>
