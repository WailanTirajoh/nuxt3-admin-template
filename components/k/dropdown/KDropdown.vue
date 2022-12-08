<script setup lang="ts">
import { Align } from './types';

interface Props {
  align: Align
  width: string
  contentClasses: Array<string>
}
const props = defineProps<Props>()

const ALIGN_CLASSES: Record<Align, string> = {
  [Align.LEFT]: 'origin-top-left left-0',
  [Align.RIGHT]: 'origin-top-right right-0',
}
const alignmentClasses = computed(() => {
  return ALIGN_CLASSES[props.align ?? Align.LEFT]
})
const widthClass = computed(() => {
  return {
    48: 'w-48'
  }[props.width]
})
const isOpen = ref(false)

const closeOnEscape = (e: KeyboardEvent) => { if (isOpen.value && e.key === 'Escape') isOpen.value = false }
onMounted(() => { document.addEventListener('keydown', closeOnEscape) })
onUnmounted(() => { document.removeEventListener('keydown', closeOnEscape) })
</script>

<template>
  <div class="relative">
    <div @click="isOpen = !isOpen">
      <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="isOpen" class="fixed inset-0 z-40" @click="isOpen = false" />

    <transition enter-active-class="transition ease-out duration-200" enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-show="isOpen" class="absolute z-50 mt-4 rounded-md shadow-lg" :class="[widthClass, alignmentClasses]"
        style="display: none" @click="isOpen = false">
        <div class="rounded-md ring-1 ring-black ring-opacity-5" :class="contentClasses">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

