<script setup lang="ts">
import VueFeather from "vue-feather";
import feather from "feather-icons";
import { useToastStore } from "~/store/toast"

useHead({
  title: 'Icons'
})

const toastStore = useToastStore()
const icons = Object.keys(feather.icons);
const search = ref("");

const filteredIcon = computed(() => {
  return icons.filter((item) => {
    if (!search.value) return true;
    return item?.toLowerCase().includes(search.value.toLowerCase());
  });
});

const composableText = useText()
const copyText = (text: string) => {
  if (composableText.copy(text)) {
    toastStore.success({
      message: `${text} copied to clipboard!`
    })
  }
};
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Icons</h1>
    <hr class="my-2 border-sky-700" />
    <div class="mb-2">
      <input class="bg-white rounded w-full p-2 focus:outline focus:outline-offset-2 focus:outline-sky-800" type="text"
        v-model="search" placeholder="Type to search icon . . ." />
    </div>
    <div class="text-sm italic">*Click to copy the text</div>
    <TransitionGroup name="list" tag="ul" class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))]">
      <li v-for="icon in filteredIcon" :key="icon" @click="copyText(icon)">
        <KButton :icon="icon" variant="light" class="w-full !text-sky-900" text-position="left" ripple>
          {{ icon }}
        </KButton>
        <!-- <vue-feather :type="icon"></vue-feather> -->
        <!-- <span>{{ icon }}</span> -->
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
