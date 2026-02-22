<template>
  <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Fee Structures" desc="Manage your fee structures.">
        <div class="flex flex-row items-center gap-2">
            <NuxtLink to="/dashboard/school/fee-structure/upload">
                <Button variant="outline" class="w-full">
                  Upload Fee Structure
                </Button>
            </NuxtLink>
            <NuxtLink to="/dashboard/school/fee-structure/add">
                <Button type="submit" class="w-full">
                    Add Fee Structure
                </Button>
            </NuxtLink>
        </div>
    </ParentTitle>

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow className="bg-background text-left">
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Student Name</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Class</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Gender</TableHead>
                    <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Term</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Added By</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                    <TableHead className="capitalize p-3 text-gray-100 font-semibold">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="student in students" :key="student?.id">
                    <TableCell class="capitalize"> {{ ReduceTextLength(student?.name, 40) }}</TableCell>
                    <TableCell class="capitalize">{{ student?.class }}</TableCell>
                    <TableCell class="capitalize"> {{ student?.gender }}</TableCell>
                    <TableCell class="capitalize"> {{ student?.term }}</TableCell>
                    <TableCell class="capitalize"> {{ ReduceTextLength(student?.added_by, 40) }}</TableCell>
                    <TableCell class="capitalize"><VerificationStatus :status="student.status" /></TableCell>
                    <TableCell class="capitalize">
                        <NuxtLink to="/dashboard/school/fee-structure/edit">
                            <Button variant="outline">
                                Edit
                            </Button>
                        </NuxtLink>
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
    layout: "school-dashboard",
    title: 'Fee Structure'
  })

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

  const students = [
    {
      "id": "std_001",
      "name": "David Michael",
      "age": "10yrs",
      "gender": "Male",
      "term": "Second",
      "added_by": "Michael Owodunmi",
      "school": "Sunrise Academy",
      "class": "JSS 1",
      "status": "Verified",
      "loanAmount": 240000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_002",
      "name": "Blessing Michael",
      "age": "14yrs",
      "gender": "Male",
      "term": "Second",
      "added_by": "Michael Owodunmi",
      "school": "Victory High School",
      "class": "JSS 1",
      "status": "Pending",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_003",
      "name": "Samuel Michael",
      "age": "11yrs",
      "gender": "Male",
      "term": "Second",
      "added_by": "Michael Owodunmi",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "status": "Verified",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    },
    {
      "id": "std_004",
      "name": "Peace Michael",
      "age": "11yrs",
      "gender": "Male",
      "term": "Second",
      "added_by": "Michael Owodunmi",
      "school": "Harmony Primary School",
      "class": "JSS 1",
      "status": "Pending",
      "loanAmount": 180000,
      "date": "22 Oct 2025",
    }
  ]

</script>