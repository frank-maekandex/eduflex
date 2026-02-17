<script setup lang="ts">
defineProps<{
  title: string
  desc?: string
}>()
</script>

<template>
  <div class="w-full mb-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
    <div>
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <p v-if="desc" class="text-sm text-gray-100">{{ desc }}</p>
    </div>
    
    <div>
      <slot />
    </div>
  </div>
</template>