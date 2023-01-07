<script setup lang="ts">
import { useToast, TwButton, TwToast } from "vue3-tailwind";

useHead({
  title: "Toasts",
});

const { success, error, warning, info } = useToast();
</script>

<template>
  <div class="">
    <div class="grid gap-2">
      <h2 class="text-2xl font-bold">Toasts</h2>
      <hr class="my-2 border dark:border-gray-700" />
      <TwButton
        variant="success"
        @click="
          success({
            message: 'test',
            lifetime: 5000,
          })
        "
      >
        Success Toast
      </TwButton>
      <TwButton
      variant="danger"
        @click="
          error({
            message: 'test',
            lifetime: 5000,
          })
        "
      >
        Error Toast
      </TwButton>
      <TwButton
        variant="warning"
        @click="
          warning({
            message: 'test',
            lifetime: 5000,
          })
        "
      >
        Warning Toast
      </TwButton>
      <TwButton
        variant="info"
        @click="
          info({
            message: 'test',
            lifetime: 5000,
          })
        "
      >
        Info Toast
      </TwButton>
    </div>
  </div>
</template>
