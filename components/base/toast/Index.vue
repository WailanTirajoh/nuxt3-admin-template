

<script setup lang="ts">
import VueFeather from "vue-feather"
import { useToastStore } from "~/store/toast"
import { Type } from "~~/interface/toast"

// issue to import props to define props
// ref: https://github.com/vuejs/core/issues/4294
interface Props {
  id: string
  message?: string
  html?: string
  lifetime?: number
  type: Type
  jsonMessage?: object | null
  title?: string | null
  showLifetime?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  html: '',
  lifetime: 5000,
  jsonMessage: null,
  title: null,
  showLifetime: true
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
      return { 'border-t-green-600 dark:border-t-gray-600': true }
    case 'info':
      return { 'border-t-gray-400 dark:border-t-gray-600': true }
    case 'error':
      return { 'border-t-red-600 dark:border-t-gray-600': true, 'error': true }
    case 'warning':
      return { 'border-t-red-600 dark:border-t-gray-600': true }
    default:
      return { 'border-t-green-600 dark:border-t-gray-600': true }
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
    case 'warning':
      return 'alert-circle'
    default:
      return 'help-circle'
  }
})

const textColor = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-800'
    case 'info':
      return 'text-sky-800'
    case 'error':
      return 'text-red-800'
    default:
      return 'text-gray-800'
  }
})

const lifetimePercent = computed(() => (lifetime.value / props.lifetime) * 100)

const barStyle = computed(() => `width: ${lifetimePercent.value}%`)

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
  <div :class="type">
    <transition name="toast">
      <div class="text-center relative text-gray-800" @mouseenter="hover = true" @mouseleave="hover = false">
        <div class="py-3 pt-1 px-2 shadow bg-opacity-95 rounded relative max-h-60 overflow-y-auto bg-white border-t-8"
          :class="classType">
          <div class="text-black opacity-50 cursor-pointer rounded-full absolute top-2 right-2" @click="removeToast()">
            <vue-feather class="text-gray-900" type="x" />
          </div>
          <div class="flex items-center gap-3 text-left">
            <template v-if="iconType">
              <vue-feather class="font-bold text-lg" :class="textColor" :type="iconType" />
            </template>
            <div class="text-left pr-4">
              <template v-if="title">
                <div :class="textColor" class="font-bold text-lg text-gray-900">
                  {{ title }}
                </div>
              </template>
              <template v-if="message">
                <div>
                  {{ message }}
                </div>
              </template>
            </div>
            <template v-if="jsonMessage">
              <ul class="flex flex-col gap-2">
                <li v-for="(tmessage, key) in jsonMessage" :key="'errmes' + key" class="p-2 rounded text-left border">
                  <strong>{{ key }}:</strong> {{ tmessage }}
                </li>
              </ul>
            </template>
          </div>
        </div>
        <div v-if="showLifetime" class="bg-gray-900 bg-opacity-40 h-[0.35rem] absolute bottom-0 rounded-b-md mx-auto"
          :class="{
            'rounded-br-none': lifetimePercent < 95
          }" :style="barStyle"></div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* .toast-enter-from {
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
} */
</style>
