<script setup lang="ts">
import {
  TwForm,
  TwButton,
  TwFile,
  TwInput,
  TwMultiSelect,
  TwSelect,
  TwToggle,
  Toast,
  TwErrorMessage,
  TwTextarea,
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

const formError = ref(false);

const formA = ref();

const submit = async () => {
  const validator = formA.value.validator();
  validator.clearErrors();
  await validator.validate();
  if (validator.fail()) {
    toast.error({
      message: validator.getErrorMessage(),
    });

    formError.value = true;

    setTimeout(() => {
      formError.value = false;
    }, 1000);
  }
};

const clear = () => {
  formData.fileModel = null;
  formData.selectExample = null;
  formData.multiSelectExample = null;
  formData.inputExample = null;
  formData.textAreaExample = null;
  formData.toggleExample = null;

  const validator = formA.value.validator();
  validator.clearErrors();
};

const ruleSchemaFormA = {
  inputExample: ["required", "string"],
  textAreaExample: [
    "required",
    "string",
    (value: string) => {
      if (!value || value.length < 3) return "Min length is 3";
    },
  ],
  selectExample: [
    "required",
  ],
  toggleExample: [
    "required",
    "boolean",
    (value: string) => {
      if (!value) return "Value must be true";
    },
  ],
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <TwForm
        ref="formA"
        name="formA"
        class="grid grid-cols-12 gap-2 bg-white rounded-lg p-2 shadow"
        :class="{
          'tw-shake': formError,
        }"
        :rules="ruleSchemaFormA"
        @submit="submit"
      >
        <div class="col-span-12">
          <TwFile v-model="formData.fileModel" />
        </div>
        <div class="col-span-12">
          <TwInput
            name="inputExample"
            v-model="formData.inputExample"
            label="Input"
            placeholder="Input Field"
            type="text"
          />
          <TwErrorMessage name="inputExample" />
        </div>
        <div class="col-span-12">
          <TwTextarea
            name="textAreaExample"
            v-model="formData.textAreaExample"
            label="Textarea"
            placeholder="Textarea Field"
            type="text"
          />
          <TwErrorMessage name="textAreaExample" />
        </div>
        <div class="col-span-12">
          <TwSelect
            name="selectExample"
            v-model="formData.selectExample"
            :items="selectionList"
            label="Single Select"
            placeholder="Choose select"
          />
          <TwErrorMessage name="selectExample" />
        </div>
        <div class="col-span-12">
          <TwMultiSelect
            name="multiSelectExample"
            v-model="formData.multiSelectExample"
            :items="selectionList"
            label="Multi Select"
            placeholder="Choose select"
          />
          <TwErrorMessage name="multiSelectExample" />
        </div>
        <div class="col-span-12">
          <TwToggle
            name="toggleExample"
            id="toggle"
            v-model="formData.toggleExample"
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
            @click="clear"
          >
            Reset
          </TwButton>
          <TwButton ripple type="submit" class="px-4"> Submit </TwButton>
        </div>
      </TwForm>
    </div>
  </div>
</template>
