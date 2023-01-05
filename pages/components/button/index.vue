<script setup lang="ts">
import { TwButton } from 'vue3-tailwind';

useHead({
  title: 'Buttons'
})
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Button</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))] mb-2">
      <TwButton variant="primary" :ripple="true">
        Primary Button with ripple
      </TwButton>
      <TwButton variant="secondary" :ripple="true">
        Secondary Button with ripple
      </TwButton>
      <TwButton variant="danger" :ripple="true">
        Danger Button with ripple
      </TwButton>
      <TwButton variant="primary">
        Primary Button
      </TwButton>
      <TwButton variant="secondary">
        Secondary Button
      </TwButton>
      <TwButton variant="danger">
        Danger Button
      </TwButton>
      <TwButton icon="smile" variant="primary" icon-position="left">
        Button with Icon
      </TwButton>
      <TwButton icon="smile" variant="primary" icon-position="right">
        Button with Icon Right
      </TwButton>
      <TwButton icon="smile" variant="primary" :disabled="true">
        Disabled Button
      </TwButton>
      <TwButton icon="smile" variant="primary" :disabled="true" :loading="true">
        Loading Button
      </TwButton>
      <TwButton icon="smile" variant="primary" :disabled="true" :loading="true" text-position="left">
        Text Left
      </TwButton>
    </div>
    <div class="flex gap-2 mb-2">
    </div>
  </div>
</template>
