<script setup lang="ts">
interface Props {
  status: 'Successful' | 'Pending' | 'Failed' | 'Active' | 'Inactive' | string
}

const props = defineProps<Props>()

// Mapping status to colors
const statusMap: Record<string, { dot: string; text: string }> = {
  Successful: { dot: 'bg-emerald-500', text: 'text-emerald-500' },
  Active:     { dot: 'bg-emerald-500', text: 'text-emerald-500' },
  Pending:    { dot: 'bg-[#FF9F2B]',   text: 'text-[#FF9F2B]' },
  Failed:     { dot: 'bg-red-500',     text: 'text-red-500' },
  Inactive:   { dot: 'bg-slate-300',   text: 'text-slate-400' },
}

// Fallback for unknown statuses
const currentStatus = computed(() => {
  return statusMap[props.status] || { dot: 'bg-slate-400', text: 'text-slate-500' }
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