<template>
  <div class="bg-background flex min-h-svh flex-col gap-6 p-6 md:p-10">
    <div class="flex float-left">
      <Logo color-class="text-primary" size-class="text-2xl" />
    </div>
    <div class="flex-1 flex w-full max-w-[800px] mx-auto items-center justify-center flex-col gap-32">
      <div>
        <div class="mb-10">
          <h2 class="mb-1 text-3xl md:text-5xl font-bold text-black text-center">Welcome to EduFlex!</h2>
          <p class="mb-6 text-base md:text-lg text-gray-100 text-center">We are glad to have you here! Which of these are you?</p>
        </div>
        <div class="flex flex-col md:flex-row gap-6">
          <OnboardCard  
            title="Parent/Guardian"
            subtitle="Apply for flexible school fee financing and manage your child’s payments."
            image-src="/family-icon.png"
            link="/parent"
          />
          <OnboardCard  
            title="School Administrator"
            subtitle="Digitize your fee collection and receive instant disbursements."
            image-src="/school-icon.png"
            link="/school"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    layout: false
  })

</script>
