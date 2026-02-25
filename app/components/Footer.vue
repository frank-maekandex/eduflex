<script setup lang="ts">
import { Copyright } from 'lucide-vue-next';

</script>

<template>
  <div class="relative w-full">

    <!-- Background -->
    <NuxtImg
      src="/footer.png"
      alt="EduFlex"
      class="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
      format="webp"
    />

    <!-- Content -->
    <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

      <h1 class="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        EduFlex
      </h1>

      <!-- Social Icons -->
      <div class="flex gap-4 mb-6">
        <a href="#">
          <span class="flex size-8 items-center justify-center rounded-full bg-white">
            <Icon name="ic:baseline-facebook" class="text-primary size-5" />
          </span>
        </a>

        <a href="#">
          <span class="flex size-8 items-center justify-center rounded-full bg-white">
            <Icon name="uil:instagram" class="text-primary size-5" />
          </span>
        </a>

        <a href="#">
          <span class="flex size-8 items-center justify-center rounded-full bg-white">
            <Icon name="uil:github" class="text-primary size-5" />
          </span>
        </a>

        <a href="#">
          <span class="flex size-8 items-center justify-center rounded-full bg-white">
            <Icon name="uil:youtube" class="text-primary size-5" />
          </span>
        </a>
      </div>

      <!-- Divider -->
      <div class="w-48 sm:w-64 border-t border-white/30 mb-6" />

      <!-- Copyright -->
      <p class="flex items-center gap-2 text-white text-sm sm:text-base">
        <Copyright :size="18" />
        2025 EduFlex
      </p>

    </div>
  </div>
</template>