<template>
  <BaseUtilModal :full-height="false" width="800px">
    <template #button>
      <BaseButton>
        Modal with width 800px
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
