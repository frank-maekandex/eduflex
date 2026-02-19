<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Recent Transactions" desc="Here are your latest payment activities"/>

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
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
                    <TableCell class="capitalize"> {{ ReduceTextLength(history.description, 100) }}</TableCell>
                    <TableCell class="capitalize">{{ history?.date }}</TableCell>
                    <TableCell class="capitalize">{{ displayCurrency(Number(history?.amount), 'NGN') }}</TableCell>
                    <TableCell class="capitalize"><TransactionStatus :status="history?.status" /></TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <div className='flex gap-2 items-center justify-between w-full mt-10'>           
          <div className='ml-auto'>
            <AppPagination
              :total="totalPages"
              :items-per-page="10"
              :default-page="currentPage"
              :ellipsis-index="4"
              @update:page="handlePageChange"
            />
          </div>
        </div>

    </div> 
  </div>

</template>

<script lang="ts" setup>

  definePageMeta({
    layout: "parent-dashboard",
    title: 'Transactions'
  })

  const add = () => {
    console.log('Fetching branches...')
  }

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

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

</script>