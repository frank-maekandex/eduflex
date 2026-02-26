<script lang="ts" setup>

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
    "id": "PRT-00411",
    "name": "Michael Owodunmi",
    "email": "michaelowo@gm.com",
    "autoValidation": "Full Match",
    "status": "Verified"
  },
  {
    "id": "PRT-00411",
    "name": "Michael Owodunmi",
    "email": "michaelowo@gm.com",
    "autoValidation": "No Match",
    "status": "Failed"
  },
  {
    "id": "PRT-00411",
    "name": "Michael Owodunmi",
    "email": "michaelowo@gm.com",
    "autoValidation": "Partial",
    "status": "Pending"
  },
  {
    "id": "PRT-00411",
    "name": "Michael Owodunmi",
    "email": "michaelowo@gm.com",
    "autoValidation": "Full Match",
    "status": "Verified"
  },
  {
    "id": "PRT-00411",
    "name": "Michael Owodunmi",
    "email": "michaelowo@gm.com",
    "autoValidation": "Full Match",
    "status": "Pending"
  }
]

</script>

<template>
  <div class="w-full min-h-[58vh] flex flex-col">
    
    <div class="w-full mb-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <div>
            <p class="text-sm font-semibold">School Verifications</p>
        </div>
        
        <div>
          <Search 
            v-model="searchTerm" 
            placeholder="Search Name or ID"
            class="bg-background" 
          />
        </div>
    </div>

    <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
              <TableRow class="bg-background text-left">
                  <TableHead class="capitalize p-3 text-gray-100 font-semibold">ID</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Name</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Contact</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Auto Validation</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Action</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow v-for="parent in parents" :key="parent?.id">
                <TableCell class="capitalize">{{ parent?.id }}</TableCell>
                  <TableCell class="capitalize"> {{ parent?.name }}</TableCell>
                  <TableCell class="capitalize">{{ parent?.email}}</TableCell>
                  <TableCell class="capitalize"><SupportPriorityStatus :status="parent?.autoValidation"/></TableCell>
                  <TableCell class="capitalize"><VerificationStatus :status="parent?.status"/></TableCell>
                  <TableCell class="capitalize">
                    <AdminModalViewSchoolVerification />
                  </TableCell>
              </TableRow>
          </TableBody>
        </Table>
    </div>

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
</template>