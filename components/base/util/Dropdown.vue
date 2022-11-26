
<script setup lang="ts">
interface Props {
  align?: string
  width?: string
  contentClasses?: Array<string>
}
const props = withDefaults(defineProps<Props>(), {
  align: 'right',
  width: '48',
})

const widthClass = computed(() => {
  return {
    '48': 'w-48',
  }[props.width]
})
const alignmentClasses = computed(() => {
  if (props.align === 'left') {
    return 'origin-top-left left-0'
  }

  if (props.align === 'right') {
    return 'origin-top-right right-0'
  }

  return 'origin-top'
})
const open = ref(false)
const closeOnEscape = (e: BaseeyboardEvent) => {
  if (open.value && e.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', closeOnEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger" />
    </div>

    <div v-show="open" class="fixed inset-0 z-40" @click="open = false" />
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95" appear="">
      <div v-show="open" class="absolute z-50 mt-4 rounded-md shadow-lg" :class="[widthClass, alignmentClasses]"
        style="display: none" @click="open = false">
        <div class="rounded-md ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 py-1" :class="contentClasses">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
