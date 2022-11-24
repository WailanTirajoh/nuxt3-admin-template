<script setup lang="ts">
interface Props {
  currentTab: string
  tabs: Array<{
    name: string
    ref: string
  }>
}
const props = defineProps<Props>()

interface TabRefs {
  [key: string]: HTMLElement;
}
const tabRefs = ref<TabRefs>({})
const currentTab = ref(props.currentTab)
const newTab = ref()
const lineWidth = ref(0)
const lineOffset = ref(0)

const emit = defineEmits(['on-move'])

watch(currentTab, (newValue) => {
  if (newTab.value === newValue) return;
  move(newValue);
})

const changeTab = (ref: string) => {
  currentTab.value = ref
  emit('on-move', currentTab.value)
}

const move = (newActiveTab: string) => {
  if (!currentTab.value) return;

  const element = tabRefs.value[newActiveTab];
  lineWidth.value = element.clientWidth;
  lineOffset.value = element.offsetLeft;
}

onMounted(async () => {
  move(currentTab.value)
})
</script>

<template>
  <nav class="relative flex gap-2 pb-1">
    <button :ref="el => { tabRefs[tab.ref] = el as HTMLElement }" v-for="tab in tabs" @click="changeTab(tab.ref)">
      {{ tab.name }}
    </button>
    <div class="absolute bottom-0 left-0 h-1 bg-gray-900 duration-300 ease rounded-b"
      :style="{ width: `${lineWidth}px`, transform: `translateX(${lineOffset}px)` }" />
  </nav>
</template>
