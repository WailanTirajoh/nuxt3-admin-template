<script setup lang="ts">
import { Data, Column } from '~~/interface/datatable';
import ClientAction from "./ClientAction.vue"
const data = ref({
  column: [
    {
      label: 'Name',
      field: 'name',
      width: '400px',
      sortable: true,
    },
    {
      label: 'Status',
      field: 'status',
      width: '400px',
      sortable: true,
      // Template string example
      template: (data: Data, i: number): string => `
        <div class="flex justify-center">
          <span class="${data.status.toLowerCase() === 'active' ? 'bg-green-600' : 'bg-red-600'} p-2 rounded text-white">
            ${data.status}
          </span>
        </div>
      `,
    },
    {
      label: 'Row Data',
      field: 'rowData',
      width: '400px',
      sortable: false,
    },
    {
      label: 'Action',
      sortable: false,
      width: '100px',
      // Component inject example
      component: (data: Data, i: number) => {
        return {
          component: ClientAction,
          props: {
            name: data.name
          }
        }
      }
    },
  ] as Array<Column>,
  data: [
    {
      id: 1,
      name: 'cWailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 2,
      name: 'bWailan',
      status: 'Inactive',
      test: 'test',
    },
    {
      id: 3,
      name: 'aWailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 4,
      name: 'sWailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 5,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 6,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 7,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 8,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
  ] as Array<Data>,
  limit: 5,
  search: '',
  selected: [],
  sortBy: 'status',
  sortType: 'asc',
  setting: {
    checkbox: true,
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
    ],
  }
})

const datatableHook = (arg: any) => {
  arg()
}
</script>

<template>
  <div>
    <h5 class="text-lg font-semibold">
      Client side
    </h5>
    <hr class="my-2">
    <KDatatableClient v-model:search="data.search" v-model:limit="data.limit" v-model:selected="data.selected"
      v-model:sort-by="data.sortBy" v-model:sort-type="data.sortType" :column="data.column" :data="data.data"
      :setting="data.setting" @datatable:column-hook="datatableHook">
      <template #row="props">
        <template v-if="props.column.field === 'rowData'">
          <div class="">
            Cell Slots Example
          </div>
          <div class="bg-gray-900 rounded p-2 text-gray-100">
            <pre>{{ props.data }}</pre>
          </div>
        </template>
      </template>
      <template #empty>
        No Data
      </template>
    </KDatatableClient>
    <hr class="my-2">
    <div>
      <div class="flex gap-2">
        <div class="w-32">
          Selected Data
        </div>
        <div>
          : {{ data.selected }}
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">
          Order By
        </div>
        <div>
          : {{ data.sortBy }}
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">
          Order Type
        </div>
        <div>
          : {{ data.sortType }}
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">
          Search
        </div>
        <div>
          : {{ data.search }}
        </div>
      </div>
    </div>
  </div>
</template>
