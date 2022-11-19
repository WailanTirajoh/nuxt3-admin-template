<script setup>
import VueFeather from "vue-feather";
import feather from "feather-icons";

const icons = Object.keys(feather.icons);
const search = ref("");

const filteredIcon = computed({
  get() {
    return icons.filter((item) => {
      if (!search.value) return true;
      return item?.toLowerCase().includes(search.value.toLowerCase());
    });
  },
});

const copyText = (text) => {
  if (!text) return;
  navigator.clipboard.writeText(text);
};
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Icons</h1>
    <hr class="my-2 border-sky-700" />
    <div class="mb-2">
      <input
        class="bg-white rounded w-full p-2 focus:outline focus:outline-offset-2 focus:outline-sky-800"
        type="text"
        v-model="search"
        placeholder="Type to search icon . . ."
      />
    </div>
    <div class="text-sm italic">*Click to copy the text</div>
    <TransitionGroup name="list" tag="ul" class="grid gap-2 grid-cols-cst">
      <li
        class="duration-100 bg-white hover:bg-sky-50 p-2 rounded flex items-center gap-2 cursor-pointer"
        v-for="icon in filteredIcon"
        :key="icon"
        @click="copyText(icon)"
      >
        <vue-feather :type="icon"></vue-feather>
        <span>{{ icon }}</span>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.grid-cols-cst {
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

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
