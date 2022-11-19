<script setup lang="ts">
import { useSidebarStore } from "~/store/sidebar"
import SidebarItem from "./SidebarItem.vue"
import SidebarItemSub from "./SidebarItemSub.vue"

const sidebarStore = useSidebarStore()
</script>

<template>
  <nav class="hidden sm:block lg:w-64 sm:w-32 text-md text-[rgba(140,157,202)] p-6 py-10 h-full rounded-l-3xl">
    <ul>
      <template v-for="sidebar in sidebarStore.items">
        <template v-if="sidebar.isTitle" :item="sidebar">
          <div class="font-bold my-2 text-lg hidden lg:block">
            {{ sidebar.name }}
          </div>
        </template>
        <SidebarItem v-else-if="sidebar.submenu.length === 0" :item="sidebar" />
        <SidebarItemSub v-else :item="sidebar" />
      </template>
    </ul>
  </nav>
</template>


