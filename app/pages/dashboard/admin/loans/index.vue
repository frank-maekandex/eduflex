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
    title: "Loans",
})

const parents = [
    {
      "parentId": "1",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Pending"
    },
    {
      "parentId": "2",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Pending"
    },
    {
      "parentId": "3",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Verified"
    },
    {
      "parentId": "4",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Suspended"
    },
    {
      "parentId": "5",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Pending"
    },
    {
      "parentId": "6",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Verified"
    }
  ]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
          title="Total Loan Applications"
          :amount="348"
          icon-name="mdi:user"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="Active Loans"
          :amount="234"
          icon-name="mdi:user"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="Pending Admin Review"
          amount="23"
          icon-name="mdi:user" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Defaulted Loans"
          amount="4"
          icon-name="mdi:user"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="Manage Loan Applications" desc="Review, approve, or monitor loan requests from verified parents">
            <Search 
              v-model="searchTerm" 
              placeholder="Search Name or ID"
              class="bg-background" 
            />
          </ParentTitle>

          <div class="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow class="bg-background text-left">
                          <TableHead class="capitalize p-3 text-gray-100 font-semibold">Loan ID</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Parent</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Student</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>School</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Amount</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Action</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow v-for="parent in parents" :key="parent?.parentId">
                          <TableCell class="capitalize"> {{ parent.parentId }}</TableCell>
                          <TableCell class="capitalize">{{ReduceTextLength(parent?.fullName, 30)}}</TableCell>
                          <TableCell class="capitalize">{{ parent?.dateJoined }}</TableCell>
                          <TableCell class="capitalize">
                            {{ parent?.students || "-"}}
                          </TableCell>
                          <TableCell class="capitalize">{{ parent?.fullName }}</TableCell>
                          <TableCell class="capitalize"><VerificationStatus :status="parent?.status"/></TableCell>
                          <TableCell class="capitalize flex flex-row  items-center gap-4">
                            <NuxtLink :to="`/dashboard/admin/loans/view/${parent?.parentId}`">
                              <Button size="sm" variant="outline">View</Button>
                            </NuxtLink>
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div> 
      </Card>
    </div>
  </div> -->

</template>