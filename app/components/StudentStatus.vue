<script setup lang="ts">
interface Props {
  status: 'Active' | 'Inactive' | string
}

const props = defineProps<Props>()

// Mapping status to colors
const statusMap: Record<string, { dot: string; text: string }> = {
  Active:     { dot: 'bg-emerald-500', text: 'text-emerald-500' },
  Inactive:   { dot: 'bg-gray-100',   text: 'text-gray-100' },
}

// Fallback for unknown statuses
const currentStatus = computed(() => {
  return statusMap[props.status] || { dot: 'bg-slate-400', text: 'text-slate-500' }
})
</script>

<template>
  <div class="flex items-center gap-1">
    <span 
      class="size-1 rounded-full shrink-0" 
      :class="currentStatus.dot"
    ></span>
    
    <span 
      class="text-xs"
      :class="currentStatus.text"
    >
      {{ status }}
    </span>
  </div>
</template>