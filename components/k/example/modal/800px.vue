<template>
  <KUtilModal :full-height="false" width="800px">
    <template #button>
      <KButton>
        Modal with width 800px
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
