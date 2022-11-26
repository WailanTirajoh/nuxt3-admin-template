<script setup lang="ts">
import VueFeather from "vue-feather"
import { useSidebarStore } from "~~/store/sidebar";

interface Item {
  isTitle: boolean
  name: string
  url?: string
  key?: string
  icon: string
  submenu: Array<Item>
}

interface Props {
  level: number,
  item: Item
}

defineProps<Props>();

const { type } = useBreakpoints()
const animationOpenClose = useAnimationOpenClose()
const sidebarStore = useSidebarStore()

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li v-if="item.isTitle" :item="item">
    <div class="font-bold my-2 text-lg text-[#b3b8c5] hidden lg:block">
      {{ item.name }}
    </div>
  </li>
  <li v-else-if="item.submenu.length === 0">
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="item.name">
      <nuxt-link :to="item.url"
        class="flex md:justify-center lg:justify-start duration-300 items-center gap-3 cursor-pointer px-5 py-3 mb-2 md:hover:bg-[#1d152a57] border-transparent"
        :class="{
          'rounded-lg': level === 1
        }"
        :exact-active-class="level === 1 ? 'bg-[#1d152a93] !md:hover:bg-[#1d152a] border-b-4 !border-[#150f1a57] !text-[#f0f0f0] font-bold' : 'border-l-4 !border-gray-300 font-bold bg-[#1d152a93] !text-[#f0f0f0]'"
        @click="sidebarStore.mobileOpen = false">
        <vue-feather v-if="item.icon" :type="item.icon"></vue-feather>
        <div class="md:hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </li>
  <li v-else>
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="item.name" @click="toggleOpen">
      <div
        class="flex md:justify-center lg:justify-start duration-300 items-center rounded-lg gap-3 cursor-pointer px-5 py-3 mb-2 md:hover:bg-[#1d152a] border-transparent">
        <vue-feather v-if="item.icon" :type="item.icon"></vue-feather>
        <div class="md:hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
        <div class="md:hidden lg:flex ml-auto items-center">
          <vue-feather type="chevron-down" class="duration-300" :class="{ 'rotate-180': isOpen }"></vue-feather>
        </div>
      </div>
    </div>
    <transition name="expand" @enter="animationOpenClose.animateEnter"
      @after-enter="animationOpenClose.animateAfterEnter" @leave="animationOpenClose.animateLeave">
      <ul class="bg-[#1d152a9a] rounded-xl mb-2 py-1" v-show="isOpen">
        <template v-for="sub in item.submenu" :key="item.key">
          <SidebarItem :item="sub" :level="level + 1" />
        </template>
      </ul>
    </transition>
  </li>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all .4s ease-in-out;
  overflow: hidden;
}
</style>
