<script setup lang="ts">
interface Props {
  title: string
  amount: string | number
  iconName: string
  iconColorClass?: string // e.g., 'text-red-500'
  iconBgClass?: string    // e.g., 'bg-red-100/80'
}

withDefaults(defineProps<Props>(), {
  iconColorClass: 'text-primary',
  iconBgClass: 'bg-slate-100',
})
</script>

<template>
    <Card class="bg-white p-6 rounded-2xl flex items-center gap-4 border-none">
        <div class="size-14 rounded-xl flex items-center justify-center" :class="iconBgClass">
            <Icon 
                :name="iconName" 
                class="size-7" 
                :class="iconColorClass"
            />
        </div>
        <div>
            <h3 class="text-xl font-bold text-black">{{ amount }}</h3>
            <p class="text-sm text-gray-100">{{ title }}</p>
        </div>
    </Card>
</template>