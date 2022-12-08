
<script setup lang="ts">
import { Item } from '../dropdown/types-selection';

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  items: Array<Item>
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  placeholder: ''
})

const inputData = ref(props.modelValue)
</script>

<template>
  <div>
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div class="relative">
      <KDropdownSelectionList v-model="inputData" :items="items" :placeholder="props.placeholder"
        :close-on-select="true" :disabled="disabled" @update:modelValue="$emit('update:modelValue', inputData)" />
      <div v-if="disabled"
        class="w-full h-full absolute top-0 left-0 rounded bg-gray-100 bg-opacity-5 cursor-not-allowed">
      </div>
    </div>
  </div>
</template>
