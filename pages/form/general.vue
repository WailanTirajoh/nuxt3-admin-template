<script setup lang="ts">
import { ref } from "vue";
import {
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
} from "vue3-tailwind";

const fileModel = ref([]);
const selectExample = ref();
const multiSelectExample = ref([]);
const inputExample = ref();
const toggleExample = ref();

const selectionList = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "test2",
    value: "test2",
  },
  {
    label: "test3",
    value: "test3",
  },
];
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <TwFile v-model="fileModel" />
      </div>
      <div class="col-span-12">
        <TwInput
          v-model="inputExample"
          label="Input"
          placeholder="Input Field"
          type="text"
        />
      </div>
      <div class="col-span-12">
        <TwSelect
          v-model="selectExample"
          :items="selectionList"
          label="Single Select"
          placeholder="Choose select"
        />
      </div>
      <div class="col-span-12">
        <TwMultiSelect
          v-model="multiSelectExample"
          :items="selectionList"
          label="Multi Select"
          placeholder="Choose select"
        />
      </div>
      <div class="col-span-12">
        <TwToggle id="toggle" v-model="toggleExample" label="Toggle" />
      </div>
    </div>
  </div>
</template>
