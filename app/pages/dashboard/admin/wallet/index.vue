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

definePageMeta({
    layout: "admin-dashboard",
    title: "Wallet",
})

const parents = [
    {
      "parentId": "1",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Approved"
    },
    {
      "parentId": "2",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Rejected"
    },
    {
      "parentId": "3",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Approved"
    },
    {
      "parentId": "4",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Rejected"
    },
    {
      "parentId": "5",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Approved"
    },
    {
      "parentId": "6",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Rejected"
    }
  ]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
          title="EduFlex Operational Wallet"
          :amount="displayCurrency(Number(500000), 'NGN')"
          icon-name="iconoir:wallet-solid"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="Parent Wallets"
          :amount="displayCurrency(Number(500000), 'NGN')"
          icon-name="iconoir:wallet-solid"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="School Wallets"
          :amount="displayCurrency(Number(500000), 'NGN')"
          icon-name="iconoir:wallet-solid" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Lender Wallet"
          :amount="displayCurrency(Number(500000), 'NGN')"
          icon-name="iconoir:wallet-solid"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="Wallet Supervision" desc="Monitor balances, transactions, withdrawals, and wallet activity">
            <div class="flex flex-row gap-2">
                <NuxtLink to="/dashboard/admin/wallet/transactions">
                    <Button size="sm" variant="outline">Transactions</Button>
                </NuxtLink>
                <NuxtLink to="/dashboard/admin/wallet/withdrawals" >
                    <Button size="sm" variant="outline">Withdrawal Requests</Button>
                </NuxtLink>
            </div>
          </ParentTitle>

          <div class="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow class="bg-background text-left">
                          <TableHead class="capitalize p-3 text-gray-100 font-semibold">Wallet ID</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Type</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Owner</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Balance</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Last Activity</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
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
                          <TableCell class="capitalize"><AcceptedStatus :status="parent?.status"/></TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div> 
      </Card>
    </div>
  </div>
</template>