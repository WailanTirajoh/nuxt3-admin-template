<script setup lang="ts">
import VueFeather from "vue-feather";

const props = defineProps({
  position: {
    type: String,
    required: false,
    default: () => "left",
  },
  width: {
    type: String,
    required: false,
    default: () => "400px"
  }
});

const classPosition = computed(() => {
  switch (props.position) {
    case "right":
      return 'right-0'
    case "top":
      return 'top-0'
    case "bottom":
      return 'bottom-0'
    default:
      return 'left-0'
  }
});

const isOpen = ref(false);
const openOffCanvas = () => {
  isOpen.value = true;
};
const closeOffCanvas = () => {
  isOpen.value = false;
};
</script>

<template>
  <div :class="props.position">
    <span @click="openOffCanvas()">
      <slot name="button"></slot>
    </span>
    <transition-group name="slide-fade">
      <div v-if="isOpen"
        class="fixed bottom-0 z-40 flex flex-col max-w-full bg-white bg-clip-padding transition-all duration-300 ease-in-out h-full shadow-2xl"
        :class="classPosition" :style="{  width: props.width  }">
        <div class="flex justify-between p-4 border-b-2 border-b-gray-200 items-center">
          <h3 class="font-medium text-2xl" @click="closeOffCanvas()">
            <slot name="header"></slot>
          </h3>
          <button
            class="duration-200 p-1 ml-auto bg-transparent border-0 text-black opacity-30 hover:opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            @click="closeOffCanvas()">
            <vue-feather type="x" />
          </button>
        </div>
        <div class="p-4 overflow-y-auto" style="max-height: 90vh">
          <slot />
        </div>
      </div>
    </transition-group>
    <transition enter-active-class="ease-in-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-300" leave-from-class="opacity-25" leave-to-class="opacity-0" appear="">
      <div v-if="isOpen" class="fixed inset-0 z-30 bg-black transition-all ease-in-out opacity-25"
        @click="closeOffCanvas()"></div>
    </transition>
  </div>
</template>

<style scoped>
.left .slide-fade-enter-from {
  transform: translateX(-100%);
}

.left .slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.left .slide-fade-leave-active-to {
  transition: all 0.5s ease-in-out;
}

.left .slide-fade-enter,
.left .slide-fade-leave-to {
  transform: translateX(-100%);
}

.right .slide-fade-enter-from {
  transform: translateX(100%);
}

.right .slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.right .slide-fade-leave-active-to {
  transition: all 0.5s ease-in-out;
}

.right .slide-fade-enter,
.right .slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
