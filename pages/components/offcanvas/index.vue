<script setup lang="ts">
import Offcanvas from "~/components/base/util/Offcanvas.vue"
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Offcanvas
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <div class="flex gap-2">
          <Offcanvas position="left">
            <template #button>
              <button class="bg-sky-800 hover:bg-sky-900 text-white rounded p-2 text-lg">
                Left Offcanvas
              </button>
            </template>
            <template #header>
              Left Offcanvas
            </template>
            <div class="">
              Offcanvas body
            </div>
          </Offcanvas>
          <Offcanvas position="right">
            <template #button>
              <button class="bg-sky-800 hover:bg-sky-900 text-white rounded p-2 text-lg">
                Right Offcanvas
              </button>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <div class="">
              Offcanvas body
            </div>
          </Offcanvas>
        </div>
      </div>
      <div class="col-span-12">
        <BaseOtherComingSoon>
          <div>
            Top & Bottom offcanvas
          </div>
        </BaseOtherComingSoon>
      </div>
    </div>
  </div>
</template>
