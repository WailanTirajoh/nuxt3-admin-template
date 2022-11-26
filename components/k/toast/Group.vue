<script setup lang="ts">
import { Toast } from '~~/interface/toast';
import ToastVue from "./Index.vue"

interface Props {
  toasts: Array<Toast>
  position?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right'
})

const position = computed(() => {
  if (props.position === 'bottom-center') {
    return 'mx-auto bottom-4'
  }
  if (props.position === 'bottom-left') {
    return 'mr-auto bottom-4 ml-4'
  }
  if (props.position === 'bottom-right') {
    return 'ml-auto bottom-4 mr-4'
  }
  if (props.position === 'top-right') {
    return 'ml-auto top-12 mr-4'
  }
  if (props.position === 'top-center') {
    return 'mx-auto top-2'
  }
  return ''
})

const enterClass = computed(() => {
  if (props.position === 'top-right') {
    return 'transform-[translateY(1rem)]'
  }
  if (props.position === 'top-center') {
    return 'transform-[translateX(1rem)]'
  }
  return ''
})
</script>

<template>
  <div>
    <transition-group tag="ul" name="list" class="w-80 fixed inset-x-0 z-50 grid gap-2 break-words pt-3"
      :class="position" style="overflow-wrap: anywhere" appear>
      <toast-vue v-for="toast in props.toasts" :id="toast.id" :key="`toast-${toast.id}`" class="w-full"
        :message="toast.message" :type="toast.type" :lifetime="toast.lifetime" :json-message="toast.jsonMessage"
        :html="toast.html" :title="toast.title" />
    </transition-group>
  </div>
</template>

<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
