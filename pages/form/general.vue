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
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Form</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <TwForm
        class="grid grid-cols-12 gap-2 bg-white rounded-lg p-2 shadow"
        :class="{
          'tw-shake': formError,
        }"
        name="formA"
        ref="formA"
        @submit="submit"
        :rules="{
          inputExample: ['required', 'string'],
          textAreaExample: [
            'required',
            'string',
            (value: string) => {
              if (!value || value.length < 3) return 'Min length is 3';
            },
          ],
        }"
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
          <TwErrorMessage name="inputExample"></TwErrorMessage>
        </div>
        <div class="col-span-12">
          <TwTextarea
            name="textAreaExample"
            v-model="formData.textAreaExample"
            label="Textarea"
            placeholder="Textarea Field"
            type="text"
          />
          <TwErrorMessage name="textAreaExample"></TwErrorMessage>
        </div>
        <div class="col-span-12">
          <TwSelect
            v-model="formData.selectExample"
            :items="selectionList"
            label="Single Select"
            placeholder="Choose select"
          />
        </div>
        <div class="col-span-12">
          <TwMultiSelect
            v-model="formData.multiSelectExample"
            :items="selectionList"
            label="Multi Select"
            placeholder="Choose select"
          />
        </div>
        <div class="col-span-12">
          <TwToggle
            id="toggle"
            v-model="formData.toggleExample"
            label="Toggle"
          />
        </div>
        <div class="col-span-12 flex justify-end gap-1">
          <TwButton ripple variant="secondary" type="button" class="px-4">
            Reset
          </TwButton>
          <TwButton ripple type="submit" class="px-4"> Submit </TwButton>
        </div>
      </TwForm>
    </div>
  </div>
</template>
