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
    <KToastGroup position="bottom-right" :toasts="toastStore.toasts" />
    <div class="px-0 md:px-1">
      <KLayoutHeader />
      <div class="py-4">
        <div class="flex min-h-screen text-sky-900 bg-opacity-40 bg-gray-900 rounded-3xl shadow-lg" style="backdrop-filter: blur(1.5px)">
          <KLayoutSidebar class="h-full" />
          <div class="w-full md:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] sm:rounded-l-none">
            <div class="p-6 bg-gray-100 h-full rounded-3xl">
              <slot />
            </div>
          </div>
        </div>
        <div class="px-6 md:px-11">
          <div class="w-full bg-gray-900 shadow-xl bg-opacity-60 rounded-b-2xl h-4">
          </div>
        </div>
      </div>
      <div class="text-center flex items-center gap-1 justify-center text-gray-200">
        Developed with
        <vue-feather class="text-red-500" type="heart" /> By <a class="text-blue-300"
          href="https://github.com/WailanTirajoh" target="_blank">Wailan</a>
      </div>
    </div>
  </div>
</template>
