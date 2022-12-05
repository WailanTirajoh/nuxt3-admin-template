<script setup lang="ts">
type Position = 'top' | 'left' | 'right' | 'bottom'
interface Props {
  position?: Position,
  width?: string,
  height?: string,
}

const props = defineProps<Props>();

const isOpen = ref(false);
const position = computed(() => {
  return props.position ?? 'right'
})
const height = computed(() => {
  if (['right', 'left'].includes(position.value)) {
    return props.height
  }
  return props.height ?? '500px'
})
const width = computed(() => {
  if (['right', 'left'].includes(position.value)) {
    return props.width ?? '400px'
  }
  return props.width ?? '100%'
})
const classPosition = computed(() => {
  switch (position.value) {
    case "right":
      return 'top-0 right-0'
    case "top":
      return 'left-0 top-0'
    case "bottom":
      return 'left-0 bottom-0'
    default:
      return 'top-0 left-0'
  }
});

const openOffCanvas = () => {
  isOpen.value = true;
};
const closeOffCanvas = () => {
  isOpen.value = false;
};

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}, {
  immediate: true,
})
</script>

<template>
  <div :class="position">
    <span @click="openOffCanvas()">
      <slot name="button"></slot>
    </span>
    <transition name="slide-fade">
      <div v-if="isOpen"
        class="fixed z-40 flex flex-col max-w-full bg-white bg-clip-padding transition-all duration-300 ease-in-out h-full shadow-2xl"
        :class="classPosition" :style="{ width: width, height: height, maxWidth: '100vw', maxHeight: '100vh' }">
        <div class="flex justify-between p-4 border-b-2 border-b-gray-200 items-center">
          <h3 class="font-medium text-2xl" @click="closeOffCanvas()">
            <slot name="header"></slot>
          </h3>
          <button
            class="duration-200 p-1 ml-auto bg-transparent border-0 text-black opacity-30 hover:opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            @click="closeOffCanvas()">
            <KIconFeather type="x" />
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <slot />
        </div>
      </div>
    </transition>
    <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="isOpen" class="fixed inset-0 transform transition-all z-10">
        <div class="absolute inset-0 bg-gray-900 opacity-50" @click="closeOffCanvas"></div>
      </div>
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

.top .slide-fade-enter-from {
  transform: translateY(-100%);
}

.top .slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.top .slide-fade-leave-active-to {
  transition: all 0.5s ease-in-out;
}

.top .slide-fade-enter,
.top .slide-fade-leave-to {
  transform: translateY(-100%);
}

.bottom .slide-fade-enter-from {
  transform: translateY(100%);
}

.bottom .slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.bottom .slide-fade-leave-active-to {
  transition: all 0.5s ease-in-out;
}

.bottom .slide-fade-enter,
.bottom .slide-fade-leave-to {
  transform: translateY(100%);
}
</style>
