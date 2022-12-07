<script setup lang="ts">
/**
 * TODO:
 * - filter on each column
 * - column type (string / number / date / money / etc...)
 */
import { Data, Column, Setting } from '~~/interface/datatable';

interface Props {
  // Required props
  data: Array<Data>
  column: Array<Column>
  limit: number

  // Optional props
  currentPage?: number
  totalData?: number
  isLoading?: boolean
  search?: string
  setting?: Setting
  selected?: Array<string | never>
  serverSide?: boolean
  sortBy?: string
  sortType?: string
  summary?: string
}

const props = defineProps<Props>()
const emit = defineEmits([
  'on-change-sort',
  'on-enter-search',
  'update:search',
  'update:limit',
  'update:selected',
  'update:sortBy',
  'update:sortType',
  'datatable:column-hook',
])

const setting: Setting = props.setting ?? {
  checkbox: false,
  limitOption: [
    {
      label: "5",
      value: 5
    },
    {
      label: "10",
      value: 10
    },
    {
      label: "50",
      value: 50
    },
    {
      label: "100",
      value: 100
    },
    {
      label: "200",
      value: 200
    },
  ]
}

const search = ref(props.search ?? '')
const currentPage = ref(props.currentPage ?? 1)
const sortBy = ref(props.sortBy ?? Object.keys(props.column[0])[0])
const sortType = ref(props.sortType ?? "asc")
const checkAll = ref(false)

const filteredData = computed(() => {
  return props.data.map((data) => data)
    .filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        if (typeof obj[key] === 'string') {
          return obj[key].toLowerCase().includes(search.value.toLowerCase());
        }
      })
    })
})
const totalData = computed(() => filteredData.value.length)
const totalPage = computed(() => Math.ceil(totalData.value / props.limit))
const showFrom = computed(() => (1 + currentPage.value * props.limit) - props.limit)
const showTo = computed(() => currentPage.value * props.limit < totalData.value ? currentPage.value * props.limit : totalData.value)

const data = computed(() => {
  let d = filteredData.value
  d = d.map((data) => data)
    .filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        if (typeof obj[key] === 'string') {
          return obj[key]
            .toLowerCase()
            .includes(search.value.toLowerCase())
        }
      })
    })
    .sort((a, b) => {
      let computedA, computedB
      switch (typeof a[sortBy.value]) {
        case 'string':
          computedA = a[sortBy.value].toLowerCase()
          computedB = b[sortBy.value].toLowerCase()
          break
        default:
          computedA = a[sortBy.value]
          computedB = b[sortBy.value]
      }
      if (computedA < computedB) return -1
      if (computedA > computedB) return 1
      return 0
    })

  if (sortType.value === 'desc') d = d.reverse()

  d = d.splice(showFrom.value - 1, showTo.value)
  return d
})
const limit = computed({
  get() {
    return props.limit
  },
  set(value: number) {
    emit('update:limit', value)
  }
})
const selected = computed({
  get() {
    return props.selected ?? []
  },
  set(value: Array<string>) {
    emit('update:selected', value)
  }
})

// update v-model values
watch(sortBy, (value) => emit('update:sortBy', value))
watch(sortType, (value) => emit('update:sortType', value))
watch(search, (value) => emit('update:search', value))
watch(selected, (value) => {
  if (value.length === props.data.length) checkAll.value = true
  else checkAll.value = false
})


// Event's
const clickSort = (key: string) => emit('on-change-sort', key, props.sortType === 'asc' ? 'desc' : 'asc')
const enterSearch = () => emit('on-enter-search')
const columnClick = (column: Column) => {
  if (column.onColumnClick) column.onColumnClick()
  if (column.sortable) {
    clickSort(column.field)
    updateSort(column)
  }
}
const cellClick = (cellClick: Column) => {
  if (cellClick.onCellClick) cellClick.onCellClick()
}
const columnHook = (arg: any) => {
  emit('datatable:column-hook', arg)
}

// Method's
const updateSort = (h: Column) => {
  sortBy.value = h.field
  sortType.value = sortType.value === 'asc' ? 'desc' : 'asc'
}
const updateCurrentPage = (page: number) => {
  currentPage.value = page
}
const checkAllClick = () => {
  if (checkAll.value) selected.value = []
  else selected.value = props.data.map((data) => data.id)
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 flex justify-between items-center gap-8 text-xs">
      <div class="flex gap-2 items-center">
        <div>Show</div>
        <div>
          <select v-model="limit"
            class="p-2 rounded border dark:bg-gray-900 appearance-none focus:border focus:ring-0 focus:outline-none custor-pointer">
            <option :value="v.value" v-for="v in setting.limitOption">{{ v.label }}</option>
          </select>
        </div>
        <div>entries</div>
      </div>
      <div class="w-full md:w-48 flex items-center">
        <input v-model="search" type="text"
          class="block w-full rounded text-gray-600 border dark:border-gray-700 focus:ring-0 focus:outline-none p-2 dark:bg-gray-900 font-normal"
          placeholder="Type something and press enter . . ." @keyup.enter="enterSearch()" />
      </div>
    </div>
    <div class="col-span-12">
      <div class="relative">
        <div class="overflow-auto table-fix-head dark:border dark:border-gray-700">
          <table class="w-full k-datatable resizable rounded-lg border-separate border-spacing-y-4" :summary="summary">
            <thead>
              <tr>
                <th v-if="setting.checkbox" :style="{
                  width: '20px'
                }">
                  <div class="flex justify-center items-center px-2">
                    <input type="checkbox" v-model="checkAll" @click="checkAllClick">
                  </div>
                </th>
                <th class="select-none" :class="{
                  asc: sortBy == h.field && sortType == 'asc',
                  desc: sortBy == h.field && sortType == 'desc',
                  sorting: h.sortable
                }" :style="{ width: h.width }" @click="columnClick(h)" v-for="h in props.column">
                  {{ h.label }}
                </th>
              </tr>
            </thead>
            <tbody class="text-sm" v-if="(data.length > 0)">
              <tr class="duration-300 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700"
                v-for="d, i in data">
                <td
                  class="duration-300 p-1 bg-white dark:hover:bg-gray-900 relative dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg py-4"
                  style="box-shadow: 20px 3px 20px #0000000b;" v-if="setting.checkbox" :style="{
                    width: '20px'
                  }">
                  <div class="flex justify-center items-center px-2">
                    <input type="checkbox" :value="d['id']" v-model="selected">
                  </div>
                </td>
                <KDatatableTd
                  class="duration-300 p-1 bg-white dark:hover:bg-gray-900 relative dark:border-gray-600 first:rounded-l-lg last:rounded-r-lg py-4"
                  style="box-shadow: 20px 3px 20px #0000000b;" :copyText="d[h.field]" v-for="h in props.column">
                  <slot name="row" :column="h" :data="d" :index="i">
                  </slot>
                  <div v-if="h.component" @click="cellClick(h)">
                    <!-- {{h.component(d,i)}} -->
                    <component :is="h.component(d, i).component" :props="h.component(d, i).props"
                      @column-hook="columnHook"></component>
                  </div>
                  <div v-else-if="h.template" v-html="h.template(d, i)" @click="cellClick(h)">
                  </div>
                  <div v-else @click="cellClick(h)">
                    {{ d[h.field] }}
                  </div>
                </KDatatableTd>
              </tr>
            </tbody>
            <tbody class="text-sm" v-else>
              <tr class="duration-300 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700">
                <td
                  class="duration-300 p-1 hover:bg-gray-100 border dark:hover:bg-gray-900 relative dark:border-gray-600"
                  :colspan="props.column.length + (setting.checkbox ? 1 : 0)">
                  <slot name="empty"></slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <KDatatableLoading :show="isLoading" />
      </div>
    </div>
    <div class="col-span-12">
      <div v-if="totalData > 0" class="flex items-center justify-between">
        <div class="text-xs">
          Showing from {{ showFrom }} to {{ showTo }} of total {{ totalData }} data
        </div>
        <div>
          <KDatatablePagination :current-page="currentPage" :total-data="totalData" :total-page="totalPage"
            :is-loading="isLoading" :per-page="limit" @change-current-page="updateCurrentPage" class="text-xs" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.k-datatable .sorting {
  position: relative;
  cursor: pointer;
}

.k-datatable .sorting::after {
  content: '\2304';
  font-size: 0.6rem;
  top: 0.75rem;
  position: absolute;
  right: 0.5rem;
  opacity: 0.35;
}

.k-datatable .sorting::before {
  content: '\2303';
  font-size: 0.6rem;
  top: 0.75rem;
  position: absolute;
  right: 0.5rem;
  opacity: 0.35;
}

.k-datatable .sorting.desc::after {
  opacity: 1;

}

.k-datatable .sorting.asc::before {
  opacity: 1;
}
</style>
