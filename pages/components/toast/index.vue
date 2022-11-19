<script setup lang="ts">
import { useToastStore } from "~/store/toast"

const toastStore = useToastStore()
const addToast = (type: string = "success", message: string) => {
  toastStore.addToast({
    id: '',
    message: "test",
    type: type,
    lifetime: 5000
  })
}
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Toast
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 flex gap-2">
        <button class="bg-green-800 hover:bg-green-900 text-white rounded p-2 text-lg"
          @click="addToast('success', 'Success toast')">
          Success
        </button>
        <button class="bg-red-800 hover:bg-red-900 text-white rounded p-2 text-lg"
          @click="addToast('error', 'Error toast')">
          Error
        </button>
      </div>
      <div class="col-span-12">
        <BaseOtherComingSoon>
          TODO: fix toast group movement
        </BaseOtherComingSoon>
      </div>
    </div>
  </div>
</template>
