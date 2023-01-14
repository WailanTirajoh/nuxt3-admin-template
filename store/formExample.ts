import { defineStore } from "pinia";
import { useDialog, useToast } from "vue3-tailwind";
import { useForm } from "vue3-tailwind";

const toast = useToast();
const dialog = useDialog();
const composableForm = useForm();

export const useFormExample = defineStore("formExample", () => {
  const formName = "formExample";

  const formData: {
    [key: string]: any;
  } = reactive({
    fileModel: null,
    selectExample: null,
    multiSelectExample: null,
    inputExample: null,
    toggleExample: null,
  });

  const formRules = {
    inputExample: ["required", "string"],
    textAreaExample: [
      "required",
      "string",
      "test",
      (value: string) => {
        const MIN_LENGTH = 15;
        if (!value || value.length < MIN_LENGTH) {
          return `Min length is ${MIN_LENGTH}, current length is ${value.length}`;
        }
      },
    ],
    selectExample: ["required"],
    toggleExample: [
      "required",
      "boolean",
      (value: string) => {
        if (!value) return "Value must be true";
      },
    ],
  };

  const isError = ref(false);

  const form = computed(() => composableForm.getForm(formName));
  const validator = computed(() => form.value.validator);

  async function submit() {
    const isConfirmed = await dialog.fire({
      title: "Are you sure you want to submit this?",
      description: "This action is irreversible!",
    });
    if (!isConfirmed) return;
    validator.value.clearErrors();
    await validator.value.validate();
    if (validator.value.fail()) {
      toast.error({
        message: validator.value.getErrorMessage(),
      });
      isError.value = true;
      setTimeout(() => {
        isError.value = false;
      }, 1000);
    }
  }

  function clear() {
    formData.fileModel = null;
    formData.selectExample = null;
    formData.multiSelectExample = null;
    formData.inputExample = null;
    formData.textAreaExample = null;
    formData.toggleExample = null;

    validator.value.clearErrors();
  }

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

  return {
    formName,
    formData,
    formRules,
    isError,
    selectionList,
    submit,
    clear,
  };
});
