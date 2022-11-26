<script setup lang="ts">
type Position = 'bottom' | 'top' | 'left' | 'right'
type Type = 'horizontal' | 'vertical'
interface Props {
  type?: Type
  currentTab: string
  tabs: Array<{
    name: string
    ref: string
  }>
  position?: Position
  navClass?: string
  tabClass?: string
  tabActiveClass?: string
  lineClass?: string
  bodyClass?: string
}
const props = defineProps<Props>()

interface TabRefs {
  [key: string]: HTMLElement;
}
const tabRefs = ref<TabRefs>({})
const currentTab = ref(props.currentTab)
const newTab = ref()
const hlineWidth = ref(0)
const hlineOffset = ref(0)
const vlineHeight = ref(0)
const vlineOffset = ref(0)

const emit = defineEmits(['after-move'])

const positionLineClass = computed(() => {
  let position = ''
  if (type.value === 'horizontal') {
    switch (props.position) {
      case 'top':
        position = 'top-0'
        break
      default:
        position = 'bottom-0'

    }
  }
  else {
    switch (props.position) {
      case 'right':
        position = 'right-0'
        break
      default:
        position = 'left-0'
    }
  }
  return position
})

const type = computed(() => {
  return props.type ?? 'horizontal'
})

watch(currentTab, (newValue) => {
  if (newTab.value === newValue) return;
  move(newValue);
})

const changeTab = (ref: string) => {
  currentTab.value = ref
}

const move = (newActiveTab: string) => {
  if (!currentTab.value) return;

  const element = tabRefs.value[newActiveTab];

  if (type.value === 'horizontal') {
    hlineWidth.value = element.clientWidth;
    hlineOffset.value = element.offsetLeft;
  } else {
    vlineHeight.value = element.clientHeight;
    vlineOffset.value = element.offsetTop;
  }

  emit('after-move', currentTab.value)
}

onMounted(async () => {
  move(currentTab.value)
})
</script>

<template>
  <div v-if="type === 'horizontal'">
    <nav class="relative flex bg-gray-300" :class="[navClass]">
      <button class="py-1" :class="[tabClass, {
        [tabActiveClass as string]: currentTab === tab.ref
      }]" :ref="el => { tabRefs[tab.ref] = el as HTMLElement }" v-for="tab in tabs" @click="changeTab(tab.ref)">
        {{ tab.name }}
      </button>
      <div class="absolute left-0 h-1 bg-gray-900 duration-300 ease" :class="[positionLineClass, lineClass]"
        :style="{ width: `${hlineWidth}px`, transform: `translateX(${hlineOffset}px)` }" />
    </nav>
    <div class="bg-white rounded-b p-2" :class="[bodyClass]">
      <div v-for="tab in tabs" :key="tab.ref">
        <div v-if="currentTab === tab.ref">
          <slot :name="tab.ref" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex" v-else-if="type === 'vertical'">
    <nav class="relative flex flex-col bg-gray-300 w-52" :class="[navClass]">
      <button class="py-1" :class="[tabClass, {
        [tabActiveClass as string]: currentTab === tab.ref
      }]" :ref="el => { tabRefs[tab.ref] = el as HTMLElement }" v-for="tab in tabs" @click="changeTab(tab.ref)">
        {{ tab.name }}
      </button>
      <div class="absolute w-1 top-0 bg-gray-900 duration-300 ease" :class="[positionLineClass, lineClass]"
        :style="{ height: `${vlineHeight}px`, transform: `translateY(${vlineOffset}px)` }" />
    </nav>
    <div class="bg-white rounded-b p-2 w-full" :class="[bodyClass]">
      <div v-for="tab in tabs" :key="tab.ref">
        <div v-if="currentTab === tab.ref">
          <slot :name="tab.ref" />
        </div>
      </div>
    </div>
  </div>
</template>
