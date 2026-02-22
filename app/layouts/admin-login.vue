<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="relative hidden lg:block bg-primary">
      <div class="h-full flex flex-col gap-4 p-6 md:p-14 mx-auto max-w-[800px]">
        <Logo color-class="text-white" size-class="text-2xl" />
        <div class="mt-28 max-w-[400px]">
          <h2 class="mb-1 text-4xl font-bold text-white">{{ route.meta.authTitle || 'Welcome to EduFlex' }}</h2>
          <p class="mb-6 text-lg text-white">{{ route.meta.authDescription || 'Please create an account to get started.' }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 p-6 md:p-10 bg-background">
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-sm">
            <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>