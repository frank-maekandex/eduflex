<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type LoanStatus = 'Pending' | 'Active' | 'Inactive'

interface Student {
  id: string
  name: string
  school: string
  grade: string
  avatar: string
  loanStatus: LoanStatus
}

const currentPage = ref(1)
const totalPages = ref(1000)

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage

  console.log('Page changed to', newPage)
  // Fetch new data here based on the page
}

definePageMeta({
    layout: "admin-dashboard",
    title: "Manage Schools",
})


const confirmDecline = ref(false)
const showDeclineSuccess = ref(false)
const confirmApprove = ref(false)
const showApproveSuccess = ref(false)

const handleDecline = () => {
  confirmDecline.value = false  
  showDeclineSuccess.value = true
}

const openConfirmDecline = () => {
  confirmDecline.value = true
}

const closeConfirmDecline = () => {
  showDeclineSuccess.value = false
}

const openConfirmApprove = () => {
  confirmApprove.value = true
}

const closeConfirmApprove = () => {
  showApproveSuccess.value = false
}

const handleApprove = () => {
  confirmApprove.value = false  
  showApproveSuccess.value = true
}

const parents = [
    {
      "parentId": "1",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Pending"
    },
    {
      "parentId": "2",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": null,
      "loanStatus": null,
      "status": "Pending"
    },
    {
      "parentId": "3",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Verified"
    },
    {
      "parentId": "4",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Suspended"
    },
    {
      "parentId": "5",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Pending"
    },
    {
      "parentId": "6",
      "fullName": "Michael Owodunni",
      "dateJoined": "2025-11-13",
      "students": 4,
      "loanStatus": "Active",
      "status": "Verified"
    }
  ]

</script>

<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <ParentTitle title="Withdrawal Requests" desc="Monitor balances, transactions, withdrawals, and wallet activity" />

    <div class="w-full flex-1 flex flex-col items-center justify-between overflow-x-auto">
        <Table>
          <TableHeader>
              <TableRow class="bg-background text-left">
                  <TableHead class="capitalize p-3 text-gray-100 font-semibold">Req ID</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>School</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Date</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Amount</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Balance</TableHead>
                  <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Action</TableHead>
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
                  <TableCell class="capitalize flex flex-row  items-center gap-4">
                    <Button size="sm" @click="openConfirmApprove">Approve</Button>
                    <Button size="sm" variant="ghost" @click="openConfirmDecline">Decline</Button>
                    
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

  <AlertModal
    v-model="confirmDecline"
    title="Are you sure you want to decline this withdrawal request?"
    icon="mingcute:question-fill" 
    iconColor="text-red-600"
  >
    <form>
      <FieldGroup>

        <Field class="grid gap-1 w-full">
          <Input type="text" placeholder="Reason" />
        </Field>

        <Field>
          <Button variant="ghost" class="w-full rounded-full" @click.prevent="handleDecline">
            Decline
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </AlertModal>

  <AlertModal
    v-model="showDeclineSuccess"
    title="Withdrawal Declined!"
    description="You have declined this withdrawal request and a feedback has been sent to the school."
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmDecline">
      Close
    </Button>
  </AlertModal>

  <AlertModal
    v-model="confirmApprove"
    title="Are you sure you want to approve this withdrawal?"
    icon="mingcute:question-fill" 
    iconColor="text-primary"
  >
    <form>
      <FieldGroup>

        <Field class="grid gap-1 w-full">
          <Input type="text" placeholder="Reason" />
        </Field>

        <Field>
          <Button variant="outline" class="w-full rounded-full" @click.prevent="handleApprove">
            Approve
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </AlertModal>

  <AlertModal
    v-model="showApproveSuccess"
    title="Withdrawal Approved!"
    description="Funds will be sent to the school account"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmApprove">
      Close
    </Button>
  </AlertModal>

</template>