<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
   
      <WalletCard 
          title="Active Loan Balance"
          :amount="displayCurrency(Number(240000), 'NGN')"
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
          title="Total Completed Loan"
          :amount="displayCurrency(Number(380000), 'NGN')"
          icon-name="streamline-plump:wallet-solid"
          icon-color-class="text-primary"
          icon-bg-class="bg-primary/10"
      />

  </div>

  <div class="w-full min-h-[60vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Loans" desc="Manage your loan applications, repayment schedules, and disbursement history.">
      <NuxtLink to="/dashboard/parent/loans/apply-for-loan">
        <Button @click="applyLoan">
          Apply for New Loan
        </Button>
      </NuxtLink>
    </ParentTitle>

    <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow class="bg-background text-left">
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Student Name</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Age</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>School</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Class</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Amount</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="children in childrens" :key="children?.id">
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.name, 40) }}</TableCell>
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.school, 40) }}</TableCell>
                    <TableCell class="capitalize">{{ displayCurrency(Number(children?.loanAmount), 'NGN') }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.progress }}</TableCell>
                    <TableCell class="capitalize">{{ children?.date }}</TableCell>
                    <TableCell class="capitalize"><TransactionStatus :status="children?.loanStatus" /></TableCell>
                    <TableCell class="capitalize">
                      <ParentModalLoanInfo :children="children" />
                    </TableCell>
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
    layout: "parent-dashboard",
    title: 'Loans'
  })

  const applyLoan = () => {
    console.log('Apply for new loan')
  }

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

  const childrens = [
    {
      "id": "std_001",
      "name": "David Michael",
      "school": "Sunrise Academy",
      "loanStatus": "Active",
      "loanAmount": 240000,
      "date": "22 Oct 2025",
      "progress": "60%"
    },
    {
      "id": "std_002",
      "name": "Blessing Michael",
      "age": "14yrs",
      "school": "Victory High School",
      "class": "JSS 1",
      "loanStatus": "Inactive",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
      "progress": "80%"
    },
    {
      "id": "std_003",
      "name": "Samuel Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "Active",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
      "progress": "40%"
    },
    {
      "id": "std_004",
      "name": "Peace Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "Inactive",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
      "progress": "60%"
    }
  ]

</script>