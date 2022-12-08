<script setup lang="ts">
import { Item, ItemValue } from "./types-selection"

interface Props {
  placeholder?: string;
  items: Array<Item>;
  modelValue: readonly ItemValue[];
  closeOnSelect?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  closeOnSelect: false,
});

const emit = defineEmits([
  'update:modelValue',
]);

const dropdownSelect = ref();
const search = ref();

const filterredItems = computed(() => {
  return props.items.filter(({ label }) => {
    if (!search.value) return true;
    return label.toLowerCase().includes(search.value.toLowerCase());
  });
});

const updateValue = (value: ItemValue) => {
  const tempValue: ItemValue[] = [];
  props.modelValue.forEach((v: ItemValue) => tempValue.push(v));
  if (tempValue.includes(value)) tempValue.splice(tempValue.indexOf(value), 1);
  else tempValue.push(value);
  emit('update:modelValue', tempValue);
  if (props.closeOnSelect === true) dropdownSelect.value.toggleDropdown();
};

const removeSelectedValue = (value: ItemValue) => {
  updateValue(value);
};

const clearData = () => {
  emit('update:modelValue', []);
};
</script>

<template>
  <div>
    <KDropdownSelect ref="dropdownSelect" :rounded="true" :fixed-height="false" @clear-data="clearData">
      <template #body>
        <div v-if="modelValue.length > 0" class="p-2 text-left flex gap-1">
          <div v-for="v in modelValue" :key="v" class="inline-block border rounded">
            <div class="flex items-center gap-2">
              <div class="text-xs rounded text-gray-800 p-1 bg-white h-full w-full">
                {{ v }}
              </div>
              <div class="cursor-pointer bg-gray-200 p-1 w-5 h-full" @click="removeSelectedValue(v)">
                &#10005;
              </div>
            </div>
          </div>
        </div>
        <div v-else class="p-2 text-gray-400 italic text-left">
          {{ placeholder }}
        </div>
      </template>
      <template #list>
        <div class="w-full p-2">
          <input v-model="search"
            class="block w-full rounded text-gray-600 text-xs focus:border-transparent focus:ring-0 focus:outline-none p-3 bg-gray-50"
            type="text" placeholder="Type something" />
        </div>
        <ul class="max-h-52 overflow-y-auto">
          <template v-if="filterredItems.length > 0">
            <li v-for="item in filterredItems" :key="'dropdown-' + item.value"
              class="p-3 cursor-pointer w-full text-sm select-none transition-all duration-300 ease-in-out" :class="{
                'bg-gray-800 text-white': modelValue.includes(item.value),
                'hover:bg-gray-100 text-gray-700': !modelValue.includes(item.value),
              }" @click="updateValue(item.value)">
              {{ item.label }}
            </li>
          </template>
          <template v-else>
            <li class="p-3 w-full text-sm text-center overflow-hidden break-words">
              No matching data for key "{{ search }}"
            </li>
          </template>
        </ul>
      </template>
    </KDropdownSelect>
  </div>
</template>
