<script setup lang="ts">
import { TwDatatableClient, TwButton } from "vue3-tailwind";
import { onMounted, ref } from "vue";
const data = ref({
  column: [
    {
      label: "Brand",
      field: "brand",
      width: "400px",
      sortable: true,
    },
    {
      label: "Category",
      field: "category",
      width: "400px",
      sortable: true,
    },
    {
      label: "Description",
      field: "description",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

const datatableHook = (arg: any) => {
  arg();
};

onMounted(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      data.value.data = json.products;
    });
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Datatable Clientside</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <TwDatatableClient
      class="!dark:text-gray-200"
      v-model:search="data.search"
      v-model:limit="data.limit"
      v-model:selected="data.selected"
      v-model:sort-by="data.sortBy"
      v-model:sort-type="data.sortType"
      :column="data.column"
      :data="data.data"
      :setting="data.setting"
      @datatable:column-hook="datatableHook"
    >
      <template #row="{ column, data }">
        <template v-if="column.field === 'brand'">
          {{ data.brand }}
        </template>
        <template v-if="column.field === 'category'">
          {{ data.category }}
        </template>
        <template v-if="column.field === 'description'">
          {{ data.description }}
        </template>
        <template v-if="column.field === 'action'">
          <div class="flex gap-2 justify-center">
            <TwButton variant="primary" class="border border-gray-900">
              Edit
            </TwButton>
            <TwButton variant="danger"> Delete </TwButton>
          </div>
        </template>
      </template>
    </TwDatatableClient>
    <hr class="my-2 dark:border-gray-700" />
    <div>
      <div class="flex gap-2">
        <div class="w-32">Selected Data</div>
        <div>: {{ data.selected }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order By</div>
        <div>: {{ data.sortBy }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order Type</div>
        <div>: {{ data.sortType }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Search</div>
        <div>: {{ data.search }}</div>
      </div>
    </div>
  </div>
</template>
