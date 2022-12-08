<script setup lang="ts">
useHead({
  title: 'General'
})

const selectExample = ref()
const inputExample = ref()
const textareaExample = ref()
const toggleExample = ref()
const imageExample = ref()
const multiSelectExample = ref([])

const selectionList = [
  {
    label: 'test',
    value: 'test'
  },
  {
    label: 'test2',
    value: 'test2'
  },
  {
    label: 'test3',
    value: 'test3'
  },
]
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      General
    </h1>
    <hr class="my-2 border" />
    <div class="grid grid-cols-12 gap-2 p-2 bg-white rounded-lg">
      <div class="col-span-12">
        <KFormImage v-model="imageExample" label="Image" />
      </div>
      <div class="col-span-12">
        <KFormSelect v-model="selectExample" :items="selectionList" label="Single Select" placeholder="Choose select" />
      </div>
      <div class="col-span-12">
        <KFormMultiSelect v-model="multiSelectExample" :items="selectionList" label="Multi Select"
          placeholder="Choose select" />
      </div>
      <div class="col-span-12">
        <KFormInput v-model="inputExample" label="Input" placeholder="Input Field" type="text" />
      </div>
      <div class="col-span-12">
        <KFormTextarea v-model="textareaExample" label="Text Area" placeholder="Textarea Field" />
      </div>
      <div class="col-span-12">
        <KFormToggle v-model="toggleExample" label="Toggle" />
      </div>
    </div>
  </div>
</template>
