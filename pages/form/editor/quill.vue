<script setup lang="ts">
useHead({
  title: 'Quill Editor'
})

const test = ref('')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Quill Editor
    </h1>
    <hr class="my-2 border" />
    <client-only>
      <KExampleEditorQuill></KExampleEditorQuill>
    </client-only>
  </div>
</template>
