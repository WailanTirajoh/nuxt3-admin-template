<template>
  <div class="relative">
    <div @click="open = !open">
      <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false" />

    <transition enter-active-class="transition ease-out duration-200" enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-show="open" class="absolute z-50 mt-4 rounded-md shadow-lg" :class="[widthClass, alignmentClasses]"
        style="display: none" @click="open = false">
        <div class="rounded-md ring-1 ring-black ring-opacity-5" :class="contentClasses">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'right',
    },
    width: {
      type: String,
      default: '48',
    },
    contentClasses: {
      type: Array,
      default: () => ['py-1', 'bg-white dark:bg-gray-800'],
    },
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    widthClass() {
      return {
        48: 'w-48',
      }[this.width.toString()]
    },
    alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0'
      }

      if (this.align === 'right') {
        return 'origin-top-right right-0'
      }

      return 'origin-top'
    },
  },
  mounted() {
    document.addEventListener('keydown', this.closeOnEscape)
  },
  unmounted() {
    document.removeEventListener('keydown', this.closeOnEscape)
  },
  methods: {
    closeOnEscape(e) {
      if (this.open && e.key === 'Escape') {
        this.open = false
      }
    },
  },
}
</script>
