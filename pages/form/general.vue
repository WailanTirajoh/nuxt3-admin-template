<script setup lang="ts">
import {
  TwForm,
  TwButton,
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
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
        :custom-field-name="{
          inputExample: 'Input',
          textAreaExample: 'Text Area',
        }"
      >
        <div class="col-span-12">
          <TwFile v-model="formExample.formData.fileModel" />
        </div>
        <div class="col-span-12">
          <TwInput
            label="Input"
            name="inputExample"
            v-model="formExample.formData.inputExample"
            placeholder="Input Field"
            type="text"
          />
          <CustomErrorMessage name="inputExample" />
        </div>
        <div class="col-span-12">
          <TwTextarea
            label="Textarea"
            name="textAreaExample"
            v-model="formExample.formData.textAreaExample"
            placeholder="Textarea Field"
            type="text"
          />
          <CustomErrorMessage name="textAreaExample" />
        </div>
        <div class="col-span-12">
          <TwSelect
            label="Single Select"
            name="selectExample"
            v-model="formExample.formData.selectExample"
            :items="formExample.selectionList"
            placeholder="Choose select"
          />
          <CustomErrorMessage name="selectExample" />
        </div>
        <div class="col-span-12">
          <TwMultiSelect
            label="Multi Select"
            name="multiSelectExample"
            v-model="formExample.formData.multiSelectExample"
            :items="formExample.selectionList"
            placeholder="Choose select"
          />
          <CustomErrorMessage name="multiSelectExample" />
        </div>
        <div class="col-span-12">
          <TwToggle
            label="Toggle"
            name="toggleExample"
            id="toggle"
            v-model="formExample.formData.toggleExample"
          />
          <CustomErrorMessage name="toggleExample" />
        </div>
        <div class="col-span-12 flex justify-end gap-1">
          <TwButton
            ripple
            variant="secondary"
            type="button"
            class="px-4 dark:text-gray-200 dark:!border-gray-800 dark:border"
            @click="formExample.clear()"
          >
            Reset
          </TwButton>
          <TwButton variant="primary" class="px-4">
            Submit
          </TwButton>
        </div>
      </TwForm>
    </div>
  </div>
</template>
