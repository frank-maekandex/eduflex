<script setup lang="ts">
defineProps<{
  title: string
  desc?: string
}>()
</script>

<template>
  <div class="w-full mb-8 flex flex-col md:flex-row items-center gap-4 justify-center">
    <div>
      <h1 class="text-3xl font-semibold text-center">{{ title }}</h1>
      <p v-if="desc" class="text-gray-100 text-center">{{ desc }}</p>
    </div>
  </div>
</template>