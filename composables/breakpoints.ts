import { computed, onMounted, onUnmounted, ref } from "vue"

/**
 * Breakpoint reference https://tailwindcss.com/docs/screens
 */
export const useBreakpoints = () => {
  let windowWidth = ref(0)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const type = computed(() => {
    if (windowWidth.value < 640) return 'sm'
    if (windowWidth.value >= 768 && windowWidth.value < 1024) return 'md'
    if (windowWidth.value >= 1024 && windowWidth.value < 1280) return 'lg'
    if (windowWidth.value >= 1280 && windowWidth.value < 1536) return 'xl'
    if (windowWidth.value > 1536) return '2xl'
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}
