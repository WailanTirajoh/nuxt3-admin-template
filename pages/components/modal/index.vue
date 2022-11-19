<script setup lang="ts">
import Modal from "~/components/base/util/Modal.vue"
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Modal
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <Modal :full-height="false">
          <template #button>
            <button class="bg-sky-800 hover:bg-sky-900 text-white rounded p-2 text-lg">
              Modal
            </button>
          </template>
          <template #header>
            <div class="">
              Header
            </div>
          </template>
          <template #body>
            <div class="">
              Body
            </div>
          </template>
          <template #footer>
            <div class="flex justify-end w-full">
              Footer
            </div>
          </template>
        </Modal>
      </div>
      <div class="col-span-12">
        <BaseOtherComingSoon>
          TODO: Modal with more attrs
        </BaseOtherComingSoon>
      </div>
    </div>
  </div>
</template>
