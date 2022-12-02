<script setup lang="ts">
import { Data, Header } from '~~/interface/datatable';
import ClientAction from "./ClientAction.vue"
const data = ref({
  header: [
    {
      name: 'No',
      sortable: false,
      key: '',
      width: '15px',
      template: (data: Data, i: number): string => `
        <div class="text-center">${i + 1}</div>
      `,
    },
    {
      name: 'id',
      sortable: true,
      key: 'id',
      width: '75px',
      template: (data: Data, i: number): string => `
        <div class="text-center">${data.id}</div>
      `,
    },
    {
      name: 'Name',
      sortable: true,
      key: 'name',
    },
    {
      name: 'Status',
      sortable: true,
      key: 'status',
      template: (data: Data, i: number): string => `
        <div class="flex justify-center">
          <span class="${data.status.toLowerCase() === 'active' ? 'bg-green-600' : 'bg-red-600'} p-2 rounded text-white">
            ${data.status}
          </span>
        </div>
      `,
    },
    {
      name: 'Action',
      sortable: false,
      width: '105px',
      component: (data: Data, i: number) => {
        return {
          component: ClientAction,
          props: {
            name: data.name
          }
        }
      }
    },
  ] as Array<Header>,
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
  sortType: 'asc'
})

const datatableHook = (arg: any) => {
  arg()
}
</script>

<template>
  <div class="bg-white p-2 rounded-lg shadow">
    <h5 class="text-lg font-semibold">
      Client side
    </h5>
    <hr class="my-2">
    <KDatatableClient v-model:search="data.search" v-model:limit="data.limit" v-model:selected="data.selected"
      v-model:sort-by="data.sortBy" v-model:sort-type="data.sortType" :header="data.header" :data="data.data" :setting="{
        checkbox: true
      }" @datatable:header-hook="datatableHook" />
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
