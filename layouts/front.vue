<script setup lang="ts">
import { Toast } from 'vue3-tailwind';

useHead({
  htmlAttrs: {
    lang: 'en',
  }
})

const { toasts } = Toast();
</script>

<template>
  <div>
    <TwToast position="top-right" :toasts="toasts" />
    <div class="px-0 md:px-3 lg:px-4">
      <slot />
    </div>
  </div>
</template>
