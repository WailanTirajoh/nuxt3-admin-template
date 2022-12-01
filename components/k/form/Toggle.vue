<template>
  <div class="">
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div>
      <div class="flex gap-2 items-center w-full">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input id="toggleB" v-model="inputData" type="checkbox" class="sr-only"
              @input="emit('update:modelValue', !inputData)" :disabled="disabled"/>
            <!-- line -->
            <div class="block w-14 h-8 rounded-full" :class="{
              'bg-gray-100': inputData,
              'bg-gray-600': !inputData
            }"></div>
            <!-- dot -->
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
        </label>
        <div class="">
          {{ inputData ? 'Active' : 'Inactive' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  placeholder?: string
  modelValue?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  placeholder: '',
})
const emit = defineEmits(['update:modelValue'])
const inputData = ref(props.modelValue)
</script>

<style scoped>
/* Toggle A */
input:checked~.dot {
  transform: translateX(100%);
  background-color: #bb6348;
}
</style>
