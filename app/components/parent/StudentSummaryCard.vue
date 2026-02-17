<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

interface Props {
  name: string
  school: string
  grade: string
  avatar: string
  loanStatus: 'Active' | 'Inactive' | 'Pending'
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center justify-between py-3 border-b border-gray-border">
    <div class="flex items-center gap-3">
        <Avatar class="bg-background">
            <AvatarImage :src="avatar" :alt="name" />
            <AvatarFallback class="text-primary font-bold text-base">{{ name }}</AvatarFallback>
        </Avatar>
      
      <div class="flex flex-col">
        <h4 class="font-bold text-sm">{{ name }}</h4>
        <p class="text-[10px] text-gray-100 italic">
          {{ school }}<span class="mx-1">•</span>{{ grade }}
        </p>
      </div>
    </div>

    <div class="flex flex-col items-end gap-1">
      <span class="text-[8px] font-semibold uppercase tracking-wider">Loan Status</span>
      <StudentStatus :status="loanStatus" />
    </div>
  </div>
</template>