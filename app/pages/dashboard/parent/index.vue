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
  }
]

definePageMeta({
    layout: "parent-dashboard"
})

</script>

<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      
      <div class="col-span-12 lg:col-span-8 space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card class="bg-primary text-white p-4 rounded-2xl border-none overflow-hidden flex flex-row items-center gap-4">
            <div class="size-14 bg-white rounded-xl flex items-center justify-center">
               <Icon name="solar:banknote-2-bold" class="text-primary size-7" />
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs font-thin flex items-center gap-2">
                Wallet Balance <Icon name="lucide:eye" class="size-4" />
              </span>
              <h2 class="text-xl font-bold">₦ 240,000.000</h2>
              <p class="text-[10px] font-thin italic">Update 5mins ago</p>
            </div>
          </Card>

            <WalletCard 
                title="Active Loan Balance"
                amount="₦50,000.00"
                icon-name="solar:banknote-2-bold"
                icon-color-class="text-red-500"
                icon-bg-class="bg-red-100/80"
            />

            <WalletCard 
                title="Next Payment Due"
                amount="Nov 30, 2025"
                icon-name="lets-icons:date-range-fill" 
                icon-color-class="text-orange-500"
                icon-bg-class="bg-orange-100/80"
            />

            <WalletCard 
                title="Linked Students"
                amount="4"
                icon-name="fluent:hat-graduation-20-filled"
                icon-color-class="text-slate-800"
                icon-bg-class="bg-primary/10"
            />
        </div>

        <Card class="bg-white rounded-2xl p-6 border-none">
           <div class="flex justify-between items-start mb-6">
                <div>
                    <h3 class="font-bold text-lg">Recent Transactions</h3>
                    <p class="text-gray-100 text-sm">Here are your latest payment activities</p>
                </div>
                <Button variant="outline">
                    View All Transactions
                </Button>
           </div>
           <div className="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background">
                            <TableHead className="capitalize">Description</TableHead>
                            <TableHead className='capitalize'>Date</TableHead>
                            <TableHead className='capitalize'>Amount</TableHead>
                            <TableHead className="capitalize">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="history in histories" :key="history?.id">
                            <TableCell class="capitalize font-semibold"> {{ history.description }}</TableCell>
                            <TableCell class="capitalize font-semibold">{{ history?.date }}</TableCell>
                            <TableCell class="capitalize font-semibold">{{ history?.amount }}</TableCell>
                            <TableCell class="capitalize font-semibold">{{ history?.status }}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </div> 
        </Card>
      </div>

      <div class="col-span-12 lg:col-span-4 space-y-6">
        
        <Card class="bg-white p-4 rounded-2xl border-none flex flex-col items-center">
            <h3 class="font-bold self-start mb-4">Loan Progress</h3>
    
            <div class="w-full flex items-center justify-between gap-4">
            
                <div class="flex flex-col gap-2 items-start max-w-[150px]">
                    <p class="text-[10px] leading-tight text-gray-100">
                    You’ve repaid 70% of your current loan.
                    </p>
                    <div class="mt-2">
                    <p class="text-xs text-gray-500">Remaining Balance:</p>
                    <p class="font-bold text-xl">₦50,000</p>
                    </div>
                </div>

                <div class="p-2 flex-shrink-0">
                    <ve-progress
                    :progress="70" 
                    :size="130" 
                    color="#10b981"
                    empty-color="#f1f5f9"
                    :thickness="12"
                    empty-thickness="12"
                    animation="rs 1000 500"
                    >
                    <span class="text-xl font-bold text-[#1C274D]">
                        70%
                    </span>
                    </ve-progress>
                </div>
            </div>
        </Card>

        <Card class="bg-white rounded-2xl p-6">
          <div class="flex justify-between items-center mb-4">
             <h3 class="font-bold">Students Summary</h3>
             <Button size="sm" class="bg-[#1e3a8a] rounded-full">Add Students</Button>
          </div>
          <StudentList />
          <Button class="w-full mt-6 bg-[#1e3a8a] h-12 rounded-xl">Apply For Loan Now</Button>
        </Card>
      </div>

    </div>
  </div>
</template>