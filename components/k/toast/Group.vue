<script setup lang="ts">
import { Toast } from '~~/interface/toast';
import ToastVue from "./Index.vue"

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | ''
interface Props {
  toasts: Array<Toast>
  position?: Position
  wrapperClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-right'
})

const position = ref(props.position)

const classPosition = computed(() => {
  if (props.position === 'bottom-left') {
    return 'mr-auto bottom-4 ml-4'
  }
  if (props.position === 'bottom-right') {
    return 'ml-auto bottom-4 mr-4'
  }
  if (props.position === 'top-right') {
    return 'ml-auto top-4 mr-4'
  }
  if (props.position === 'top-left') {
    return 'ml-auto top-4 ml-4'
  }
  return ''
})
</script>

<template>
  <div>
    <transition-group tag="ul" name="list" class="w-80 fixed inset-x-0 z-50 grid gap-2 break-words pt-3"
      :class="[classPosition, position, wrapperClass]" style="overflow-wrap: anywhere" appear>
      <toast-vue v-for="toast in props.toasts" :id="toast.id" :key="`toast-${toast.id}`" class="w-full"
        :message="toast.message" :type="toast.type" :lifetime="toast.lifetime" :json-message="toast.jsonMessage"
        :html="toast.html" :title="toast.title" />
    </transition-group>
  </div>
</template>

<style scoped>
/* Bottom Right */
.bottom-right .list-move,
.bottom-right .list-enter-active,
.bottom-right .list-leave-active {
  transition: all 0.5s ease;
}

.bottom-right .list-enter-from,
.bottom-right .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.bottom-right .list-leave-active {
  position: absolute;
}

/* Bottom Left */
.bottom-left .list-move,
.bottom-left .list-enter-active,
.bottom-left .list-leave-active {
  transition: all 0.5s ease;
}

.bottom-left .list-enter-from,
.bottom-left .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.bottom-left .list-leave-active {
  position: absolute;
}


/* Top Right */
.top-right .list-move,
.top-right .list-enter-active,
.top-right .list-leave-active {
  transition: all 0.5s ease;
}

.top-right .list-enter-from,
.top-right .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.top-right .list-leave-active {
  position: absolute;
}

/* Top Left */
.top-left .list-move,
.top-left .list-enter-active,
.top-left .list-leave-active {
  transition: all 0.5s ease;
}

.top-left .list-enter-from,
.top-left .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.top-left .list-leave-active {
  position: absolute;
}
</style>
