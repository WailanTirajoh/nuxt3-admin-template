<script setup lang="ts">
import { Data, Header } from '~~/interface/datatable';

useHead({
  title: 'Datatable'
})

const data = ref({
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
  ] as Array<Data>,
  sortBy: 'name',
  sortType: 'asc',
  total: 1,
  currentPage: 1,
  limit: 10,
  search: ''
})

const updateSort = (sortBy: string, sortType: string) => {
  data.value.sortBy = sortBy
  data.value.sortType = sortType
}

const search = () => {
  alert('searching...')
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Datatable
    </h1>
    <hr class="my-2 border-sky-700" />
    <div class="row">
      <div class="col-span-12">
        <KDatatable v-model:search="data.search" v-model:limit="data.limit" :is-loading="false" :data="data.data"
          :header="data.header" :total-data="data.total" :current-page="data.currentPage" :sort-by="data.sortBy"
          :sort-type="data.sortType" @on-sort-change="updateSort" @on-enter-search="search" />
      </div>
    </div>
  </div>
</template>
