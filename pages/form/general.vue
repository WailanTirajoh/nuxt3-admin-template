<script setup lang="ts">
useHead({
  title: 'General'
})

const test = ref()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      General
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2 p-2 bg-white rounded-lg">
      <div class="col-span-12">
        <KFormSelect v-model="test" :items="[{
          name: 'test',
          value: 'test'
        }]" label="Dropdown" placeholder="Choose dropdown" />
      </div>
    </div>
  </div>
</template>
