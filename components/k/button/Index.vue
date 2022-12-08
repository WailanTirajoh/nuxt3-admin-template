<script setup lang="ts">
import { IconPosition, TextPosition, Variant } from './types';

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

const COLORS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-gray-800 text-white',
  [Variant.SECONDARY]: 'bg-gray-200 text-gray-800',
  [Variant.DANGER]: 'bg-red-800 text-white',
  [Variant.SUCCESS]: 'bg-green-800 text-white',
  [Variant.LIGHT]: 'bg-white text-gray-800',
  [Variant.WARNING]: 'bg-yellow-800 text-white',
  [Variant.INFO]: 'bg-gray-800 text-white',
  [Variant.NONE]: '',
}

const ICON_POSITIONS: Record<IconPosition, string> = {
  [IconPosition.LEFT]: 'float-left mr-2',
  [IconPosition.RIGHT]: 'float-right ml-2',
}

const TEXT_POSITIONS: Record<TextPosition, string> = {
  [TextPosition.LEFT]: 'text-left',
  [TextPosition.RIGHT]: 'text-right',
  [TextPosition.CENTER]: 'text-center',
}

const btnColor = computed(() => {
  let color = COLORS[props.variant ?? Variant.PRIMARY]
  if (!btnDisabled.value) {
    color += ' active:bg-opacity-90 hover:bg-opacity-90'
  }
  return color
})

const btnTextPosition = computed(() => {
  return TEXT_POSITIONS[props.textPosition ?? TextPosition.LEFT]
})

const btnLoading = computed(() => {
  return props.loading
})

const btnIcon = computed(() => {
  return btnLoading.value ? 'loader' : props.icon
})
const btnIconPosition = computed(() => {
  return ICON_POSITIONS[props.iconPosition ?? IconPosition.LEFT]
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
  <button v-ripple="btnRipple" v-bind="$attrs" :disabled="btnDisabled" class="p-2 rounded-md relative duration-200"
    :class="[
      btnColor,
      ...btnClasses,
      btnTextPosition
    ]">
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
