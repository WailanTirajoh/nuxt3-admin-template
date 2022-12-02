<script setup lang="ts">
useHead({
  title: 'Datatable'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Datatable
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2">
      <!-- <div class="col-span-12 bg-white p-2 rounded-lg shadow">
        <h5 class="text-lg font-semibold">
          Server side
        </h5>
        <hr class="my-2">
        <KExampleDatatableServer />
      </div> -->
      <div class="col-span-12 ">
        <KExampleDatatableClient />
      </div>
    </div>
  </div>
</template>
