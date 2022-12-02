<script setup lang="ts">
type ItemValue = any
interface Props {
  placeholder?: string
  items: Array<{
    name: string
    value: ItemValue
  }>
  modelValue: Array<ItemValue>
  closeOnSelect?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  closeOnSelect: false,
})

const emit = defineEmits([
  'update:modelValue'
])

const dropdownSelect = ref()
const search = ref()

const filterredItems = computed(() => {
  return props.items.filter((item) => {
    if (!search.value) return true
    return item.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const updateValue = (value: ItemValue) => {
  const tempValue: Array<ItemValue> = []

  props.modelValue.forEach((v: ItemValue) => tempValue.push(v))
  if (tempValue.includes(value)) {
    const index = tempValue.indexOf(value)
    tempValue.splice(index, 1)
  } else {
    tempValue.push(value)
  }

  emit('update:modelValue', tempValue)

  if (props.closeOnSelect === true) dropdownSelect.value.toggleDropdown()
}

const removeSelectedValue = (v: ItemValue) => {
  updateValue(v)
}

const clearData = () => {
  emit('update:modelValue', [])
}
</script>

<template>
  <div>
    <KDropdownSelect ref="dropdownSelect" :border-none="true" :fixed-height="false" @clear-data="clearData">
      <template #body>
        <div v-if="modelValue.length > 0" class="p-2 text-left flex gap-1">
          <div v-for="v in modelValue" :key="v" class="inline-block text-xs rounded bg-green-600 text-white p-1 cursor-pointer"
            @click="removeSelectedValue(v)">
            {{ v }}
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
              {{ item.name }}
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
