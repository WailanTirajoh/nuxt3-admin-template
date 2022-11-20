

<script setup lang="ts">
import VueFeather from "vue-feather"
import { useToastStore } from "~/store/toast"

interface Props {
  id: string,
  message?: string,
  html?: string,
  lifetime?: number,
  type: string,
  jsonMessage?: object | null
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  html: '',
  lifetime: 5000,
  jsonMessage: null
})

const type = ref(props.type)
const isShown = ref(false)
const lifetime = ref(props.lifetime)
const interval = ref()
const hover = ref(false)
const toastStore = useToastStore()

const classType = computed(() => {
  switch (props.type) {
    case 'success':
      return { 'bg-green-600 dark:bg-gray-600': true }
    case 'info':
      return { 'bg-gray-400 dark:bg-gray-600': true }
    case 'error':
      return { 'bg-red-600 dark:bg-gray-600': true, error: false }
    default:
      return { 'bg-green-600 dark:bg-gray-600': true }
  }
})

const iconType = computed(() => {
  switch (props.type) {
    case 'success':
      return 'check-circle'
    case 'info':
      return 'message-circle'
    case 'error':
      return 'alert-circle'
    default:
      return 'help-circle'
  }
})

const barStyle = computed(() => `width: ${(lifetime.value / props.lifetime) * 100}%`)

onMounted(() => {
  isShown.value = true
  interval.value = setInterval(() => {
    if (!hover.value) lifetime.value -= 10
    if (lifetime.value < 1) {
      removeToast()
    }
  }, 10)
})


const removeToast = () => {
  clearInterval(interval.value)
  toastStore.removeToast(props.id)
}
</script>

<template>
  <li :class="type">
    <transition name="toast">
      <div v-if="isShown" class="text-center relative" @mouseenter="hover = true" @mouseleave="hover = false">
        <div class="py-3 text-white px-2 shadow bg-opacity-95 rounded relative max-h-60 overflow-y-auto"
          :class="classType">
          <div class="text-black opacity-50 cursor-pointer rounded-full absolute top-2 right-4" @click="removeToast()">
            <vue-feather class="text-gray-50" type="x" />
          </div>
          <div class="flex items-center gap-2 text-left">
            <template v-if="iconType">
              <vue-feather class="text-gray-50" :type="iconType" />
            </template>
            <template v-if="message">
              <div class="text-left pr-4">
                {{ message }}
              </div>
            </template>
            <template v-if="jsonMessage">
              <ul class="flex flex-col gap-2">
                <li v-for="(tmessage, key) in jsonMessage" :key="'errmes' + key" class="p-2 rounded text-left border">
                  <strong>{{ key }}:</strong> {{ tmessage }}
                </li>
              </ul>
            </template>
          </div>
        </div>
        <div class="bg-gray-200 bg-opacity-40 h-1 absolute bottom-0 rounded-xl mx-auto" :style="barStyle"></div>
      </div>
    </transition>
  </li>
</template>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.error .toast-enter-active,
.info .toast-enter-active,
.success .toast-enter-active {
  transition: all 0.3s ease;
  animation: fade 1.5s ease;
}

.toast-leave-to {
  transform: translateX(-100px);
}

.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wiggle {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }

  50% {
    transform: translateY(0px);
    opacity: 1;
  }

  60% {
    transform: translateX(8px);
  }

  70% {
    transform: translateX(-8px);
  }

  80% {
    transform: translateX(4px);
  }

  90% {
    transform: translateX(-4px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes fade {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  50% {
    transform: translateY(0px);
    opacity: 1;
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
