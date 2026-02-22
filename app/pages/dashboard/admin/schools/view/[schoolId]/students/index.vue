<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Student List" desc="Here is the details of the students registered by this parent" />

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow className="bg-background text-left">
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Student Name</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Age</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>School</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Class</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Loan Amount</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="children in childrens" :key="children?.id">
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.name, 40) }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.age }}</TableCell>
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.school, 40) }}</TableCell>
                    <TableCell class="capitalize">{{ children?.class }}</TableCell>
                    <TableCell class="capitalize"><LoanStatus :status="children?.loanStatus" /></TableCell>
                    <TableCell class="capitalize">{{ displayCurrency(Number(children?.loanAmount), 'NGN') }}</TableCell>
                    <TableCell class="capitalize">
                      <AdminModalViewSchoolStudent :children="children" />
                    </TableCell>
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
    title: 'Linked Students'
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

  const childrens = [
    {
      "id": "std_001",
      "name": "David Michael",
      "age": "10yrs",
      "school": "Sunrise Academy",
      "class": "JSS 1",
      "loanStatus": "Ongoing",
      "loanAmount": 240000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_002",
      "name": "Blessing Michael",
      "age": "14yrs",
      "school": "Victory High School",
      "class": "JSS 1",
      "loanStatus": "Pending",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_003",
      "name": "Samuel Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "No Loan",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_004",
      "name": "Peace Michael",
      "age": "11yrs",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "loanStatus": "No Loan",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    }
  ]

</script>