<script setup lang="ts">
import Modal from "~/components/base/util/Modal.vue"

useHead({
  title: 'Modals'
})

/**
 * Example modal code
 */
const modalCode = `<Modal :full-height="false">
  <template #button>
    <button class="bg-sky-800 hover:bg-sky-900 text-white rounded p-2 text-lg">
      Modal
    </button>
  </template>
  <template #header>
    // Put your header HTML here!
    <div class="">
      Header
    </div>
  </template>
  <template #body>
    // Put your body HTML here!
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
`
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Modal
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 md:col-span-5">
        <Modal :full-height="false">
          <template #button>
            <BaseButton>
              Modal
            </BaseButton>
          </template>
          <template #header>
            <div>
              Header
            </div>
          </template>
          <template #body>
            <div>
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
      <div class="col-span-12 md:col-span-7">
        <BaseUtilCodeView :text="modalCode" />
      </div>
      <div class="col-span-12">
        <hr class="my-2 border-sky-300" />
      </div>
      <div class="col-span-12">
        <h3 class="text-xl font-bold">
          Props & Emits
        </h3>
        <div class="text-md">
          <ul class="list-disc ml-4">
            <li>
              <div class="">
                Props:
              </div>
              <ol class="list-decimal ml-4">
                <li>
                  fullHeight: boolean
                </li>
              </ol>
            </li>
            <li>
              <div class="">
                Emits:
              </div>
              <ol class="list-decimal ml-4">
                <li>
                  on-close
                </li>
                <li>
                  on-open
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
