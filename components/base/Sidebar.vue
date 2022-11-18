<script setup>
import VueFeather from "vue-feather"
</script>
<template>
  <div class="hidden sm:block lg:w-64 sm:w-32 text-md bg-[#071a50] text-gray-400 shadow p-6 min-h-screen rounded-l-3xl">
    <ul>
      <li
        class="flex justify-center lg:justify-start duration-300 items-center gap-3 text-[#9fafcb] bg-[#142e71]  hover:bg-[#16347e] p-3 rounded-2xl border-b-4 border-[#102766] cursor-pointer px-7 mb-4">
        <vue-feather type="home"></vue-feather>
        <div class="hidden lg:block">
          Dashboard
        </div>
      </li>
      <li
        class="flex justify-center lg:justify-start duration-300 items-center gap-3 text-[#6879a9] hover:bg-[#142e71]  p-3 rounded-2xl cursor-pointer px-7 mb-4">
        <vue-feather type="inbox"></vue-feather>
        <div class="hidden lg:block">
          Inbox
        </div>
      </li>
      <li
        class="flex justify-center lg:justify-start duration-300 items-center gap-3 text-[#6879a9] hover:bg-[#142e71]  p-3 rounded-2xl cursor-pointer px-7 mb-4">
        <vue-feather type="users"></vue-feather>
        <div class="hidden lg:block">
          Users
        </div>
      </li>
    </ul>
  </div>
</template>
