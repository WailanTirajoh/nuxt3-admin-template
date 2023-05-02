<script setup lang="ts">
import { TwToggle, TwFeather } from "vue3-tailwind";
const cookieDark = useCookie('dark-mode')
const isDark = useDark({
  // selector: '#dark-mode',
  valueDark: 'dark vt-dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

watch(isDark, (value) => {
  cookieDark.value = value

  // const htmlElement = document.documentElement;
  const selectorHtml = document.getElementById('dark-mode');
  if(value) {
    // Add a class to the html element
    // htmlElement.classList.add("dark","vt-dark");
    selectorHtml.classList.add("dark","vt-dark");
  } else {
    // htmlElement.classList.remove("dark","vt-dark");
    selectorHtml.classList.remove("dark","vt-dark");
  }
})
</script>
<template>

  <div class="fixed bottom-4 right-4 z-10">
    <button @click="toggleDark()" class="dark:text-gray-200 text-gray-700 bg-gray-300 dark:bg-gray-800 bg-opacity-75 rounded-full w-12 h-12 flex items-center justify-center ">
    <TwFeather :type="cookieDark ? 'moon' : 'sun'"></TwFeather>
  </button>
  </div>
</template>
