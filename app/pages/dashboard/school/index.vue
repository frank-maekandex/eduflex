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

definePageMeta({
    layout: "school-dashboard",
    title: "Welcome Back",
    userName: "Franklin",
    icon: "mdi:hand-wave"
})

const histories = [
  {
    "id": "tx_001",
    "description": "Repayment for Sunrise Academy 1st Term Fees",
    "date": "22 Oct 2025",
    "amount": 40000,
    "currency": "NGN",
    "status": "Pending"
  },
  {
    "id": "tx_002",
    "description": "Auto-Debit Attempt – Sunrise Academy",
    "date": "09 Oct 2025",
    "amount": 40000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_003",
    "description": "Manual Wallet Top-Up",
    "date": "25 Sep 2025",
    "amount": 15000,
    "currency": "NGN",
    "status": "Failed"
  },
  {
    "id": "tx_004",
    "description": "Loan Disbursement Received",
    "date": "18 Sep 2025",
    "amount": 120000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_005",
    "description": "Payment Attempt – Springfield High School",
    "date": "07 Sep 2025",
    "amount": 30000,
    "currency": "NGN",
    "status": "Successful"
  },
  {
    "id": "tx_006",
    "description": "Manual Wallet Top-Up",
    "date": "02 Sep 2025",
    "amount": 15000,
    "currency": "NGN",
    "status": "Failed"
  },
    {
    "id": "tx_007",
    "description": "Manual Wallet Top-Up",
    "date": "25 Sep 2025",
    "amount": 15000,
    "currency": "NGN",
    "status": "Failed"
  },
  {
    "id": "tx_008",
    "description": "Loan Disbursement Received",
    "date": "18 Sep 2025",
    "amount": 120000,
    "currency": "NGN",
    "status": "Successful"
  }
]

const verifications = [
  {
    "id": "tx_001",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_002",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_003",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_004",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_005",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_006",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_007",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
  {
    "id": "tx_008",
    "student": "David Michael",
    "added_by": "Michael Owodunmi",
  },
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
            title="Total Fees Received"
            :amount="displayCurrency(Number(500000), 'NGN')"
            icon-name="solar:banknote-2-bold"
            icon-color-class="text-slate-800"
            icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
            title="Active  Students Loans"
            :amount="displayCurrency(Number(50000), 'NGN')"
            icon-name="solar:banknote-2-bold"
            icon-color-class="text-red-500"
            icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
            title="Pending Disbursements"
            amount="Nov 30, 2025"
            icon-name="lets-icons:date-range-fill" 
            icon-color-class="text-orange-500"
            icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
            title="Total Enrolled Students"
            amount="4"
            icon-name="fluent:hat-graduation-20-filled"
            icon-color-class="text-slate-800"
            icon-bg-class="bg-primary/10"
        />
    </div>

    <div class="p-4 rounded-lg bg-white">
      <h2 class="font-bold mb-2">Quick Action</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Button variant="outline" class="rounded-lg">
          <Icon name="solar:card-send-bold" class="size-5" />
          Withdraw Funds
        </Button>
        <Button variant="outline" class="rounded-lg">
          <Icon name="iconoir:plus-square-solid" class="size-5" />
          Add Fee Structure
        </Button>
        <Button variant="outline" class="rounded-lg">
          <Icon name="fluent:hat-graduation-20-filled" class="size-5" />
          Student Payments
        </Button>
        <Button variant="outline" class="rounded-lg">
          <Icon name="solar:export-bold" class="size-5" />
          Export Report
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6">
      
      <div class="col-span-12 xl:col-span-7 space-y-6">

        <Card class="bg-white rounded-2xl p-6 border-none">
           <div class="flex justify-between gap-2 flex-col sm:flex-row items-start mb-6">
              <div>
                  <h3 class="font-bold text-lg">Recent Transactions</h3>
                  <p class="text-gray-100 text-sm">Here are your latest payment activities</p>
              </div>
              <NuxtLink to="/dashboard/school/transactions">
                <Button variant="outline">
                  View All
                </Button>
              </NuxtLink>
           </div>
           <div className="w-full min-h-[50vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background text-left">
                            <TableHead className="capitalize p-3 text-gray-100 font-semibold">Description</TableHead>
                            <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Amount</TableHead>
                            <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="history in histories" :key="history?.id">
                            <TableCell class="capitalize"> {{ ReduceTextLength(history.description, 40) }}</TableCell>
                            <TableCell class="capitalize">{{ displayCurrency(Number(history?.amount), 'NGN') }}</TableCell>
                            <TableCell class="capitalize">{{ history?.date }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div> 
        </Card>
      </div>

      <div class="col-span-12 xl:col-span-5 space-y-6">
        
       <Card class="bg-white rounded-2xl p-6 border-none">
           <div class="flex justify-between gap-2 flex-col sm:flex-row items-start mb-6">
              <div>
                  <h3 class="font-bold text-lg">Pending Verification</h3>
                  <p class="text-gray-100 text-sm">You have five pending student verifications</p>
              </div>
              <NuxtLink to="/dashboard/school/verifications">
                <Button variant="outline">
                  View All
                </Button>
              </NuxtLink>
           </div>
           <div className="w-full min-h-[50vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background text-left">
                            <TableHead className="capitalize p-3 text-gray-100 font-semibold">Student Name</TableHead>
                            <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Added By</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="verification in verifications" :key="verification?.id">
                            <TableCell class="capitalize"> {{ verification?.student }}</TableCell>
                            <TableCell class="capitalize">{{ verification?.added_by }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div> 
        </Card>
      </div>

    </div>
  </div>
</template>