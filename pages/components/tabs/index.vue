<script setup lang="ts">
const tabs = ref([
  {
    name: 'Tab 1',
    ref: 'tab1'
  },
  {
    name: 'Tab 2',
    ref: 'tab2'
  },
  {
    name: 'Tab 3',
    ref: 'tab3'
  }
])
const currentTab = ref('tab1')

const handleMove = (newTab: string) => {
  currentTab.value = newTab
}
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Tabs
    </h1>
    <hr class="my-2 border-sky-700" />
    {{ currentTab }}
    <BaseTab :tabs="tabs" :current-tab="currentTab" @on-move="handleMove"></BaseTab>
  </div>
</template>
