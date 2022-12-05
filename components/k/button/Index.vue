<script setup lang="ts">
/**
 * Available type
 */
type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'light' | 'warning' | 'info'
type IconPosition = 'left' | 'right'
type TextPosition = 'left' | 'center' | 'right'

interface Props {
  classes?: Array<string>
  variant?: Variant
  icon?: string
  disabled?: boolean
  ripple?: boolean
  iconPosition?: IconPosition
  loading?: boolean
  textPosition?: TextPosition
}
const props = defineProps<Props>()

const btnColor = computed(() => {
  let color = ''
  switch (props.variant) {
    case 'secondary':
      color = 'bg-gray-200 text-gray-800'
      if (!btnDisabled.value) color += ' active:bg-gray-200 hover:bg-gray-300'
      break;
    case 'danger':
      color = 'bg-red-800 text-white'
      if (!btnDisabled.value) color += ' active:bg-red-900 hover:bg-red-700'
      break;
    case 'success':
      color = 'bg-green-800 text-white'
      if (!btnDisabled.value) color += ' active:bg-green-900 hover:bg-green-700'
      break;
    case 'light':
      color = 'bg-white text-gray-800'
      if (!btnDisabled.value) color += ' active:bg-white hover:bg-gray-50'
      break;
    case 'warning':
      color = 'bg-yellow-800 text-white'
      if (!btnDisabled.value) color += ' active:bg-yellow-900 hover:bg-yellow-700'
      break;
    case 'info':
      color = 'bg-gray-800 text-white'
      if (!btnDisabled.value) color += ' active:bg-gray-800 hover:bg-gray-700'
      break;
    default:
      color = 'bg-gray-800 text-white'
      if (!btnDisabled.value) color += ' active:bg-gray-900 hover:bg-gray-700'
  }

  return color
})

const btnTextPosition = computed(() => {
  let textPosition = ''
  switch (props.textPosition) {
    case 'left':
      textPosition = 'text-left'
      break
    case 'right':
      textPosition = 'text-right'
      break
    default:
      textPosition = 'text-center'
      break
  }
  return textPosition
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
      position = 'float-right ml-2'
      break
    default:
      position = 'float-left mr-2'
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
  <button v-ripple="btnRipple" v-bind="$attrs" class="p-2 rounded-md relative duration-200" :class="[
    btnColor,
    ...btnClasses,
    btnTextPosition
  ]" :disabled="btnDisabled">
    <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div class="absolute w-full h-full cursor-not-allowed bg-white -mt-2 -ml-2 rounded bg-opacity-10"
        v-if="btnDisabled">
      </div>
    </transition>
    <KIconFeather class="mr-2" :class="[
      btnIconPosition,
    ]" v-if="icon" :type="btnIcon" :animation="btnLoading ? 'spin' : ''" />
    <slot />
  </button>
</template>
