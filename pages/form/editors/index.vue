<script setup lang="ts">
useHead({
  title: 'Editors'
})

const test = ref('')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Editors
    </h1>
    <hr class="my-2 border-sky-700" />
    <client-only>
      {{ test }}
      <KEditorQuill v-model="test" />
    </client-only>
    <KOtherComingSoon />
  </div>
</template>
