<script setup lang="ts">
interface TodoInputProps {
  onEnterPress?: Function
  onKeyPress?: Function
}

const props: TodoInputProps = withDefaults(defineProps<TodoInputProps>(), {
  onEnterPress: (event) => console.log('Default onEnterPress event:', event.target.value),
  onKeyPress: (event) => console.log('Default onKeyPress event:', event.target.value),
  currentTask: ''
}) as TodoInputProps
</script>

<template>
  <input
    type="text"
    placeholder="Enter a new task..."
    class="focus:outline-none"
    @keyup="props.onKeyPress"
    @keyup.enter="props.onEnterPress"
  />
</template>

<style scoped></style>
