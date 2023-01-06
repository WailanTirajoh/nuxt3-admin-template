import { defineStore } from "pinia";
import { Toast } from "vue3-tailwind";
import { useForm } from "vue3-tailwind";

export const useFormExample = defineStore("formExample", () => {
  const toast = Toast();
  const composableForm = useForm();

  const formName = "formExample"

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

  const isError = ref(false);
  const form = computed(() => composableForm.getForm(formName));

  const formRules = {
    inputExample: ["required", "string"],
    textAreaExample: [
      "required",
      "string",
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

  async function submit() {
    const validator = form.value.validator;
    validator.clearErrors();
    await validator.validate();
    if (validator.fail()) {
      toast.error({
        message: validator.getErrorMessage(),
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

    const validator = form.value.validator;
    validator.clearErrors();
  }

  return {
    formName,
    formData,
    selectionList,
    isError,
    formRules,
    submit,
    clear,
  };
});
