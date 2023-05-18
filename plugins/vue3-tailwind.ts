import { TwClickOutside, TwRipple, useForm } from "vue3-tailwind";

export default defineNuxtPlugin((nuxtApp) => {
  // Activate v-ripple directive
  TwRipple.color = "rgba(255, 255, 255, 0.35)";
  TwRipple.zIndex = "55";
  nuxtApp.vueApp.directive("ripple", TwRipple);

  // Activate click outside directive
  nuxtApp.vueApp.directive("click-outside", TwClickOutside);

  // Customize Form Rules
  // You can create new rules here / overwrite the default rules
  // Read detail at: https://github.com/WailanTirajoh/js-form-validator
  const form = useForm();
  form.setCustomRules({
    // New Rule example
    test({ value }) {
      if (value === "test") return "Please do not write test inside this form";
    },
    // Overwrite rule example
    // required({ value }) {
    //   if (!value) return "This field must be filled!";
    // },
  });

  form.setGlobalCustomValidatorErrorMessage({
    ["required"]: "The {field} is required!",
  });
});
