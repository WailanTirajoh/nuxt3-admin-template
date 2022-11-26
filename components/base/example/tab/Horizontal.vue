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

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab
}

/**
 * Example modal code
 */
const exampleCode = `<BaseTab
  :tabs="tabs"
  :current-tab="currentTab"
  position="bottom"
  nav-class="px-2 rounded-t gap-2 py-2"
  tab-class="p-2 text-gray-900 rounded"
  line-class="!bg-gray-700 rounded-t"
  tab-active-class="!font-bold"
  @after-move="handleAfterMove"
>
  <template #tab1>
    Tab 1 template
  </template>
  <template #tab2>
    Tab 2 template
  </template>
  <template #tab3>
    Tab 3 template
  </template>
</BaseTab>
`
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-12 md:col-span-6">
      <div class="text-lg font-bold mb-1">
        Horizontal Tab
      </div>
      <BaseTab type="horizontal" :tabs="tabs" :current-tab="currentTab" @after-move="handleAfterMove" position="bottom"
        nav-class="px-2 rounded-t gap-2 py-2" tab-class="p-2 text-gray-900 rounded" line-class="!bg-gray-700 rounded-t"
        tab-active-class="!font-bold">
        <template #tab1>
          Tab 1 template
        </template>
        <template #tab2>
          Tab 2 template
        </template>
        <template #tab3>
          Tab 3 template
        </template>
      </BaseTab>
    </div>
    <div class="col-span-12 md:col-span-6">
      <BaseUtilCodeView :text="exampleCode" />
    </div>
  </div>
</template>
