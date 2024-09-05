<script setup lang="ts">
interface ButtonItemProps {
  name: string
  val: string
  activeClasses?: string
}

const props = defineProps<ButtonItemProps>()
const emit = defineEmits<{
  (e: 'btnClicked', value: string): any
}>()
const onClickHandler = () => {
  emit('btnClicked', props.val)
}
</script>

<template>
  <button
    class="text-sm font-semibold"
    :class="activeClasses ? activeClasses : 'text-slate-400 hover:text-slate-600'"
    @click="onClickHandler"
  >
    {{ props.name }}
  </button>
</template>
