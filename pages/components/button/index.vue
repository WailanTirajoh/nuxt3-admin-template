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
      <BaseButton type="primary" :ripple="true">
        Primary Button with ripple
      </BaseButton>
      <BaseButton type="secondary" :ripple="true">
        Secondary Button with ripple
      </BaseButton>
      <BaseButton type="danger" :ripple="true">
        Danger Button with ripple
      </BaseButton>
      <BaseButton type="primary">
        Primary Button
      </BaseButton>
      <BaseButton type="secondary">
        Secondary Button
      </BaseButton>
      <BaseButton type="danger">
        Danger Button
      </BaseButton>
      <BaseButton icon="smile" type="primary" icon-position="left">
        Button with Icon
      </BaseButton>
      <BaseButton icon="smile" type="primary" icon-position="right">
        Button with Icon Right
      </BaseButton>
      <BaseButton icon="smile" type="primary" :disabled="true">
        Disabled Button
      </BaseButton>
      <BaseButton icon="smile" type="primary" :disabled="true" :loading="true">
        Loading Button
      </BaseButton>
      <BaseButton icon="smile" type="primary" :disabled="true" :loading="true" text-position="left">
        Text Left
      </BaseButton>
    </div>
    <div class="flex gap-2 mb-2">
    </div>
  </div>
</template>
