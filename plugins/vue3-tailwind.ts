import { Vue3Tailwind } from "vue3-tailwind";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Tailwind);
});
