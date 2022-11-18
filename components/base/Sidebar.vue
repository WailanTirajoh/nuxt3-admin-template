<script setup lang="ts">
import VueFeather from "vue-feather"
</script>

<template>
  <div class="hidden sm:block lg:w-64 sm:w-32 text-md bg-[#071a50] text-gray-400 shadow p-6 py-10 min-h-screen rounded-l-3xl">
    <ul>
      <li>
        <NuxtLink to="/"
          class="flex justify-center lg:justify-start duration-300 items-center rounded-2xl gap-3 cursor-pointer px-7 mb-4 p-3 hover:bg-[#142e71] border-transparent"
          exact-active-class="text-[#9fafcb] bg-[#142e71] !hover:bg-[#16347e] border-b-4 !border-[#102766]">
          <vue-feather type="home"></vue-feather>
          <div class="hidden lg:block">
            Dashboard
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/inbox"
          class="flex justify-center lg:justify-start duration-300 items-center rounded-2xl gap-3 cursor-pointer px-7 mb-4 p-3 hover:bg-[#142e71] border-transparent"
          exact-active-class="text-[#9fafcb] bg-[#142e71] !hover:bg-[#16347e] border-b-4 !border-[#102766]">
          <vue-feather type="inbox"></vue-feather>
          <div class="hidden lg:block">
            Inbox
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users"
          class="flex justify-center lg:justify-start duration-300 items-center rounded-2xl gap-3 cursor-pointer px-7 mb-4 p-3 hover:bg-[#142e71] border-transparent"
          exact-active-class="text-[#9fafcb] bg-[#142e71] !hover:bg-[#16347e] border-b-4 !border-[#102766]">
          <vue-feather type="users"></vue-feather>
          <div class="hidden lg:block">
            Users
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
