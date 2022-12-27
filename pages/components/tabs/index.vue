<script setup lang="ts">
import { ref } from "vue";
import { TwTab } from "vue3-tailwind";

const horizontalTabTop = ref();
const horizontalTabBottom = ref();
const verticalTabLeft = ref();
const verticalTabRight = ref();
const tabs = ref([
  {
    name: "Tab 1",
    ref: "tab1",
  },
  {
    name: "Tab 2",
    ref: "tab2",
  },
  {
    name: "Tab 3",
    ref: "tab3",
  },
]);
const currentTab = ref("tab1");

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab;
  horizontalTabTop.value.changeTab(currentTab.value);
  horizontalTabBottom.value.changeTab(currentTab.value);
  verticalTabLeft.value.changeTab(currentTab.value);
  verticalTabRight.value.changeTab(currentTab.value);
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Tabs</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div
        class="col-span-12 p-2 shadow-inner rounded bg-gray-200 dark:bg-gray-900"
      >
        <h3 class="text-base font-medium mb-2">Horizontal Tab - Line Bottom</h3>
        <TwTab
          ref="horizontalTabBottom"
          type="horizontal"
          position="bottom"
          :tabs="tabs"
          :current-tab="currentTab"
          nav-class="px-2 rounded-t gap-2 py-2"
          tab-class="p-2 text-gray-900 dark:text-gray-300 rounded"
          line-class="!bg-gray-700 rounded-t"
          tab-active-class="!font-bold"
          body-class="bg-white dark:bg-gray-800 shadow border rounded dark:border-gray-700"
          @after-move="handleAfterMove"
        >
          <template #tab1> Tab 1 template </template>
          <template #tab2> Tab 2 template </template>
          <template #tab3> Tab 3 template </template>
        </TwTab>
      </div>
      <div
        class="col-span-12 p-2 shadow-inner rounded bg-gray-200 dark:bg-gray-900"
      >
        <h3 class="text-base font-medium mb-2">Horizontal Tab - Line Top</h3>
        <TwTab
          ref="horizontalTabTop"
          type="horizontal"
          position="top"
          :tabs="tabs"
          :current-tab="currentTab"
          nav-class="px-2 rounded-t gap-2 py-2"
          tab-class="p-2 text-gray-900 dark:text-gray-300 rounded"
          line-class="!bg-gray-700 rounded-lg"
          tab-active-class="!font-bold"
          body-class="bg-white dark:bg-gray-800 shadow border rounded dark:border-gray-700"
          @after-move="handleAfterMove"
        >
          <template #tab1> Tab 1 template </template>
          <template #tab2> Tab 2 template </template>
          <template #tab3> Tab 3 template </template>
        </TwTab>
      </div>
      <div
        class="col-span-12 p-2 shadow-inner rounded bg-gray-200 dark:bg-gray-900"
      >
        <h3 class="text-base font-medium mb-2">Vertical Tab - Line Left</h3>
        <TwTab
          ref="verticalTabLeft"
          type="vertical"
          position="left"
          :tabs="tabs"
          :current-tab="currentTab"
          nav-class="px-2 rounded-l gap-2 py-2"
          tab-class="p-2 text-gray-900 dark:text-gray-300 rounded text-left"
          line-class="!bg-gray-700 rounded"
          tab-active-class="!font-bold"
          body-class="bg-white dark:bg-gray-800 shadow rounded border dark:border-gray-700"
          @after-move="handleAfterMove"
        >
          <template #tab1> Tab 1 template </template>
          <template #tab2> Tab 2 template </template>
          <template #tab3> Tab 3 template </template>
        </TwTab>
      </div>
      <div
        class="col-span-12 p-2 shadow-inner rounded bg-gray-200 dark:bg-gray-900"
      >
        <h3 class="text-base font-medium mb-2">Vertical Tab - Line Right</h3>
        <TwTab
          ref="verticalTabRight"
          type="vertical"
          position="right"
          :tabs="tabs"
          :current-tab="currentTab"
          nav-class="px-2 rounded-l gap-2 py-2"
          tab-class="p-2 text-gray-900 dark:text-gray-300 rounded text-center bg-gray-200 dark:bg-gray-900 shadow-inset"
          line-class="!bg-gray-700 rounded-l"
          tab-active-class="!font-bold"
          body-class="bg-white dark:bg-gray-800 shadow rounded border dark:border-gray-700"
          @after-move="handleAfterMove"
        >
          <template #tab1> Tab 1 template </template>
          <template #tab2> Tab 2 template </template>
          <template #tab3> Tab 3 template </template>
        </TwTab>
      </div>
    </div>
  </div>
</template>
