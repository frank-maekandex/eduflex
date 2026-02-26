<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Guarantors" desc="Here are all guarantors linked to this parent">
      <Search 
        v-model="searchTerm" 
        placeholder="Search Name or ID"
        class="bg-background" 
      />
    </ParentTitle>

    <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow class="bg-background text-left">
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Guarantor ID</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Name</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Relationship</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Parent Linked</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Date</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="history in histories" :key="history?.id">
                    <TableCell class="capitalize"> {{ history?.guarantorId }}</TableCell>
                    <TableCell class="capitalize"> {{ history?.name }}</TableCell>
                    <TableCell class="capitalize"> {{ history?.relationship }}</TableCell>
                    <TableCell class="capitalize">{{ history?.parentLinked }}</TableCell>
                    <TableCell class="capitalize">{{ history?.date}}</TableCell>
                    <TableCell class="capitalize"><AcceptedStatus :status="history?.status" /></TableCell>
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
    title: 'Guarantor Info'
  })

const searchTerm = ref('') 
const route = useRoute();

const parentId = route.params.parentId

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
      "guarantorId": "123456",
      "name": "Israel Ikechukwu",
      "relationship": "Brother",
      "parentLinked": "Michael Owodunni",
      "date": "2025-11-13",
      "status": "Accepted"
    },
    {
      "id": 2,
      "guarantorId": "123456",
      "name": "Israel Ikechukwu",
      "relationship": "Brother",
      "parentLinked": "Michael Owodunni",
      "date": "2025-11-13",
      "status": "Accepted"
    },
    {
      "id": 3,
      "guarantorId": "123456",
      "name": "Israel Ikechukwu",
      "relationship": "Brother",
      "parentLinked": "Michael Owodunni",
      "date": "2025-11-13",
      "status": "Accepted"
    },
    {
      "id": 4,
      "guarantorId": "123456",
      "name": "Israel Ikechukwu",
      "relationship": "Brother",
      "parentLinked": "Michael Owodunni",
      "date": "2025-11-13",
      "status": "Rejected"
    }
  ]

</script>