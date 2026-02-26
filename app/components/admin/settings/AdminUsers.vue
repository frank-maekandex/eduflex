<script lang="ts" setup>

  const currentPage = ref(1)
  const totalPages = ref(1000)

  const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    console.log('Page changed to', newPage)
    // Fetch new data here based on the page
  }

  const childrens = [
  {
    "id": 1,
    "name": "Michael Owodunmi",
    "email": "michaelowo@eduflex.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "00:00:00"
  },
  {
    "id": 2,
    "name": "Michael Owodunmi",
    "email": "michaelowo@eduflex.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "00:00:00"
  },
  {
    "id": 3,
    "name": "Michael Owodunmi",
    "email": "michaelowo@eduflex.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "00:00:00"
  },
  {
    "id": 4,
    "name": "Michael Owodunmi",
    "email": "michaelowo@eduflex.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "00:00:00"
  },
  {
    "id": 5,
    "name": "Michael Owodunmi",
    "email": "michaelowo@eduflex.com",
    "role": "Super Admin",
    "status": "Active",
    "lastLogin": "00:00:00"
  }
]

</script>

<template>
  <div class="w-full min-h-[55vh] flex flex-col">
    
    <div class="w-full mb-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <div>
          <p class="text-sm">Manage admin user accounts and role assignments</p>
        </div>
        
        <div>
          <AdminModalAddAdmin />
        </div>
    </div>

     <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow class="bg-background text-left">
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Name</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Email</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Role</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Last Login</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="children in childrens" :key="children?.id">
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.name, 40) }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.email }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.role }}</TableCell>
                    <TableCell class="capitalize"><TransactionStatus :status="children?.status" /></TableCell>
                    <TableCell class="capitalize">{{ children?.lastLogin }}</TableCell>
                    <TableCell class="capitalize">
                      <AdminModalViewAdmin :children="children" />
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