<script setup lang="ts">
import VueFeather from "vue-feather"

/**
 * Available type
 */
type Color = 'primary' | 'secondary' | 'danger'

interface Props {
  classes?: Array<string>
  color?: Color
  icon?: string
  disabled?: boolean
  ripple?: boolean
}
const props = defineProps<Props>()

const btnColor = computed(() => {
  let color = ''
  switch (props.color) {
    case 'secondary':
      color = 'bg-gray-400 active:bg-gray-400 hover:bg-gray-500'
      break;
    case 'danger':
      color = 'bg-red-800 active:bg-red-800 hover:bg-red-900'
      break;
    default:
      color = 'bg-gray-800 active:bg-gray-800 hover:bg-gray-900'
  }

  return color
})
const btnClasses = computed(() => {
  if (!props.classes) return []
  return props.classes
})
const btnDisabled = computed(() => {
  return props.disabled ?? false
})
const btnRipple = computed(() => {
  return props.ripple
})
</script>

<template>
  <button v-ripple="btnRipple" v-bind="$attrs" class="p-2 px-4 rounded-md text-white relative duration-200" :class="[
    btnColor,
    ...btnClasses,
    {
      'flex gap-2 items-center': icon,
    }
  ]" :disabled="btnDisabled">
    <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div class="absolute w-full h-full cursor-not-allowed bg-white -ml-4 rounded bg-opacity-10" v-if="btnDisabled">
      </div>
    </transition>
    <vue-feather v-if="icon" :type="icon" />
    <slot />
  </button>
</template>
