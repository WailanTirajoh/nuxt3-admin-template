<script setup lang="ts">
import Offcanvas from "~/components/base/util/Offcanvas.vue"

useHead({
  title: 'Offcanvas'
})

</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Offcanvas
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <div class="grid md:flex gap-2">
          <Offcanvas position="left">
            <template #button>
              <BaseButton>
                Left Offcanvas
              </BaseButton>
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
              <BaseButton>
                Right Offcanvas
              </BaseButton>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <div class="">
              Offcanvas body
            </div>
          </Offcanvas>
          <Offcanvas position="right" width="800px">
            <template #button>
              <BaseButton>
                Right Offcanvas with width 800px
              </BaseButton>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <div class="">
              Offcanvas body
            </div>
          </Offcanvas>
          <Offcanvas position="left" width="600px">
            <template #button>
              <BaseButton>
                Left Offcanvas with width 600px
              </BaseButton>
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
            TODO: Top & Bottom offcanvas
          </div>
        </BaseOtherComingSoon>
      </div>
    </div>
  </div>
</template>
