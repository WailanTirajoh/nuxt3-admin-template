<script setup lang="ts">
import { useSidebarStore } from "~/store/sidebar"
import SidebarItem from "./SidebarItem.vue"
import SidebarItemSub from "./SidebarItemSub.vue"

const sidebarStore = useSidebarStore()
</script>

<template>
  <nav
    class="hidden sm:block lg:w-64 sm:w-32 text-md text-[rgba(140,157,202)] p-6 py-10 h-full rounded-l-3xl">
    <ul>
      <template v-for="sidebar in sidebarStore.items">
        <SidebarItem v-if="sidebar.submenu.length === 0" :item="sidebar" />
        <SidebarItemSub v-else :item="sidebar" />
      </template>
    </ul>
  </nav>
</template>


