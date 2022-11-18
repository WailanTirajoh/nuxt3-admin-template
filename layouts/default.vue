<template>
  <div>
    <BaseHeader />
    <div class="p-4">
      <div class="px-10">
        <div class="w-full bg-white bg-opacity-10 rounded-t-2xl h-4">
        </div>
      </div>
      <div class="flex min-h-screen text-sky-900 rounded-3xl shadow-lg">
        <BaseSidebar class="h-full" />
        <div class="w-full sm:w-[calc(100%-8rem)] lg:w-[calc(100%-16rem)] bg-[#071a50] rounded-3xl sm:rounded-l-none">
          <div class="p-5 bg-sky-100 h-full rounded-3xl">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
