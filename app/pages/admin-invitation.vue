<template>
  <div class="bg-background flex min-h-svh flex-col gap-6 p-6 md:p-10">
    <div class="flex float-left">
      <Logo color-class="text-primary" size-class="text-2xl" />
    </div>
    <div class="flex-1 flex w-full justify-center mx-auto flex-col bg-white p-6 md:p-10 rounded-3xl">
       <div class="flex flex-col gap-8 md:gap-14">
            <div class="flex flex-col gap-2">
                <h2 class="font-bold text-2xl md:text-5xl">Your Eduflex Admin Invitation</h2>
                <p class="text-gray-100 text-base md:text-xl">You have been invited to the Admin Team</p>
            </div>
            <h4 class="text-base md:text-xl font-semibold">Your role: Finance Admin</h4>
            <NuxtLink to="/admin-password">
                <Button class="w-fit">Join Your Team</Button>
            </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: false
  })

</script>
