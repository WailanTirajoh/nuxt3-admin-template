<script setup lang="ts">
import { Data, Header } from '~~/interface/datatable';
const dataServer = ref({
  header: [
    {
      name: 'No',
      sortable: false,
      key: '',
      width: '25px',
      bodyValue: (data: Data, i: number): string => `<div class="text-center">${i + 1}</div>`,
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
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 2,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 3,
      name: 'Wailan',
      status: 'Active',
      test: 'test',
    },
    {
      id: 4,
      name: 'Wailan',
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
  sortBy: 'name',
  sortType: 'asc',
  total: 1,
  currentPage: 1,
  limit: 10,
  search: '',
  selected: []
})


const updateSort = (sortBy: string, sortType: string) => {
  dataServer.value.sortBy = sortBy
  dataServer.value.sortType = sortType
}

const search = () => {
  alert('searching...')
}
</script>

<template>
  <KDatatable v-model:search="dataServer.search" v-model:limit="dataServer.limit" v-model:selected="dataServer.selected"
    :is-loading="false" :data="dataServer.data" :header="dataServer.header" :total-data="dataServer.total"
    :current-page="dataServer.currentPage" :sort-by="dataServer.sortBy" :sort-type="dataServer.sortType"
    :server-side="true" @on-sort-change="updateSort" @on-enter-search="search" :setting="{
      checkbox: true
    }" />
</template>
