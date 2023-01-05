<script setup>
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">
      Skeleton
    </h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <p class="text-md font-medium">
          Shimmer
        </p>
        <div class="p-2 flex flex-col md:flex-row gap-3 rounded-md border dark:border-gray-700 w-full max-w-sm bg-white dark:bg-gray-800">
          <div class="skeleton w-full md:w-52 h-32 rounded bg-gray-200 dark:bg-gray-900"></div>
          <div class="w-full">
            <div class="skeleton w-full h-4 rounded bg-gray-200 dark:bg-gray-900"></div>
            <div class="skeleton w-16 h-4 rounded bg-gray-200 dark:bg-gray-900"></div>
          </div>
        </div>
      </div>
      <div class="col-span-12">
        <p class="text-md font-medium">
          Pulse
        </p>
        <div class="border dark:border-gray-700 rounded-md p-4 max-w-sm w-full bg-white dark:bg-gray-800">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-gray-200 dark:bg-gray-900 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-gray-200 dark:bg-gray-900 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-gray-200 dark:bg-gray-900 rounded col-span-2"></div>
                  <div class="h-2 bg-gray-200 dark:bg-gray-900 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-gray-200 dark:bg-gray-900 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
