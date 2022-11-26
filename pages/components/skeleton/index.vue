<script setup>
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Skeleton
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="flex">
      <div class="p-2 flex flex-col md:flex-row gap-3 rounded border w-52 md:w-80">
        <div class="skeleton w-full md:w-52 h-32 rounded bg-gray-300"></div>
        <div class="w-full">
          <div class="skeleton w-full h-4 rounded bg-gray-300"></div>
          <div class="skeleton w-16 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>
