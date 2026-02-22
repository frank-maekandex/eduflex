<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type LoanStatus = 'Pending' | 'Active' | 'Inactive'

interface Student {
  id: string
  name: string
  school: string
  grade: string
  avatar: string
  loanStatus: LoanStatus
}
const searchTerm = ref('') 

definePageMeta({
    layout: "admin-dashboard",
    title: "Support",
})

const parents = [
  {
    "ticketId": "TK-PYT-00411",
    "type": "Payment",
    "owner": "Michael Owodunmi",
    "priority": "Critical",
    "status": "New",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-SCH-00411",
    "type": "School",
    "owner": "Sunrise Academy",
    "priority": "Medium",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-PRT-00411",
    "type": "Parent",
    "owner": "Michael Owodunmi",
    "priority": "Low",
    "status": "Resolved",
    "slaTimer": "00:00:00"
  },
  {
    "ticketId": "TK-PRT-00411",
    "type": "Technical",
    "owner": "Michael Owodunmi",
    "priority": "Critical",
    "status": "Resolved",
    "slaTimer": "00:00:00"
  }
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
          title="Total Open Tickets"
          :amount="348"
          icon-name="bi:question-square-fill"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="SLA Breach Alert(>24hrs)"
          :amount="234"
          icon-name="bi:question-square-fill"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="Resolved This Week"
          amount="23"
          icon-name="bi:question-square-fill" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Avg Response Time"
          amount="2.4 hrs"
          icon-name="bi:question-square-fill"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="Support Center" desc="Manage and resolve customer support tickets efficiently">
            <Search 
              v-model="searchTerm" 
              placeholder="Search Name or ID"
              class="bg-background" 
            />
          </ParentTitle>

          <div className="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow className="bg-background text-left">
                          <TableHead className="capitalize p-3 text-gray-100 font-semibold">Ticket ID</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Type</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Owner</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Priority</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>SLA Timer</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Action</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow v-for="parent in parents" :key="parent?.ticketId">
                          <TableCell class="capitalize"> {{ parent.ticketId }}</TableCell>
                          <TableCell class="capitalize">{{ parent?.type}}</TableCell>
                          <TableCell class="capitalize">{{ parent?.owner }}</TableCell>
                          <TableCell class="capitalize"><SupportPriorityStatus :status="parent?.priority"/></TableCell>
                          <TableCell class="capitalize"><SupportStatus :status="parent?.status"/></TableCell>
                          <TableCell class="capitalize">{{ parent?.slaTimer }}</TableCell>
                          <TableCell class="capitalize">
                            <AdminModalViewSupportTicket />
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div> 
      </Card>
    </div>
  </div>

</template>