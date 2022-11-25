<script setup lang="ts">
import VueFeather from "vue-feather";
import { useToastStore } from "~~/store/toast";

const toastStore = useToastStore()
const props = defineProps<{
  text: string
}>()

const composableText = useText()
const copyText = (text: string) => {
  if (composableText.copy(text)) {
    toastStore.success({
      message: `Text copied to clipboard!`
    })
  }
};
</script>

<template>
  <div class="relative">
    <button
      class="border border-gray-700 text-gray-300 p-2 flex items-center justify-center rounded absolute right-1 top-1 bg-[#1407471f] hover:bg-[#16323b1f] hover:scale-110 duration-100"
      @click="copyText(props.text)">
      <vue-feather type="copy" />
    </button>
    <pre
      class="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg overflow-auto max-h-[600px] scrollbar text-xs">{{ props.text }}</pre>
  </div>
</template>
