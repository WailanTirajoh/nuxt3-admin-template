<script setup lang="ts">
import VueFeather from "vue-feather"
import { useSidebarStore } from "~~/store/sidebar";
const sidebarStore = useSidebarStore()
const { width, type } = useBreakpoints()
</script>
<template>
  <header class="md:flex w-full border-sky-800 border-b text-gray-200">
    <div class="border-r border-sky-800 py-5 p-2 px-10">
      Wai Admin
      <button class="block sm:hidden float-right " @click="sidebarStore.mobileOpen = !sidebarStore.mobileOpen">
        <div class="-rotate-90">
          <vue-feather type="bar-chart-2"></vue-feather>
        </div>
      </button>
    </div>
    <div class="block sm:hidden" v-if="type === 'sm'" v-show="sidebarStore.mobileOpen">
      <BaseLayoutMobileNav />
    </div>
  </header>
</template>
