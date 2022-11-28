<template>
  <transition enter-active-class="transition ease-out duration-200" enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div v-if="show" class="text-xs absolute top-1/3 left-1/2 grid gap-3 z-10 p-4">
      <div class="flex justify-center">
        <div class="rounded-full glassmorphism w-14 h-14 flex items-center justify-center">
          <KDatatableCircleSpinner />
        </div>
      </div>
      <div class="text-center text-gray-500">Please Wait</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>
