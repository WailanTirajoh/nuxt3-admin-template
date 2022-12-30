<script setup lang="ts">
import { Validator } from "js-formdata-validator";
import {
  TwButton,
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
  Toast,
} from "vue3-tailwind";

const toast = Toast();

const formData: {
  [key: string]: any;
} = reactive({
  fileModel: null,
  selectExample: null,
  multiSelectExample: null,
  inputExample: null,
  toggleExample: null,
});

const errors: {
  [key: string]: Array<string>;
} = reactive({
  fileModel: [],
  selectExample: [],
  multiSelectExample: [],
  inputExample: [],
  toggleExample: [],
});

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

const submit = async () => {
  resetError();
  const validator = new Validator({
    formData: formData,
    rules: {
      inputExample: ["required"],
      selectExample: ["required"],
      toggleExample: [
        (value) => {
          if (!value) return "Value must be true";
        },
      ],
    },
  });

  await validator.validate();

  if (validator.fail()) {
    const errorMessage = validator.getErrorMessage();
    const errorResponse = validator.getErrorBag();

    toast.error({
      message: errorMessage,
    });

    for (const errorKey in errorResponse) {
      errors[errorKey] = errorResponse[errorKey];
    }
    return;
  }

  toast.success({
    message: "Form Submitted",
  });
};

const reset = () => {
  resetForm();
  resetError();
};

const resetError = () => {
  for (const errorKey of Object.keys(errors)) {
    errors[errorKey] = [];
  }
};

const resetForm = () => {
  formData.fileModel = null;
  formData.selectExample = null;
  formData.multiSelectExample = null;
  formData.inputExample = null;
  formData.toggleExample = null;
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="bg-white rounded-lg p-2 shadow">
      <form @submit.prevent="submit" class="grid grid-cols-12 gap-2">
        <div class="col-span-12">
          <TwFile v-model="formData.fileModel" />
        </div>
        <div class="col-span-12">
          <TwInput
            v-model="formData.inputExample"
            label="Input"
            placeholder="Input Field"
            type="text"
          />
          <div class="text-red-800 text-sm italic" v-if="errors.inputExample">
            {{ errors.inputExample.join(",") }}
          </div>
        </div>
        <div class="col-span-12">
          <TwSelect
            v-model="formData.selectExample"
            :items="selectionList"
            label="Single Select"
            placeholder="Choose select"
          />
          <div class="text-red-800 text-sm italic" v-if="errors.selectExample">
            {{ errors.selectExample.join(",") }}
          </div>
        </div>
        <div class="col-span-12">
          <TwMultiSelect
            v-model="formData.multiSelectExample"
            :items="selectionList"
            label="Multi Select"
            placeholder="Choose select"
          />
          <div
            class="text-red-800 text-sm italic"
            v-if="errors.multiSelectExample"
          >
            {{ errors.multiSelectExample.join(",") }}
          </div>
        </div>
        <div class="col-span-12">
          <TwToggle
            id="toggle"
            v-model="formData.toggleExample"
            label="Toggle"
          />
          <div class="text-red-800 text-sm italic" v-if="errors.toggleExample">
            {{ errors.toggleExample.join(",") }}
          </div>
        </div>
        <div class="col-span-12 flex justify-end gap-1">
          <TwButton
            ripple
            variant="secondary"
            type="button"
            class="px-4"
            @click="reset"
          >
            Reset
          </TwButton>
          <TwButton ripple type="submit" class="px-4"> Submit </TwButton>
        </div>
      </form>
    </div>
  </div>
</template>
