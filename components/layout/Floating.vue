<script setup lang="ts">
import { TwToggle } from "vue3-tailwind";
import { useThemeStore } from "~~/store/theme";

const theme = useThemeStore();
</script>
<template>
  <div class="fixed bottom-4 right-4 z-10">
    <TwToggle
      id="toggle-dark"
      class="border shadow dark:bg-gray-900 text-gray-200"
      :model-value="theme.isDarkTheme()"
      @update:model-value="
        theme.setTheme(theme.isDarkTheme() ? 'light' : 'dark')
      "
      :no-icon="false"
      active-text=""
      inactive-text=""
      active-icon="moon"
      inactive-icon="sun"
    />
  </div>
</template>
