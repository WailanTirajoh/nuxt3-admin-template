

<script setup lang="ts">
import VueFeather from "vue-feather";

interface Props {
  fullHeight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fullHeight: true
})
const emit = defineEmits(['on-close', 'on-open'])

const isOpen = ref(false)
const bodyHeight = computed(() => {
  if (props.fullHeight) {
    return '65vh'
  }
  return 'auto'
})

const toggleModal = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      emit('on-open')
      document.body.style.overflow = 'hidden';
    } else {
      emit('on-close')
      document.body.style.overflow = '';
    }
  }
}, {
  immediate: true,
})
</script>

<template>
  <div>
    <span @click="toggleModal()">
      <slot name="button"></slot>
    </span>
    <transition enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
      <div v-if="isOpen"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none justify-center pt-12 flex w-100">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="width: 100%">
          <div
            class="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
            <div
              class="flex items-center justify-between p-5 border-b border-solid border-slate-200 dark:border-gray-700 rounded-t px-6">
              <div class="text-3xl font-semibold">
                <slot name="header"></slot>
              </div>
              <button
                class="duration-200 p-1 ml-auto transition-opacity bg-transparent border-0 text-black opacity-30 hover:opacity-60 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                @click="toggleModal()">
                <vue-feather type="x" />
              </button>
            </div>
            <div class="relative p-6 flex-auto overflow-y-auto" :style="{ height: bodyHeight }">
              <slot name="body"></slot>
            </div>
            <div class="flex items-center p-6 border-t dark:border-gray-700 border-solid border-slate-200 rounded-b">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="isOpen" class="fixed inset-0 transform transition-all z-10">
        <div class="absolute inset-0 bg-gray-900 opacity-50" @click="toggleModal"></div>
      </div>
    </transition>
  </div>
</template>
