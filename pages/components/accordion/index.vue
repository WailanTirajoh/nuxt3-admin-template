<script setup lang="ts">
import { TwAccordion, TwButton, TwFeather } from "vue3-tailwind";

useHead({
  title: "Accordions",
});

const accordion = [
  {
    ref: "example1",
  },
  {
    ref: "example2",
  },
];
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Accordion</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid gap-2">
      <div class="col-span-12">
        <h2 class="mb-2 text-lg font-bold">Example 1:</h2>
        <TwAccordion class="bg-white dark:bg-gray-900 rounded overflow-hidden shadow" :data="accordion">
          <template #header_example1="{ toggleAccordion, ref, isActive }">
            <div
              class="duration-300 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-4 flex justify-between items-center cursor-pointer border-b-2 border-gray-300 dark:border-gray-700"
              :class="{
                '!bg-gray-800 !text-gray-100': isActive
              }"
              @click="toggleAccordion(ref)"
            >
              <div>Header</div>
              <button class="flex items-center">
                <TwFeather
                  class="transition-all duration-400"
                  type="chevron-down"
                  :class="{
                    'rotate-180': isActive,
                  }"
                ></TwFeather>
              </button>
            </div>
          </template>
          <template #example1>
            <div class="p-4 dark:bg-gray-700">Example 1</div>
          </template>
          <template #header_example2="{ toggleAccordion, ref, isActive }">
            <div
              class="duration-300 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-4 flex justify-between items-center cursor-pointer border-b-2 border-gray-300 dark:border-gray-700"
              :class="{
                '!bg-gray-800 !text-gray-100': isActive
              }"
              @click="toggleAccordion(ref)"
            >
              <div>Header 2</div>
              <button class="flex items-center">
                <TwFeather
                  class="transition-all duration-400"
                  type="chevron-down"
                  :class="{
                    'rotate-180': isActive,
                  }"
                ></TwFeather>
              </button>
            </div>
          </template>
          <template #example2>
            <div class="p-4 dark:bg-gray-700">Example 2</div>
          </template>
        </TwAccordion>
      </div>
      <div class="col-span-12">
        <h2 class="mb-2 text-lg font-bold">Example 2:</h2>
        <div class="">keep-alive</div>
        <TwAccordion
          class="bg-white dark:bg-gray-900 rounded overflow-hidden"
          :data="accordion"
          keep-alive
        >
          <template #header_example1="{ toggleAccordion, ref, isActive }">
            <div
              class="duration-300 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-4 flex justify-between items-center cursor-pointer border-b-2 border-gray-300 dark:border-gray-700"
              :class="{
                '!bg-gray-800 !text-gray-100': isActive
              }"
              @click="toggleAccordion(ref)"
            >
              <div>Header</div>
              <button class="flex items-center">
                <TwFeather
                  class="transition-all duration-400"
                  type="chevron-down"
                  :class="{
                    'rotate-180': isActive,
                  }"
                ></TwFeather>
              </button>
            </div>
          </template>
          <template #example1>
            <div class="p-4 dark:bg-gray-700">Example 1</div>
          </template>
          <template #header_example2="{ toggleAccordion, ref, isActive }">
            <div
              class="duration-300 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-4 flex justify-between items-center cursor-pointer border-b-2 border-gray-300 dark:border-gray-700"
              :class="{
                '!bg-gray-800 !text-gray-100': isActive
              }"
              @click="toggleAccordion(ref)"
            >
              <div>Header 2</div>
              <button class="flex items-center">
                <TwFeather
                  class="transition-all duration-400"
                  type="chevron-down"
                  :class="{
                    'rotate-180': isActive,
                  }"
                ></TwFeather>
              </button>
            </div>
          </template>
          <template #example2>
            <div class="p-4 dark:bg-gray-700">Example 2</div>
          </template>
        </TwAccordion>
      </div>
    </div>
    <div class="flex gap-2 mb-2"></div>
  </div>
</template>
