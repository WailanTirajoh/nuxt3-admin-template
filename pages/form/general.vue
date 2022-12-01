<script setup lang="ts">
useHead({
  title: 'General'
})

const dropdownExample = ref()
const inputExample = ref()
const textareaExample = ref()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      General
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid grid-cols-12 gap-2 p-2 bg-white rounded-lg">
      <div class="col-span-12">
        <KFormSelect v-model="dropdownExample" :items="[{
          name: 'test',
          value: 'test'
        }]" label="Dropdown" placeholder="Choose dropdown" :disabled="true"/>
      </div>
      <div class="col-span-12">
        <KFormInput v-model="inputExample" label="Input" placeholder="Input Field" type="text" :disabled="true"/>
      </div>
      <div class="col-span-12">
        <KFormTextarea v-model="textareaExample" label="Text Area" placeholder="Textarea Field" :disabled="true"/>
      </div>
    </div>
  </div>
</template>
