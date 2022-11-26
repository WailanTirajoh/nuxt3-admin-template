<script setup lang="ts">
const tabs = ref([
  {
    name: 'Vertical Tab 1',
    ref: 'vtab1'
  },
  {
    name: 'Vertical Tab 2',
    ref: 'vtab2'
  },
  {
    name: 'Vertical Tab 3',
    ref: 'vtab3'
  }
])
const currentTab = ref('vtab1')

const handleAfterMove = (newTab: string) => {
  currentTab.value = newTab
}

/**
 * Example modal code
 */
const exampleCode = `<BaseTab
  type="vertical"
  :tabs="tabs"
  :current-tab="currentTab"
  @after-move="handleAfterMove"
  position="bottom"
  nav-class="px-2 rounded-l gap-2 py-2"
  tab-class="p-2 text-gray-900 rounded"
  line-class="!bg-gray-700 rounded-r"
  body-class="rounded-r"
  tab-active-class="!font-bold">
  <template #vtab1>
    Tab 1 template
  </template>
  <template #vtab2>
    Tab 2 template
  </template>
  <template #vtab3>
    Tab 3 template
  </template>
</BaseTab>
`
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-12 md:col-span-6">
      <div class="text-lg font-bold mb-1">
        Vertical Tab
      </div>
      <BaseTab type="vertical" :tabs="tabs" :current-tab="currentTab" @after-move="handleAfterMove" position="bottom"
        nav-class="px-2 rounded-l gap-2 py-2" tab-class="p-2 text-gray-900 rounded" line-class="!bg-gray-700 rounded-r"
        body-class="rounded-r" tab-active-class="!font-bold">
        <template #vtab1>
          Tab 1 template
        </template>
        <template #vtab2>
          Tab 2 template
        </template>
        <template #vtab3>
          Tab 3 template
        </template>
      </BaseTab>
    </div>
    <div class="col-span-12 md:col-span-6">
      <BaseUtilCodeView :text="exampleCode" />
    </div>
  </div>
</template>
