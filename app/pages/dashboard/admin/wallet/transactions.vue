<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Transactions (In/Out)" desc="Monitor balances, transactions, withdrawals, and wallet activity">
        <Search 
            v-model="searchTerm" 
            placeholder="Search by Txn ID, parent"
            class="bg-background" 
        />
    </ParentTitle>

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow className="bg-background text-left">
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">TXN ID</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Wallet ID</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Type</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Description</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Balance</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
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
                    <TableCell class="capitalize"><TransactionStatus :status="parent?.status"/></TableCell>
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
    layout: "admin-dashboard",
    title: 'Transactions'
  })

  const searchTerm = ref('') 

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

  const parents = [
    {
      "parentId": "1",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Successful"
    },
    {
      "parentId": "2",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Successful"
    },
    {
      "parentId": "3",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Failed"
    },
    {
      "parentId": "4",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Failed"
    },
    {
      "parentId": "5",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Successful"
    },
    {
      "parentId": "6",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Successful"
    }
  ]

</script>