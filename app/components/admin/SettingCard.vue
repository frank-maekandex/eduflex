<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
    <div class="flex items-center justify-between gap-4 w-full p-4 border border-gray-border bg-background rounded-lg">

        <div>
            <h3 class="font-medium text-sm">
                {{ title }}
            </h3>
            <p class="text-sm text-gray-100 mt-1">
                {{ description }}
            </p>
        </div>

        <div>
            <slot />
        </div>

    </div>
</template>