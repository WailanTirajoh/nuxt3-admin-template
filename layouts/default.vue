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
    <BaseToastGroup :toasts="toastStore.toasts" />
    <BaseLayoutHeader />
    <div class="px-2 py-8 md:px-6 lg:px-8">
      <div class="px-11">
        <div class="w-full bg-white bg-opacity-10 rounded-t-2xl h-4">
        </div>
      </div>
      <div class="flex min-h-screen text-sky-900 bg-[#071a50] rounded-3xl shadow-lg">
        <BaseLayoutSidebar class="h-full" />
        <div class="w-full sm:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] rounded-3xl sm:rounded-l-none">
          <div class="p-6 bg-sky-100 h-full rounded-3xl">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
