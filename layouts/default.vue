<script setup lang="ts">
import VueFeather from "vue-feather"
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
    <div class="px-2 py-4 md:px-6 lg:px-8">
      <div class="flex min-h-screen text-sky-900 bg-[#251B37] rounded-3xl shadow-lg">
        <BaseLayoutSidebar class="h-full" />
        <div class="w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] sm:rounded-l-none">
          <div class="p-6 bg-sky-100 h-full rounded-3xl">
            <slot />
          </div>
        </div>
      </div>
      <div class="px-11">
        <div class="w-full bg-white bg-opacity-10 rounded-b-2xl h-4">
        </div>
      </div>
    </div>
    <div class="text-center flex items-center gap-1 justify-center text-gray-200">
      Developed with <vue-feather class="text-red-500" type="heart"/> By <a class="text-blue-300" href="https://github.com/WailanTirajoh" target="_blank">Wailan</a>
    </div>
  </div>
</template>
