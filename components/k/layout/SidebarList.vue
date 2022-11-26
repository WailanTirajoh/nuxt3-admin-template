<script setup lang="ts">
import { useSidebarStore } from "~/store/sidebar";
import SidebarItem from "./SidebarItem.vue";

const sidebarStore = useSidebarStore();
</script>

<template>
  <ul>
    <template v-for="sidebar in sidebarStore.items">
      <SidebarItem :item="sidebar" :level="1" />
    </template>
  </ul>
</template>
