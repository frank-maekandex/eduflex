<template>
    <NuxtLink to="/" class="font-bold transition-colors duration-200"
    :class="[
      colorClass, 
      sizeClass
    ]">EduFlex</NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  colorClass?: string;
  sizeClass?: string;
}

withDefaults(defineProps<Props>(), {
  colorClass: 'text-primary',
  sizeClass: 'text-2xl'
});
</script>