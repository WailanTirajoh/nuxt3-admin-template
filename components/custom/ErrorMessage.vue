<script setup lang="ts">
import { TwErrorMessage } from "vue3-tailwind";

defineProps<{
  name: string;
}>();
</script>

<template>
  <TwErrorMessage :name="name">
    <template v-slot="{ errors }">
      <!-- <div v-if="errors"> -->
        <div class="text-gray-600 dark:text-gray-400 normal-case text-sm" v-if="errors">Please resolve:</div>
        <ul class="list-disc text-red-500 text-sm italic pl-6">
          <li v-for="(error, index) in errors" :key="`${name}-${index}`">
            {{ error }}
          </li>
        </ul>
      <!-- </div> -->
    </template>
  </TwErrorMessage>
</template>
