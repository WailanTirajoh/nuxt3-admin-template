<script setup lang="ts">
import { TwButton, useDialog, useToast } from "vue3-tailwind";

useHead({
  title: "Dialog",
});

const dialog = useDialog();
const toast = useToast();

async function toggleDialog() {
  const isConfirmed = await dialog.fire({
    title: "Hello there",
    description: "How are you?",
    icon: "help-circle",
  });

  if (!isConfirmed) {
    toast.error({
      message: "Rejected",
    });
    return;
  }
  toast.success({
    message: "Accepted",
  });
}
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Dialog</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <TwButton @click="toggleDialog"> Toggle Dialog </TwButton>
  </div>
</template>
