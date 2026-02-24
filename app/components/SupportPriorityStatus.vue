<script setup lang="ts">
interface Props {
  status: 'Critical' | 'Medium' | 'Low' | 'Full Match' | 'No Match' | 'Partial' | string
}

const props = defineProps<Props>()

// Mapping status to colors
const statusMap: Record<string, { bg: string; text: string }> = {
  Critical: { bg: 'bg-red-500/20', text: 'text-red-500' },
  Medium:    { bg: 'bg-primary/20',   text: 'text-primary' },
  Low:     { bg: 'bg-gray-900/20',     text: 'text-gray-900' },
  "Full Match":   { bg: 'bg-emerald-500/20', text: 'text-emerald-500' },
  "No Match": { bg: 'bg-red-500/20', text: 'text-red-500' },
  "Partial":    { bg: 'bg-[#FF9F2B]/20',   text: 'text-[#FF9F2B]' },
}

// Fallback for unknown statuses
const currentStatus = computed(() => {
  return statusMap[props.status] || { bg: 'bg-gray-100/20', text: 'text-gray-500' }
})
</script>

<template>
    <span 
      class="rounded-full px-3 py-1 whitespace-nowrap"
      :class="currentStatus.text, currentStatus.bg"
    >
      {{ status }}
    </span>
</template>