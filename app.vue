<script setup lang="ts">
import { TwDialog } from "vue3-tailwind";
</script>
<template>
  <NuxtLayout>
    <TwDialog />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
