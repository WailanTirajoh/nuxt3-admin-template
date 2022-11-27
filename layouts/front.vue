<script setup lang="ts">
import { useToastStore } from "~/store/toast"
useHead({
  htmlAttrs: {
    lang: 'en',
  }
})
const toastStore = useToastStore()
</script>

<template>
  <div>
    <KToastGroup position="bottom-right" :toasts="toastStore.toasts" />
    <div class="px-0 md:px-3 lg:px-4">
      <slot />
    </div>
  </div>
</template>
