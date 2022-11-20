<script setup lang="ts">
import VueFeather from "vue-feather"

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

const { width, type } = useBreakpoints()
</script>

<template>
  <li>
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" aria-label="Dashboard">
      <nuxt-link :to="item.url"
        class="flex justify-center lg:justify-start duration-300 items-center rounded-lg gap-3 cursor-pointer px-5 py-3 mb-4 hover:bg-[#142e71] border-transparent"
        exact-active-class="text-[#9fafcb] bg-[#142e71] !hover:bg-[#16347e] border-b-4 !border-[#102766] font-bold">
        <vue-feather :type="item.icon"></vue-feather>
        <div class="hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </li>
</template>
