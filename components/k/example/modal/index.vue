<template>
  <KUtilModal :full-height="false">
    <template #button>
      <KButton>
        Modal
      </KButton>
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
  </KUtilModal>
</template>
