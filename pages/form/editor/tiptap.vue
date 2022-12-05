<script setup lang="ts">
useHead({
  title: 'Tiptap Editor'
})

const test = ref('')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Tiptap Editor
    </h1>
    <hr class="my-2 border" />
    <client-only>
      <KExampleEditorTiptap></KExampleEditorTiptap>
    </client-only>
  </div>
</template>
