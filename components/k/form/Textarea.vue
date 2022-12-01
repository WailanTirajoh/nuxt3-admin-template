<template>
  <div class="">
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <textarea v-model="inputData"
      class="block transition duration-300 ease-in-out border p-2 relative text-sm w-full focus:ring-0 focus:outline-none focus:shadow rounded bg-white dark:bg-gray-800 dark:border-gray-700"
      :placeholder="placeholder" :disabled="disabled" @input="emit('update:modelValue', inputData)" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  placeholder: string
  modelValue?: string | number
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false
})
const emit = defineEmits(['update:modelValue'])
const inputData = ref(props.modelValue)

// export default {
//   props: {
//     error: {
//       type: [String, Array],
//       required: false,
//       default: () => null
//     },
//     value: {
//       type: [String, Number, Array],
//       required: false,
//       default: () => null
//     },
//     label: {
//       type: String,
//       required: false,
//       default: () => null
//     },
//     placeholder: {
//       type: String,
//       required: false,
//       default: () => ''
//     }
//   },
//   data() {
//     return {
//       inputData: this.value
//     }
//   }
// }
</script>
