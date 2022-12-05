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
    <hr class="my-2 border" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <KTab type="horizontal" :tabs="[
          {
            name: 'Client Side',
            ref: 'client'
          },
          {
            name: 'Server Side',
            ref: 'server'
          },
        ]" position="bottom" nav-class="px-2 rounded-t gap-2 py-2 !bg-gray-100" tab-class="p-2 text-gray-900 rounded"
          line-class="!bg-gray-700 rounded-t" tab-active-class="!font-bold">
          <template #client>
            <KExampleDatatableClient />
          </template>
          <template #server>
            <KExampleDatatableServer />
          </template>
        </KTab>
      </div>
    </div>
  </div>
</template>
