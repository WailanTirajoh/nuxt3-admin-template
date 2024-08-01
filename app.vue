<script setup lang="ts">
import { useToast, TwButton, TwDialog, TwFeather } from "vue3-tailwind";
const { $pwa } = useNuxtApp();

const toast = useToast();
onMounted(() => {
  if ($pwa && $pwa.offlineReady) {
    toast.success({
      message: "App ready to work offline",
    });
  }
});
</script>
<template>
  <NuxtPwaManifest />
  <NuxtLayout>
    <TwDialog>
      <template v-slot="{ isShown, dialog, confirm, reject }">
        <div class="fixed top-0 left-0 z-50">
          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0"
          >
            <div
              class="flex items-center justify-center h-screen w-screen bg-gray-400 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
              v-if="isShown.value"
            ></div>
          </transition>
          <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="flex items-center justify-center h-screen w-screen absolute top-0"
              @click.self="reject"
              v-if="isShown.value"
            >
              <div
                class="bg-white dark:bg-gray-900 rounded shadow-lg w-96 overflow-hidden -mt-10"
              >
                <div
                  class="border-b dark:border-gray-700 p-2 border-t-4 border-t-gray-800 dark:border-t-gray-200 flex gap-4"
                >
                  <div class="icon flex items-center">
                    <TwFeather
                      class="text-gray-600 dark:text-gray-400"
                      size="50"
                      :type="dialog.icon"
                    />
                  </div>
                  <div class="py-2">
                    <div
                      class="title text-gray-800 dark:text-gray-200 font-bold flex items-center"
                    >
                      {{ dialog.title }}
                    </div>
                    <div
                      class="description text-gray-500 dark:text-gray-400 italic"
                      v-if="dialog.description"
                      v-html="dialog.description"
                    ></div>
                  </div>
                </div>
                <div class="footer flex justify-center gap-2 p-2">
                  <TwButton
                    ripple
                    class="w-12"
                    button-text-position="center"
                    variant="secondary"
                    @click="reject"
                  >
                    {{ dialog.rejectText }}
                  </TwButton>
                  <TwButton
                    ripple
                    class="w-12"
                    button-text-position="center"
                    @click="confirm"
                  >
                    {{ dialog.acceptText }}
                  </TwButton>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </template>
    </TwDialog>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
