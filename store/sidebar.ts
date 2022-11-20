// Pinia Store
import { defineStore } from 'pinia';
import sidebarItem from './data/sidebarItem';

export const useSidebarStore = defineStore('sidebar', () => {
  const items = ref(sidebarItem)
  const mobileOpen = ref(false)

  return {
    items,
    mobileOpen,
  }
})
