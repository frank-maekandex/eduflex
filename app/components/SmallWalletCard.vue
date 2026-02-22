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
    <Card class="bg-white px-3 py-4 rounded-xl flex items-center gap-2 border-none">
        <div class="size-10 rounded-lg flex items-center justify-center" :class="iconBgClass">
            <Icon 
                :name="iconName" 
                class="size-5" 
                :class="iconColorClass"
            />
        </div>
        <div>
            <h3 class="font-bold text-black">{{ amount }}</h3>
            <p class="text-[10px] text-gray-100">{{ title }}</p>
        </div>
    </Card>
</template>