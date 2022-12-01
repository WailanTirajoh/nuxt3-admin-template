<template>
  <div>
    <KDropdownSelect ref="dropdownSelect" :border-none="true" :fixed-height="false" @clear-data="clearData">
      <template #body>
        <div v-if="value" class="p-2 text-left flex gap-1">
          <span v-for="v in value" :key="v" class="text-xs rounded bg-green-600 text-white">
            {{ v }}
          </span>
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
                'bg-red-500 text-white': value.includes(item.value),
                'hover:bg-gray-100 text-gray-700': !value.includes(item.value),
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
      default: () => '',
    },
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: [Array],
      required: false,
      default: () => [],
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      search: null,
      thevalue: this.value,
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
      const index = this.items.findIndex((item) => item.value === this.value)
      if (index > -1) {
        return this.items[index].name
      }
      return ''
    },
  },
  methods: {
    updateValue(value) {
      const tempValue = []
      this.value.forEach((v) => tempValue.push(v))
      if (tempValue.includes(value)) {
        const index = tempValue.indexOf(value)

        tempValue.splice(index, 1)
      } else {
        tempValue.push(value)
      }

      this.$emit('input', tempValue)
      if (this.closeOnSelect === true) {
        this.$refs.dropdownSelect.hideDropdown()
      }
    },
    clearData() {
      this.$emit('input', [])
    },
  },
}
</script>
