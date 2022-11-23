<script setup lang="ts">
useHead({
  title: 'Buttons'
})
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Button</h1>
    <hr class="my-2 border-sky-700" />
    <div class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))] mb-2">
      <BaseButton color="primary" :ripple="true">
        Primary Button with ripple
      </BaseButton>
      <BaseButton color="secondary" :ripple="true">
        Secondary Button with ripple
      </BaseButton>
      <BaseButton color="danger" :ripple="true">
        Danger Button with ripple
      </BaseButton>
      <BaseButton color="primary">
        Primary Button
      </BaseButton>
      <BaseButton color="secondary">
        Secondary Button
      </BaseButton>
      <BaseButton color="danger">
        Danger Button
      </BaseButton>
      <BaseButton icon="smile" color="primary" icon-position="left">
        Button with Icon
      </BaseButton>
      <BaseButton icon="smile" color="primary" icon-position="right">
        Button with Icon Right
      </BaseButton>
      <BaseButton icon="smile" color="primary" :disabled="true">
        Disabled Button
      </BaseButton>
      <BaseButton icon="smile" color="primary" :disabled="true" :loading="true">
        Loading Button
      </BaseButton>
    </div>
    <div class="flex gap-2 mb-2">
    </div>
  </div>
</template>
