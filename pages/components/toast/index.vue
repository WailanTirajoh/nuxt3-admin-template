<script setup lang="ts">
import { useToastStore } from "~/store/toast"

useHead({
  title: 'Toasts'
})

const toastStore = useToastStore()
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Toast
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <div class="flex gap-2">
          <KButton variant="success" @click="toastStore.success({
            message: 'Success toast'
          })">
            Success
          </KButton>

          <KButton variant="danger" @click="toastStore.error({
            message: 'Error toast'
          })">
            Error
          </KButton>
          <KButton variant="warning" @click="toastStore.warning({
            message: 'Warning toast'
          })">
            Warning
          </KButton>
          <KButton variant="info" @click="toastStore.info({
            message: 'Info toast'
          })">
            Info
          </KButton>
        </div>
      </div>
    </div>
  </div>
</template>
