<script setup lang="ts">
const emit = defineEmits(['column-hook'])
const emitColumnHook = () => {
  emit('column-hook', () => {
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
    <button class="bg-gray-50 p-2 rounded border" @click="emitColumnHook">
      Injected Component
    </button>
  </div>
</template>
