<script setup lang="ts">
interface Props {
  label: string
  placeholder: string
  modelValue?: string | number
  type?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false
})
const emit = defineEmits(['update:modelValue'])
const inputData = ref(props.modelValue)
</script>

<template>
  <div class="">
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div>
      <input v-model="inputData" :type="type"
        class="transition duration-300 ease-in-out border p-2 relative text-sm w-full focus:ring-0 focus:outline-none focus:shadow rounded bg-white dark:bg-gray-800 dark:border-gray-700 h-10"
        :class="{
          'bg-gray-100 cursor-not-allowed': disabled
        }" :placeholder="placeholder" :disabled="disabled" @input="emit('update:modelValue', inputData)" />
    </div>
  </div>
</template>
