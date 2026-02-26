<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Loan Payment History" desc="Manage your loan applications, repayment schedules, and disbursement history.">
      <div>
        <p class="text-xs text-gray-100">Next Pay Due</p>
        <h1 class="text-sm font-semibold">30th November, 2025</h1>
      </div>
    </ParentTitle>

    <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow class="bg-background text-left">
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">TXN ID</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Frequency</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Tenure</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Amount Paid</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Balance</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Date Paid</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="history in histories" :key="history?.id">
                    <TableCell class="capitalize"> {{ history?.txnId }}</TableCell>
                    <TableCell class="capitalize"> {{ history?.frequency }}</TableCell>
                    <TableCell class="capitalize"> {{ history?.tenure }}</TableCell>
                    <TableCell class="capitalize">{{ history?.amountPaid }}</TableCell>
                    <TableCell class="capitalize">{{ history?.balance }}</TableCell>
                    <TableCell class="capitalize">{{ history?.datePaid }}</TableCell>
                    <TableCell class="capitalize"><TransactionStatus :status="history?.status" /></TableCell>
                </TableRow>
            </TableBody>
        </Table>

        <div class='flex gap-2 items-center justify-between w-full mt-10'>           
          <div class='ml-auto'>
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
    layout: "admin-dashboard",
    title: 'Student List'
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
      "id": 1,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    },
    {
      "id": 2,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    },
    {
      "id": 3,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    },
    {
      "id": 4,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    },
    {
      "id": 5,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    },
    {
      "id": 6,
      "txnId": "TXN-2025-00971",
      "frequency": "Bi-Weekly",
      "tenure": "1 Month",
      "amountPaid": 20000,
      "balance": 220000,
      "datePaid": "2025-09-25",
      "status": "Successful"
    }
  ]

</script>