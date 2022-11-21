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
  }
  type?: string
}

defineProps<Props>();
const sidebarStore = useSidebarStore()

const { width, type } = useBreakpoints()
</script>

<template>
  <li>
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" aria-label="Dashboard">
      <nuxt-link :to="item.url"
        class="flex md:justify-center lg:justify-start duration-300 items-center rounded-lg gap-3 cursor-pointer px-5 py-3 mb-4 md:hover:bg-[#1d152a7a] border-transparent"
        exact-active-class="bg-[#1d152a] !md:hover:bg-[#1d152a] border-b-4 !border-[#150f1e] text-[#9fafcb] font-bold"
        @click="sidebarStore.mobileOpen = false">
        <vue-feather :type="item.icon"></vue-feather>
        <div class="md:hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </li>
</template>
