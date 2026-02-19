<script lang="ts" setup>
import { computed } from 'vue';

definePageMeta({
  layout: "parent-dashboard",
  title: 'Notifications'
})

const notifications = [
  {
    "id": "notif-001",
    "status": "unread",
    "category": "Today",
    "title": "Loan Request Received",
    "description": "We’re reviewing your loan application for Samuel Michael. You’ll get an update soon.",
    "time": "2:15 PM",
    "timestamp": "2026-02-19T14:15:00"
  },
  {
    "id": "notif-002",
    "status": "unread",
    "category": "Today",
    "title": "Loan Approved",
    "description": "Your loan request for Sunrise Academy has been approved. Disbursement will begin shortly.",
    "time": "9:42 AM",
    "timestamp": "2026-02-19T09:42:00"
  },
  {
    "id": "notif-003",
    "status": "read",
    "category": "Yesterday",
    "title": "Upcoming Repayment",
    "description": "Your next repayment of ₦40,000 is due in 3 days.",
    "time": "6:10 PM",
    "timestamp": "2026-02-18T18:10:00"
  },
  {
    "id": "notif-004",
    "status": "read",
    "category": "Yesterday",
    "title": "Payment Successful",
    "description": "Your payment of ₦40,000 for this term’s loan has been completed.",
    "time": "4:18 PM",
    "timestamp": "2026-02-18T16:18:00"
  },
  {
    "id": "notif-005",
    "status": "read",
    "category": "Yesterday",
    "title": "Student Verified",
    "description": "Sunrise Academy has verified Samuel Michael’s student profile.",
    "time": "12:32 PM",
    "timestamp": "2026-02-18T12:32:00"
  },
  {
    "id": "notif-006",
    "status": "read",
    "category": "Nov 21, 2025",
    "title": "Loan Disbursement",
    "description": "The funds for your loan have been successfully transferred to your account.",
    "time": "10:00 AM",
    "timestamp": "2025-11-21T10:00:00"
  }
]

const groupedNotifications = computed(() => {
  return notifications.reduce((groups, item) => {
    const groupName = item.category; // Use "Today", "Yesterday", or "Nov 21, 2025" directly
    
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    
    groups[groupName].push(item);
    return groups;
  }, {} as Record<string, typeof notifications>);
});
</script>

<template>
  <div class="w-full space-y-8 bg-white p-6 rounded-2xl">
    <div v-for="(items, dateLabel) in groupedNotifications" :key="dateLabel">
      
      <h3 class="text-sm font-bold text-gray-400 mb-1 px-1 uppercase tracking-tight">
        {{ dateLabel }}
      </h3>

      <div>
        <div 
          v-for="note in items" 
          :key="note.id" 
          class="group flex justify-between gap-6 items-start py-5 border-b border-gray-border transition-colors px-1"
        >
          <div class="flex-1 pr-8">
            <h4 class="text-base font-bold mb-1 leading-snug">
              {{ note.title }}
            </h4>
            <p class="text-[14px] text-gray-500 leading-normal max-w-2xl">
              {{ note.description }}
            </p>
          </div>
          
          <div class="flex flex-col items-end gap-3 shrink-0 pt-1">
            <span 
              :class="[
                'size-2 rounded-full transition-all',
                note.status === 'unread' ? 'bg-primary' : 'bg-gray-100'
              ]"
            ></span>
            <span class="text-[12px] font-medium text-gray-400 tabular-nums uppercase">
              {{ note.time }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>