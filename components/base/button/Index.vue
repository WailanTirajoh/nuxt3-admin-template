<script setup lang="ts">
import VueFeather from "vue-feather"

/**
 * Available type
 */
type Color = 'primary' | 'secondary' | 'danger'
type IconPosition = 'left' | 'right'

interface Props {
  classes?: Array<string>
  color?: Color
  icon?: string
  disabled?: boolean
  ripple?: boolean
  iconPosition?: IconPosition
  loading?: boolean
}
const props = defineProps<Props>()

const btnColor = computed(() => {
  let color = ''
  switch (props.color) {
    case 'secondary':
      color = 'bg-gray-400'
      if (!btnDisabled.value) color += ' active:bg-gray-400 hover:bg-gray-500'
      break;
    case 'danger':
      color = 'bg-red-800'
      if (!btnDisabled.value) color += ' active:bg-red-400 hover:bg-red-500'
      break;
    default:
      color = 'bg-gray-800'
      if (!btnDisabled.value) color += ' active:bg-gray-400 hover:bg-gray-500'
  }

  return color
})

const btnLoading = computed(() => {
  return props.loading
})

const btnIcon = computed(() => {
  return btnLoading.value ? 'loader' : props.icon
})

const btnIconPosition = computed(() => {
  let position = ''
  switch (props.iconPosition) {
    case 'right':
      position = 'right-2'
      break
    default:
      position = 'left-2'
  }

  return position
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
  ]" :disabled="btnDisabled">
    <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div class="absolute w-full h-full cursor-not-allowed bg-white -mt-2 -ml-4 rounded bg-opacity-10"
        v-if="btnDisabled">
      </div>
    </transition>
    <vue-feather class="absolute" :class="[
      btnIconPosition,
      {
        'animate-[spin_2s_linear_infinite]': btnLoading
      }
    ]" v-if="icon" :type="btnIcon" />
    <slot />
  </button>
</template>
