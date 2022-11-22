<script setup lang="ts">
import VueFeather from "vue-feather"
import { useSidebarStore } from "~~/store/sidebar";

interface Props {
  item: {
    isTitle: boolean
    name: string
    url?: string
    key?: string
    icon: string
    submenu: Array<{
      name: string
      url: string
      icon?: string
    }>
  }
  type?: string
}

defineProps<Props>();

const { width, type } = useBreakpoints()
const animationOpenClose = useAnimationOpenClose()
const sidebarStore = useSidebarStore()

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li>
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="item.name" @click="toggleOpen">
      <div
        class="flex md:justify-center lg:justify-start duration-300 items-center rounded-lg gap-3 cursor-pointer px-5 py-3 mb-4 md:hover:bg-[#1d152a] border-transparent">
        <vue-feather :type="item.icon"></vue-feather>
        <div class="md:hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
        <div class="md:hidden lg:flex ml-auto items-center">
          <vue-feather type="chevron-down" class="duration-300" :class="{ 'rotate-180': isOpen }"></vue-feather>
        </div>
      </div>
    </div>
    <!-- <div class="pb-1 mb-2"> -->
    <transition name="expand" @enter="animationOpenClose.animateEnter"
      @after-enter="animationOpenClose.animateAfterEnter" @leave="animationOpenClose.animateLeave">
      <ul class="bg-[#1d152a9a] rounded-xl" v-show="isOpen">
        <template v-for="sub in item.submenu" :key="item.key">
          <li>
            <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="sub.name">
              <nuxt-link :to="sub.url"
                class="flex md:justify-center lg:justify-start duration-300 items-center gap-3 cursor-pointer px-5 py-3 mb-2 md:hover:bg-[#1d152a] border-transparent"
                exact-active-class="border-l-4 !border-gray-300 font-bold bg-[#1d152a] !text-[#f0f0f0]"
                @click="sidebarStore.mobileOpen = false">
                <vue-feather :type="sub.icon"></vue-feather>
                <div class="md:hidden lg:block select-none">
                  {{ sub.name }}
                </div>
              </nuxt-link>
            </div>
          </li>
        </template>
      </ul>
    </transition>
    <!-- </div> -->
  </li>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all .4s ease-in-out;
  overflow: hidden;
}
</style>
