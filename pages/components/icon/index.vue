<script setup lang="ts">
import feather from "feather-icons";
import { useToast, TwButton, TwInput } from "vue3-tailwind";

useHead({
  title: "Icons",
});

const toast = useToast();
const icons = Object.keys(feather.icons);
const search = ref("");

const filteredIcon = computed(() => {
  return icons.filter((item) => {
    if (!search.value) return true;
    return item?.toLowerCase().includes(search.value.toLowerCase());
  });
});

const composableText = useText();
const copyText = (text: string) => {
  if (composableText.copy(text)) {
    toast.success({
      message: `${text} copied to clipboard!`,
    });
  }
};
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Icons</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="mb-2">
      <TwInput
        class="bg-white rounded w-full p-2 focus:outline focus:outline-offset-2 focus:outline-sky-800"
        type="text"
        v-model="search"
        placeholder="Type to search icon . . ."
      />
    </div>
    <div class="text-sm italic">*Click to copy the text</div>
    <TransitionGroup
      name="list"
      tag="ul"
      class="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(14rem,_1fr))]"
    >
      <li v-for="icon in filteredIcon" :key="icon" @click="copyText(icon)">
        <TwButton
          :icon="icon"
          variant="light"
          class="w-full text-sky-900 dark:text-gray-300"
          text-position="left"
          ripple
        >
          {{ icon }}
        </TwButton>
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
