<script setup lang="ts">
interface Props {
  label?: string
  imgUrl?: string | null
}
const props = withDefaults(defineProps<Props>(), {
  imgUrl: null
})
const emit = defineEmits(['update:modelValue', 'imageChanged'])

const dataImgUrl = ref(props.imgUrl)
const file = ref()

const handleFileUpload = () => {
  const f = file.value.files[0]
  emit('update:modelValue', f)
  dataImgUrl.value = URL.createObjectURL(f)
  emit('imageChanged', dataImgUrl.value)
}

const removeImage = () => {
  emit('update:modelValue', null)
  dataImgUrl.value = null
  emit('imageChanged', null)
}
</script>

<template>
  <div class="">
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div v-if="dataImgUrl" class="w-full flex items-center justify-center mt-2">
      <div class="border rounded-lg w-full dark:border-gray-700">
        <div class="flex justify-center">
          <img :src="dataImgUrl" class="max-w-xs rounded-t" alt="preview"
            onerror="this.onerror=null; this.src='/images/default-noimage.webp'" />
        </div>
        <button
          class="transition-all duration-300 ease-in-out bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 shadow-sm w-full p-2 rounded-b"
          @click="removeImage">
          Change
        </button>
      </div>
    </div>
    <div v-else class="flex w-full items-center justify-center bg-grey-lighter">
      <label
        class="transition-all duration-300 ease-in-out w-full flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700 dark:text-gray-300 text-gray-400 rounded-lg tracking-wide uppercase border cursor-pointer hover:bg-gray-600 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input ref="file" type="file" class="hidden" accept="image/png, image/gif, image/jpeg"
          @change="handleFileUpload" />
      </label>
    </div>
  </div>
</template>
