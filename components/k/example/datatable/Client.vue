<script setup lang="ts">
import { Data, Header } from '~~/interface/datatable';
const data = ref({
  header: [
    {
      name: 'No',
      sortable: false,
      key: '',
      width: '15px',
      bodyValue: (data: Data, i: number): string => `
        <div class="text-center">${i + 1}</div>
      `,
    },
    {
      name: 'id',
      sortable: true,
      key: 'id',
      width: '75px',
      bodyValue: (data: Data, i: number): string => `
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
      bodyValue: (data: Data, i: number): string => `
        <div class="flex justify-center">
          <span class="${data.status.toLowerCase() === 'active' ? 'bg-green-600' : 'bg-red-600'} p-2 rounded text-white">
            ${data.status}
          </span>
        </div>
      `,
    },
    {
      name: 'Test',
      sortable: true,
      key: 'test'
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
      }" />
    <hr class="my-2">
    <table>
      <tr>
        <td>
          Selected Data
        </td>
        <td>
          : {{ data.selected }}
        </td>
      </tr>
      <tr>
        <td>
          Order By
        </td>
        <td>
          : {{ data.sortBy }}
        </td>
      </tr>
      <tr>
        <td>
          Order Type
        </td>
        <td>
          : {{ data.sortType }}
        </td>
      </tr>
      <tr>
        <td>
          Search
        </td>
        <td>
          : {{ data.search }}
        </td>
      </tr>
    </table>

  </div>
</template>
