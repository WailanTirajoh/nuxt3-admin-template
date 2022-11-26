<script setup lang="ts">

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
          <KUtilOffcanvas position="left">
            <template #button>
              <KButton>
                Left Offcanvas
              </KButton>
            </template>
            <template #header>
              Left Offcanvas
            </template>
            <div class="">
              Offcanvas body
            </div>
          </KUtilOffcanvas>
          <KUtilOffcanvas position="right">
            <template #button>
              <KButton>
                Right Offcanvas
              </KButton>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <template #body>
              Offcanvas body
            </template>
          </KUtilOffcanvas>
          <KUtilOffcanvas position="right" width="800px">
            <template #button>
              <KButton>
                Right Offcanvas with width 800px
              </KButton>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <template #body>
              Offcanvas body
            </template>
          </KUtilOffcanvas>
          <KUtilOffcanvas position="left" width="600px">
            <template #button>
              <KButton>
                Left Offcanvas with width 600px
              </KButton>
            </template>
            <template #header>
              Right Offcanvas
            </template>
            <template #body>
              Offcanvas body
            </template>
          </KUtilOffcanvas>
        </div>
      </div>
      <div class="col-span-12">
        <KOtherComingSoon>
          <div>
            TODO: Top & Bottom offcanvas
          </div>
        </KOtherComingSoon>
      </div>
    </div>
  </div>
</template>
