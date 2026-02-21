<script setup lang="ts">

definePageMeta({
    layout: false
})

</script>

<template>
  <div class="bg-background flex min-h-svh flex-col gap-6 p-6 md:p-10">
    <div class="flex float-left">
      <Logo color-class="text-primary" size-class="text-2xl" />
    </div>
    <div class="flex-1 flex w-full max-w-[800px] mx-auto items-center justify-center flex-col gap-32">
      <FormsParentOtp />
    </div>
  </div>
</template>