<script setup lang="ts">
interface Props {
  status: 'New' | 'Active' | 'Resolved' | string
}

const props = defineProps<Props>()

// Mapping status to colors
const statusMap: Record<string, { dot: string; text: string }> = {
  Resolved: { dot: 'bg-emerald-500', text: 'text-emerald-500' },
  Active:    { dot: 'bg-[#FF9F2B]',   text: 'text-[#FF9F2B]' },
  New:     { dot: 'bg-primary',     text: 'text-primary' },
}

// Fallback for unknown statuses
const currentStatus = computed(() => {
  return statusMap[props.status] || { dot: 'bg-gray-100', text: 'text-gray-100' }
})
</script>

<template>
  <div class="flex items-center gap-2">
    <span 
      class="size-2 rounded-full shrink-0" 
      :class="currentStatus.dot"
    ></span>
    
    <span 
      :class="currentStatus.text"
    >
      {{ status }}
    </span>
  </div>
</template>