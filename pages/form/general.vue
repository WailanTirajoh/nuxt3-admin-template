<script setup lang="ts">
import {
  TwForm,
  TwButton,
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
  TwErrorMessage,
  TwTextarea,
} from "vue3-tailwind";
import { useFormExample } from "@/store/formExample";
const formExample = useFormExample();
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <TwForm
        :name="formExample.formName"
        class="grid grid-cols-12 gap-2 bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg p-2 shadow"
        :class="{
          'tw-shake': formExample.isError,
        }"
        :rules="formExample.formRules"
        @submit="formExample.submit()"
      >
        <div class="col-span-12">
          <TwFile v-model="formExample.formData.fileModel" />
        </div>
        <div class="col-span-12">
          <TwInput
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring-indigo-400 focus:ring-1 sm:text-sm"
            name="inputExample"
            v-model="formExample.formData.inputExample"
            label="Input"
            placeholder="Input Field"
            type="text"
          />
          <TwErrorMessage name="inputExample" />
        </div>
        <div class="col-span-12">
          <TwTextarea
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-400 focus:ring-indigo-400 focus:ring-1 sm:text-sm"
            name="textAreaExample"
            v-model="formExample.formData.textAreaExample"
            label="Textarea"
            placeholder="Textarea Field"
            type="text"
          />
          <TwErrorMessage name="textAreaExample" />
        </div>
        <div class="col-span-12">
          <TwSelect
            name="selectExample"
            v-model="formExample.formData.selectExample"
            :items="formExample.selectionList"
            label="Single Select"
            placeholder="Choose select"
          />
          <TwErrorMessage name="selectExample" />
        </div>
        <div class="col-span-12">
          <TwMultiSelect
            name="multiSelectExample"
            v-model="formExample.formData.multiSelectExample"
            :items="formExample.selectionList"
            label="Multi Select"
            placeholder="Choose select"
          />
          <TwErrorMessage name="multiSelectExample" />
        </div>
        <div class="col-span-12">
          <TwToggle
            name="toggleExample"
            id="toggle"
            v-model="formExample.formData.toggleExample"
            label="Toggle"
          />
          <TwErrorMessage name="toggleExample" />
        </div>
        <div class="col-span-12 flex justify-end gap-1">
          <TwButton
            ripple
            variant="secondary"
            type="button"
            class="px-4"
            @click="formExample.clear()"
          >
            Reset
          </TwButton>
          <TwButton ripple type="submit" class="px-4"> Submit </TwButton>
        </div>
      </TwForm>
    </div>
  </div>
</template>
