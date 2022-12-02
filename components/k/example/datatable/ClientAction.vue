<script setup lang="ts">
import { emit } from 'process';

const emit = defineEmits(['header-hook'])
const emitHeaderHook = () => {
  emit('header-hook', () => {
    alert('passing callback from client action to main component')
  })
}

defineProps<{
  props: {
    name: string
  }
}>()
</script>

<template>
  <div class="grid place-content-center">
    <button class="bg-gray-50 p-2 rounded" @click="emitHeaderHook">
      Click Me!
    </button>
  </div>
</template>
