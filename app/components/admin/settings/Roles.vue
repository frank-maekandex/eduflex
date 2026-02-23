<script lang="ts" setup>

const searchTerm = ref('') 
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
    "roleName": "Super Admin",
    "users": 3,
    "permissions": "Full system access, all modules",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "id": 2,
    "roleName": "Finance Admin",
    "users": 3,
    "permissions": "Loans, Wallets, Disbursements, Reports",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "id": 3,
    "roleName": "Verification Admin",
    "users": 15,
    "permissions": "User verification, School verification",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "id": 4,
    "roleName": "Support Admin",
    "users": 12,
    "permissions": "Support tickets, User communication",
    "status": "Active",
    "slaTimer": "00:00:00"
  },
  {
    "id": 5,
    "roleName": "Read-only Auditor",
    "users": 3,
    "permissions": "View-only access to all modules",
    "status": "Active",
    "slaTimer": "00:00:00"
  }
]

</script>

<template>
  <div class="w-full min-h-[55vh] flex flex-col">
    
    <div class="w-full mb-4 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <div>
            <p class="text-sm">Define and manage role-based access control</p>
        </div>
        
        <div>
            <Search 
              v-model="searchTerm" 
              placeholder="Search Name or ID"
              class="bg-background" 
            />
        </div>
    </div>

    <div className="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow class="bg-background text-left">
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">Role Name</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Users</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Permissions</TableHead>
                    <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                    <TableHead class="capitalize p-3 text-gray-100 font-semibold">SLA Timer</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="children in childrens" :key="children?.id">
                    <TableCell class="capitalize"> {{ ReduceTextLength(children?.roleName, 40) }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.users }}</TableCell>
                    <TableCell class="capitalize"> {{ children?.permissions }}</TableCell>
                    <TableCell class="capitalize"><TransactionStatus :status="children?.status" /></TableCell>
                    <TableCell class="capitalize">{{ children?.slaTimer }}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>

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
</template>