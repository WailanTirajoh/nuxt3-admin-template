<template>
  <BaseUtilModal :full-height="false">
    <template #button>
      <BaseButton>
        Modal
      </BaseButton>
    </template>
    <template #header>
      <div>
        Header
      </div>
    </template>
    <template #body>
      <div>
        Body
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end w-full">
        Footer
      </div>
    </template>
  </BaseUtilModal>
</template>
