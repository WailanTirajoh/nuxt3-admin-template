
<script setup lang="ts">
type ItemValue = any
interface Props {
  modelValue: Array<ItemValue>
  items: Array<{
    name: string
    value: ItemValue
  }>
  label?: string
  placeholder?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false
})

const inputData = ref(props.modelValue)
</script>

<template>
  <div>
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div class="relative">
      <KDropdownMultiSelectionList v-model="inputData" :items="items" :placeholder="props.placeholder"
        :disabled="disabled" @update:modelValue="$emit('update:modelValue', inputData)" />
      <div v-if="disabled"
        class="w-full h-full absolute top-0 left-0 rounded bg-gray-100 bg-opacity-5 cursor-not-allowed">
      </div>
    </div>
  </div>
</template>
