<script setup lang="ts">
const quill = ref('')
</script>

<template>
  <div>
    <client-only>
      <KEditorQuill v-model="quill" />
    </client-only>
  </div>
</template>
