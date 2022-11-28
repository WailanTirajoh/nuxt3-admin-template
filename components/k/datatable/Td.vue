<template>
  <td @contextmenu="theadContextHandler($event, copyText)">
    <slot />
    <div v-show="contextMenu.isShown" class="fixed inset-0 z-40" @click="theadContextCloseHandler()"
      @contextmenu.prevent="theadContextCloseHandler()" @scroll="theadContextCloseHandler()" />
    <div v-if="copyText" v-show="contextMenu.isShown"
      class="fixed z-50 w-52 bg-white rounded-lg cst-shadow border text-gray-600 flex flex-col gap-3" :style="{
        left: contextMenu.clientX + 'px',
        top: contextMenu.clientY + 'px',
      }">
      <div class="bg-white hover:bg-gray-50 cursor-pointer p-2 rounded" @click="copyTextToClipboard(copyText)">
        Copy to clipboard
      </div>
    </div>
  </td>
</template>
<script>
export default {
  props: {
    copyText: {
      type: [String, Number, Boolean],
      required: false,
      default: null,
    },
  },
  data() {
    return {
      contextMenu: {
        isShown: false,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        screenX: 0,
        screenY: 0,
      },
    }
  },
  methods: {
    theadContextHandler(e) {
      if (!this.copyText) return

      e.preventDefault()
      this.contextMenu.isShown = true

      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      this.contextMenu.clientX = e.clientX
      this.contextMenu.clientY = e.clientY

      // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
      this.contextMenu.pageX = e.pageX
      this.contextMenu.pageY = e.pageY

      // screenX/Y gives the coordinates relative to the screen in device pixels.
      this.contextMenu.screenX = e.screenX
      this.contextMenu.screenY = e.screenY
    },
    theadContextCloseHandler() {
      this.contextMenu.isShown = false
    },
    copyTextToClipboard(text) {
      if (!text) return
      navigator.clipboard.writeText(text)
      this.theadContextCloseHandler()
      alert('text coppied!')
    },
  },
}
</script>
