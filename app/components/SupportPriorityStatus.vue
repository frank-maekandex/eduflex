<script setup lang="ts">
interface Props {
  status: 'Critical' | 'Medium' | 'Low' | string
}

const props = defineProps<Props>()

// Mapping status to colors
const statusMap: Record<string, { bg: string; text: string }> = {
  Critical: { bg: 'bg-red-500/20', text: 'text-red-500' },
  Medium:    { bg: 'bg-primary/20',   text: 'text-primary' },
  Low:     { bg: 'bg-gray-900/20',     text: 'text-gray-900' },
}

// Fallback for unknown statuses
const currentStatus = computed(() => {
  return statusMap[props.status] || { bg: 'bg-gray-100', text: 'text-gray-100' }
})
</script>

<template>
    <span 
      class="rounded-full px-3 py-1"
      :class="currentStatus.text, currentStatus.bg"
    >
      {{ status }}
    </span>
</template>