<script setup lang="ts">
import { Copyright } from 'lucide-vue-next';

</script>

<template>
  <div class="relative w-full overflow-hidden">
    <!-- Background image -->
    <NuxtImg
      placeholder
      src="footer.png"
      alt="EduFlex"
      class="w-full h-full object-cover"
      format="webp"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 py-10">
        <h1 class="text-white text-xl md:text-2xl font-bold mb-2">
            EduFlex
        </h1>
        <div class="flex gap-4">
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

            <a href="">
                <span class="flex size-8 items-center justify-center rounded-full bg-white">
                    <Icon name="uil:github" class="text-primary size-5" />
                </span>
            </a>

            <a href="">
                <span class="flex size-8 items-center justify-center rounded-full bg-white">
                    <Icon name="uil:youtube" class="text-primary size-5" />
                </span>
            </a>
        </div>
        <div class="max-w-[500px] w-full border-t border-white/20 my-8" />
        <p class="flex items-center gap-2 text-white">
            <Copyright :size="20"/>
            2025 EduFlex
        </p>
    </div>
  </div>
</template>