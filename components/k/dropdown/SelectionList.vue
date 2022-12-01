<template>
  <div>
    <KDropdownSelect ref="dropdownSelect" :border-none="true" :disabled="disabled" @clear-data="updateValue(null)">
      <template #body>
        <div v-if="modelValue" class="p-2 text-left dark:text-gray-200">
          {{ valueText }}
        </div>
        <div v-else class="p-2 text-gray-400 italic text-left">
          {{ placeholder }}
        </div>
      </template>
      <template #list>
        <div class="w-full p-2">
          <input v-model="search"
            class="block w-full rounded text-gray-600 dark:text-gray-300 text-xs focus:border-transparent focus:ring-0 focus:outline-none p-3 bg-gray-100 dark:bg-gray-700"
            type="text" placeholder="Type something" />
        </div>
        <ul class="max-h-52 overflow-y-auto">
          <template v-if="items.length === 0">
            <li class="p-3 w-full text-sm text-center overflow-hidden break-words">
              No Data
            </li>
          </template>
          <template v-else-if="filterredItems.length > 0">
            <li v-for="item in filterredItems" :key="'dropdown-' + item.value" class="p-3 cursor-pointer w-full text-sm"
              :class="{
                'bg-gray-800 dark:bg-gray-700 text-white': modelValue === item.value,
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-400':
                  modelValue !== item.value
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

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
      default: () => ''
    },
    items: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: false,
      default: () => null
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: () => false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data() {
    return {
      search: null
    }
  },
  computed: {
    filterredItems() {
      const vm = this
      return this.items.filter((item) => {
        if (!vm.search) return true
        return item.name.toLowerCase().includes(vm.search.toLowerCase())
      })
    },
    valueText() {
      const index = this.items.findIndex((item) => item.value === this.modelValue)
      if (index > -1) {
        return this.items[index].name
      }
      return ''
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('click')
      this.$emit('update:modelValue', value)
      if (this.closeOnSelect === true) {
        this.$refs.dropdownSelect.hideDropdown()
      }
    }
  }
}
</script>
