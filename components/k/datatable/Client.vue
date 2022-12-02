<script setup lang="ts">
import { Data, Header } from '~~/interface/datatable';

type Setting = {
  checkbox: boolean
}

interface Props {
  // Required props
  data: Array<Data>
  header: Array<Header>
  limit: number
  // Optional props
  currentPage?: number
  totalData?: number
  isLoading?: boolean
  sortBy?: string
  sortType?: string
  summary?: string
  search?: string
  setting?: Setting
  selected?: Array<string | never>
  serverSide?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits([
  'on-sort-change',
  'on-enter-search',
  'update:search',
  'update:limit',
  'update:selected',
  'update:sortBy',
  'update:sortType',
  'datatable:header-hook',
])

const search = ref(props.search ?? '')
const currentPage = ref(props.currentPage ?? 1)
const sortBy = ref(props.sortBy ?? Object.keys(props.header[0])[0])
const sortType = ref(props.sortType ?? "asc")
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
const totalData = computed(() => {
  return filteredData.value.length
})
const totalPage = computed(() => Math.ceil(totalData.value / props.limit))
const showFrom = computed(() => (1 + currentPage.value * props.limit) - props.limit)
const showTo = computed(() => currentPage.value * props.limit < totalData.value ? currentPage.value * props.limit : totalData.value)
const data = computed(() => {
  let d = filteredData.value;
  d = d.map((data) => data)
    .filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        if (typeof obj[key] === 'string') {
          return obj[key].toLowerCase().includes(search.value.toLowerCase());
        }
      })
    })
    .sort((a, b) => {
      let computedA, computedB
      if (typeof a[sortBy.value] === 'string') {
        computedA = a[sortBy.value].toUpperCase(); // ignore upper and lowercase
        computedB = b[sortBy.value].toUpperCase(); // ignore upper and lowercase
      }
      if (computedA < computedB) {
        return -1;
      }
      if (computedA > computedB) {
        return 1;
      }

      // names must be equal
      return 0;
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

watch(sortBy, (value) => {
  emit('update:sortBy', value)
})

watch(sortType, (value) => {
  emit('update:sortType', value)
})

watch(search, (value) => {
  emit('update:search', value)
})

const setting: Setting = props.setting ?? {
  checkbox: false
}
const limitValues = [
  {
    key: 5,
    value: 5
  },
  {
    key: 10,
    value: 10
  },
  {
    key: 50,
    value: 50
  },
  {
    key: 100,
    value: 100
  },
  {
    key: 200,
    value: 200
  },
]

const clickSort = (key: string) => emit('on-sort-change', key, props.sortType === 'asc' ? 'desc' : 'asc')
const enterSearch = () => emit('on-enter-search')
const thClick = (h: Header) => {
  if (h.onHeaderClick) h.onHeaderClick()
  if (h.sortable) {
    clickSort(h.key)
    updateSort(h)
  }

}
const tdClick = (h: Header) => {
  if (h.onBodyClick) h.onBodyClick()
}
const changeCurrentPage = (page: number) => {
  currentPage.value = page
}
const updateSort = (h: Header) => {
  sortBy.value = h.key
  sortType.value = sortType.value === 'asc' ? 'desc' : 'asc'
}

const headerHook = (arg: any) => {
  emit('datatable:header-hook', arg)
}
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 flex justify-between items-center gap-8 text-xs">
      <div class="flex gap-2 items-center">
        <div>Show</div>
        <div>
          <select v-model="limit"
            class="p-2 rounded bg-white border dark:bg-gray-900 appearance-none focus:border focus:ring-0 focus:outline-none custor-pointer">
            <option :value="v.value" v-for="v in limitValues">{{ v.key }}</option>
          </select>
        </div>
        <div>entries</div>
      </div>
      <div class="w-full md:w-48 flex items-center">
        <input v-model="search" type="text"
          class="block w-full rounded text-gray-600 border dark:border-gray-700 focus:ring-0 focus:outline-none p-2 bg-white dark:bg-gray-900 font-normal"
          placeholder="Type something and press enter . . ." @keyup.enter="enterSearch()" />
      </div>
    </div>
    <div class="col-span-12">
      <div class="relative">
        <div class="overflow-auto table-fix-head shadow-sm dark:border dark:border-gray-700">
          <table class="w-full bg-white k-datatable resizable rounded-lg" :summary="summary">
            <thead class="bg-gray-100 dark:bg-gray-900 dark:border-b dark:border-gray-700 text-gray-800">
              <tr>
                <th v-if="setting.checkbox"
                  class="p-1 whitespace-nowrap select-none hover:bg-gray-200 dark:hover:bg-black border dark:border-gray-600 px-5"
                  :style="{
                    width: '20px'
                  }">
                </th>
                <th
                  class="p-2 whitespace-nowrap select-none hover:bg-gray-200 dark:hover:bg-black border dark:border-gray-600 "
                  :class="{
                    asc: sortBy == h.key && sortType == 'asc',
                    desc: sortBy == h.key && sortType == 'desc',
                    sorting: h.sortable
                  }" :style="{ width: h.width }" @click="thClick(h)" v-for="h in props.header">
                  {{ h.name }}
                </th>
              </tr>
            </thead>
            <tbody class="text-sm" v-if="(data.length > 0)">
              <tr
                class="duration-300 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700"
                v-for="d, i in data">
                <td
                  class="duration-300 p-1 hover:bg-gray-100 border dark:hover:bg-gray-900 relative dark:border-gray-600"
                  v-if="setting.checkbox" :style="{
                    width: '20px'
                  }">
                  <div class="flex justify-center items-center">
                    <input type="checkbox" :value="d['id']" v-model="selected">
                  </div>
                </td>
                <KDatatableTd
                  class="duration-300 p-1 hover:bg-gray-100 border dark:hover:bg-gray-900 relative dark:border-gray-600"
                  :copyText="d[h.key]" v-for="h in props.header">
                  <div v-if="h.component" @click="tdClick(h)">
                    <!-- {{h.component(d,i)}} -->
                    <component :is="h.component(d, i).component" :props="h.component(d, i).props" @header-hook="headerHook"></component>
                  </div>
                  <div v-else-if="h.template" v-html="h.template(d, i)" @click="tdClick(h)">
                  </div>
                  <div v-else @click="tdClick(h)">
                    {{ d[h.key] }}
                  </div>
                </KDatatableTd>
              </tr>
            </tbody>
            <tbody class="text-sm" v-else>
              <tr
                class="duration-300 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700">

                <td
                  class="duration-300 p-1 hover:bg-gray-100 border dark:hover:bg-gray-900 relative dark:border-gray-600 text-center"
                  :colspan="props.header.length + (setting.checkbox ? 1 : 0)">
                  No Data
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
            :is-loading="isLoading" :per-page="limit" @change-current-page="changeCurrentPage"
            class="text-xs shadow-sm" />
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
