<script setup lang="ts">
import VueFeather from "vue-feather"

defineProps<{
  item: {
    isTitle: boolean
    name: string
    url?: string
    key?: string
    icon: string
    submenu: Array<{
      name: string
      url: string
      icon?: string
    }>
  }
  type?: string
}>();

const { width, type } = useBreakpoints()

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li>
    <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="item.name" @click="toggleOpen">
      <div
        class="flex justify-center lg:justify-start duration-300 items-center rounded-lg gap-3 cursor-pointer px-5 py-3 mb-4 hover:bg-[#142e71] border-transparent">
        <vue-feather :type="item.icon"></vue-feather>
        <div class="hidden lg:block select-none whitespace-nowrap overflow-hidden text-ellipsis">
          {{ item.name }}
        </div>
        <div class="ml-auto lg:flex items-center hidden">
          <vue-feather type="chevron-down" class="duration-100" :class="{ 'rotate-180': isOpen }"></vue-feather>
        </div>
      </div>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100" leave-active-class="transition ease-in duration-100"
      leave-from-class="transform opacity-100" leave-to-class="transform opacity-0">
      <ul class="bg-[#102765] rounded-xl pt-3 pb-1 mb-2" v-if="isOpen">
        <template v-for="sub in item.submenu" :key="item.key">
          <li>
            <div :data-tooltip-show="type === 'md'" data-tooltip-pos="right" :aria-label="sub.name">
              <nuxt-link :to="sub.url"
                class="flex justify-center lg:justify-start duration-300 items-center gap-3 cursor-pointer px-5 py-3 mb-2 hover:bg-[#142e71] border-transparent"
                exact-active-class="border-l-4 !border-sky-800 font-bold bg-[#142e71]">
                <vue-feather :type="sub.icon"></vue-feather>
                <div class="hidden lg:block select-none">
                  {{ sub.name }}
                </div>
              </nuxt-link>
            </div>
          </li>
        </template>
      </ul>
    </transition>
  </li>
</template>
