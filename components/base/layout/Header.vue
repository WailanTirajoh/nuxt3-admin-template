<script setup lang="ts">
import VueFeather from "vue-feather"
import { useSidebarStore } from "~~/store/sidebar";
const sidebarStore = useSidebarStore()
</script>
<template>
  <div class="px-2 md:px-8">
    <header class="md:flex w-full text-gray-200 border border-[#1d152a7a] rounded-b-xl bg-opacity-40 px-2"
      style="backdrop-filter: blur(7.5px)">
      <div class="h-14 flex justify-between md:justify-center items-center w-full md:w-52 px-4">
        <div class="">
          Wai Admin
        </div>
        <button class="block md:hidden float-right" @click="sidebarStore.mobileOpen = !sidebarStore.mobileOpen">
          <div class="-rotate-90">
            <vue-feather type="bar-chart-2"></vue-feather>
          </div>
        </button>
      </div>
      <div class="block md:hidden" v-show="sidebarStore.mobileOpen">
        <BaseLayoutMobileNav />
      </div>
      <div class="h-14 flex items-center w-full justify-between px-4 md:px-10">
        <div class="">
          <!-- TODO: Add searchbar -->
        </div>
        <div class="">
          <BaseUtilDropdown align="right" width="48">
            <template #trigger>
              <button>
                <img class="w-10 h-10 rounded-full border border-[#1d152a7a]" src="/images/profile.jpeg" alt="">
              </button>
            </template>

            <template #content>
              <NuxtLink to="/profile">
                <button
                  class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
                  <div class="flex gap-2 items-center">
                    <vue-feather type="user" />
                    <div class="">Profile</div>
                  </div>
                </button>
              </NuxtLink>
              <!-- Account Management -->
              <button
                class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">
                <div class="flex gap-2 items-center">
                  <vue-feather type="log-out" />
                  <div class="">Logout</div>
                </div>
              </button>
            </template>
          </BaseUtilDropdown>
        </div>
      </div>
    </header>
  </div>
</template>
