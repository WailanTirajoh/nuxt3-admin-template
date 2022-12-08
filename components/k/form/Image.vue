<script setup lang="ts">
interface Props {
  label?: string
  imgUrls?: string[] | never[]
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imgUrls: () => [],
  multiple: false,
});

const emit = defineEmits(['update:modelValue', 'imageChanged']);

const dataImgUrls = ref<string[] | never[]>(props.imgUrls);
const file = ref<HTMLInputElement>();
const files = ref<File[] | null>()

const handleDropImage = (e: DragEvent) => {
  e.preventDefault();
  if (!file.value || !e.dataTransfer) return;
  files.value = Array.from(e.dataTransfer.files) as File[] | null;
  emit('update:modelValue', files.value);
  if (!files.value) return;
  const urls = Array.from(files.value).map(file => URL.createObjectURL(file));
  dataImgUrls.value = urls;
  urls.forEach(url => emit('imageChanged', url));
}

const handleInputImage = () => {
  if (!file.value || !file.value.files) return;

  const fileList = Array.from(file.value.files);
  files.value = fileList;

  emit('update:modelValue', files.value);

  const urls = files.value.map(file => URL.createObjectURL(file));
  dataImgUrls.value = urls;

  Promise.all(urls.map(url => emit('imageChanged', url)));
};

const removeImage = (index: number) => {
  if (!files.value) return;
  const fileArray = Array.from(files.value);
  const _files = fileArray.filter((_, i) => i !== index);
  files.value = _files;
  const urls = _files.map(file => URL.createObjectURL(file));
  dataImgUrls.value = urls;
  emit('update:modelValue', files.value);
  urls.forEach(url => emit('imageChanged', url));
}

const removeAllImage = () => {
  emit('update:modelValue', null);
  dataImgUrls.value = [];
  files.value = null;
  emit('imageChanged', null);
};

const onDragOver = (e: DragEvent) => {
  e.preventDefault()
}
</script>

<template>
  <div class="">
    <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
      {{ label }}
    </label>
    <div v-if="dataImgUrls && dataImgUrls.length > 0" class="w-full flex items-center justify-center mt-2">
      <div class="border rounded-lg w-full dark:border-gray-700 max-h-96 overflow-auto relative select-none">
        <div class="grid grid-cols-12 justify-left gap-4 p-4">
          <div class="relative col-span-3" v-for="url, index in dataImgUrls">
            <img :src="url" class="h-48 object-cover w-full rounded bg-white shadow border" alt="preview" />
            <div class="cursor-pointer absolute top-2 right-2 " @click="removeImage(index)">
              <div
                class="duration-300 hover:bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-90">
                <KIconFeather type="x"></KIconFeather>
              </div>
            </div>
          </div>
        </div>
        <button
          class="transition-all duration-300 ease-in-out bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 shadow-sm w-full p-1 rounded-b sticky bottom-0"
          @click="removeAllImage">
          Remove All Image
        </button>
      </div>
    </div>
    <div v-else class="flex w-full items-center justify-center">
      <label @dragover="onDragOver" @drop.prevent="handleDropImage"
        class="transition-all duration-300 ease-in-out w-full flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700 dark:text-gray-300 text-gray-400 rounded-lg tracking-wide uppercase border-dashed border-2 border-gray-500 cursor-pointer">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select or Drop file here</span>
        <input ref="file" type="file" style="display: none" class="hidden" accept="image/png, image/gif, image/jpeg"
          multiple @change="handleInputImage" />
      </label>
    </div>
  </div>
</template>
