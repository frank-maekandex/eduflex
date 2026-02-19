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
    layout: "parent-dashboard",
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

const studentData = [
  {
    "id": "std_001",
    "name": "David Michael",
    "school": "Sunrise Academy",
    "grade": "JSS 1",
    "avatar": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    "loanStatus": "Active"
  },
  {
    "id": "std_002",
    "name": "Sarah Michael",
    "school": "Sunrise Academy",
    "grade": "Primary 4",
    "avatar": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    "loanStatus": "Inactive"
  },
  {
    "id": "std_003",
    "name": "Samuel Michael",
    "school": "Springfield High",
    "grade": "SS 2",
    "avatar": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    "loanStatus": "Active"
  }
]

const students = ref<Student[]>(studentData as Student[])

</script>

<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      
      <div class="col-span-12 xl:col-span-8 space-y-6">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card class="bg-primary text-white p-4 rounded-2xl border-none overflow-hidden flex flex-row items-center gap-4 h-[105px]">
            <div class="size-14 bg-white rounded-xl flex items-center justify-center">
               <Icon name="solar:banknote-2-bold" class="text-primary size-7" />
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-xs font-thin flex items-center gap-2">
                Wallet Balance <Icon name="lucide:eye" class="size-4" />
              </span>
              <h2 class="text-xl font-bold">{{displayCurrency(Number(240000000), "NGN")}}</h2>
              <p class="text-[10px] font-thin italic">Update 5mins ago</p>
            </div>
          </Card>

            <WalletCard 
                title="Active Loan Balance"
                :amount="displayCurrency(Number(50000), 'NGN')"
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
           <div class="flex justify-between gap-2 flex-col sm:flex-row items-start mb-6">
              <div>
                  <h3 class="font-bold text-lg">Recent Transactions</h3>
                  <p class="text-gray-100 text-sm">Here are your latest payment activities</p>
              </div>
              <NuxtLink to="/dashboard/parent/transactions">
                <Button variant="outline">
                  View All Transactions
                </Button>
              </NuxtLink>
           </div>
           <div className="w-full min-h-[50vh] flex flex-col items-center justify-between overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-background text-left">
                            <TableHead className="capitalize p-3 text-gray-100 font-semibold">Description</TableHead>
                            <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Date</TableHead>
                            <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Amount</TableHead>
                            <TableHead className="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="history in histories" :key="history?.id">
                            <TableCell class="capitalize"> {{ ReduceTextLength(history.description, 40) }}</TableCell>
                            <TableCell class="capitalize">{{ history?.date }}</TableCell>
                            <TableCell class="capitalize">{{ displayCurrency(Number(history?.amount), 'NGN') }}</TableCell>
                            <TableCell class="capitalize"><TransactionStatus :status="history?.status" /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div> 
        </Card>
      </div>

      <div class="col-span-12 xl:col-span-4 space-y-6">
        
        <Card class="bg-white p-4 rounded-2xl border-none flex flex-col items-center min-h-[226px]">
            <h3 class="font-bold self-start mb-4">Loan Progress</h3>
    
            <div class="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
                <div class="flex flex-col gap-2 items-start w-full md:max-w-[150px]">
                    <p class="text-[10px] leading-tight text-gray-100">
                      You’ve repaid 70% of your current loan.
                    </p>
                    <div class="mt-1">
                      <p class="text-xs text-gray-500">Remaining Balance:</p>
                      <p class="font-bold text-sm">{{ displayCurrency(Number(500000000), 'NGN') }}</p>
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
                        :line="'butt'"
                    >
                        <span class="text-xl font-bold text-[#1C274D]">
                            70%
                        </span>
                    </ve-progress>
                </div>
            </div>
        </Card>

        <Card class="bg-white rounded-2xl border-none p-4">
          <div class="flex justify-between items-center mb-4">
             <h3 class="font-semibold text-sm">Children Summary</h3>
             <NuxtLink to="/dashboard/parent/children/add-child">
               <Button size="sm">Add Child</Button>
             </NuxtLink>
          </div>
          <div class="flex flex-col">
                <ParentStudentSummaryCard
                    v-for="student in students" 
                    :key="student.id"
                    :name="student.name"
                    :school="student.school"
                    :grade="student.grade"
                    :avatar="student.avatar"
                    :loan-status="student.loanStatus"
                />
            </div>
            <NuxtLink to="/dashboard/parent/loans/apply-for-loan">
              <Button class="w-full mt-4">Apply For Loan Now</Button>
            </NuxtLink>
        </Card>

        <div class="w-full h-42 rounded-3xl border border-gray-border overflow-hidden">
            <NuxtImg src="/help.png" class="w-full h-full"/>
        </div>
      </div>

    </div>
  </div>
</template>