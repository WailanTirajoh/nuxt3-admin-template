<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  }
})
</script>

<template>
  <div>
    <div class="px-0 md:px-3 lg:px-4">
      <slot />
    </div>
  </div>
</template>
