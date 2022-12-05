<script setup lang="ts">
useHead({
  title: 'Buttons'
})
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Button</h1>
    <hr class="my-2 border" />
    <div class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))] mb-2">
      <KButton variant="primary" :ripple="true">
        Primary Button with ripple
      </KButton>
      <KButton variant="secondary" :ripple="true">
        Secondary Button with ripple
      </KButton>
      <KButton variant="danger" :ripple="true">
        Danger Button with ripple
      </KButton>
      <KButton variant="primary">
        Primary Button
      </KButton>
      <KButton variant="secondary">
        Secondary Button
      </KButton>
      <KButton variant="danger">
        Danger Button
      </KButton>
      <KButton icon="smile" variant="primary" icon-position="left">
        Button with Icon
      </KButton>
      <KButton icon="smile" variant="primary" icon-position="right">
        Button with Icon Right
      </KButton>
      <KButton icon="smile" variant="primary" :disabled="true">
        Disabled Button
      </KButton>
      <KButton icon="smile" variant="primary" :disabled="true" :loading="true">
        Loading Button
      </KButton>
      <KButton icon="smile" variant="primary" :disabled="true" :loading="true" text-position="left">
        Text Left
      </KButton>
    </div>
    <div class="flex gap-2 mb-2">
    </div>
  </div>
</template>
