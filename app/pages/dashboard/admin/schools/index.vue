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
const searchTerm = ref('') 

definePageMeta({
    layout: "admin-dashboard",
    title: "Manage Schools",
})


const confirmSuspend = ref(false)
const showSuspendSuccess = ref(false)
const confirmReject = ref(false)
const showRejectSuccess = ref(false)
const confirmReactivate = ref(false)
const showReactivateSuccess = ref(false)

const handleSuspend = () => {
  confirmSuspend.value = false  
  showSuspendSuccess.value = true
}

const openConfirmSuspend = () => {
  confirmSuspend.value = true
}

const closeConfirmSuspend = () => {
  showSuspendSuccess.value = false
}

const handleReject = () => {
  confirmReject.value = false  
  showRejectSuccess.value = true
}

const openConfirmReject = () => {
  confirmReject.value = true
}

const closeConfirmReject = () => {
  showRejectSuccess.value = false
}

const openConfirmReactivate = () => {
  confirmReactivate.value = true
}

const closeConfirmReactivate = () => {
  showReactivateSuccess.value = false
}

const handleReactivate = () => {
  confirmReactivate.value = false  
  showReactivateSuccess.value = true
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
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
       <SmallWalletCard 
          title="Total Fees Received"
          :amount="displayCurrency(Number(500000), 'NGN')"
          icon-name="solar:banknote-2-bold"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="Active  Students Loans"
          :amount="displayCurrency(Number(50000), 'NGN')"
          icon-name="solar:banknote-2-bold"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="Pending Disbursements"
          amount="Nov 30, 2025"
          icon-name="lets-icons:date-range-fill" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Total Enrolled Students"
          amount="4"
          icon-name="fluent:hat-graduation-20-filled"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="EduFlex Parent/Guardians" desc="Here are your all parents/guardians registered on EduFlex">
            <Search 
              v-model="searchTerm" 
              placeholder="Search Name or ID"
              class="bg-background" 
            />
          </ParentTitle>

          <div className="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow className="bg-background text-left">
                          <TableHead className="capitalize p-3 text-gray-100 font-semibold">Parent ID</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Full Name</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Date Joined</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Students</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Loan Status</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
                          <TableHead className='capitalize p-3 text-gray-100 font-semibold'>Action</TableHead>
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
                          <TableCell class="capitalize">
                            <LoanStatus v-if="parent?.loanStatus" :status="parent?.loanStatus"/>
                            <span v-else>-</span>
                          </TableCell>
                          <TableCell class="capitalize"><VerificationStatus :status="parent?.status"/></TableCell>
                          <TableCell class="capitalize flex flex-row  items-center gap-4">
                            <NuxtLink v-if="parent?.status === 'Pending'" :to="`/dashboard/admin/parents/verify/${parent?.parentId}`">
                              <Button size="sm">Verify</Button>
                            </NuxtLink>
                            <NuxtLink v-else :to="`/dashboard/admin/parents/view/${parent?.parentId}`">
                              <Button size="sm" variant="outline">View</Button>
                            </NuxtLink>

                            <Button size="sm" variant="ghost" v-if="parent?.status === 'Pending'" class="min-w-24" @click.prevent="openConfirmReject">Reject</Button>
                            <Button size="sm" variant="ghost" v-else-if="parent?.status === 'Verified'" class="min-w-24" @click.prevent="openConfirmSuspend">Suspend</Button>
                            <Button size="sm" variant="outline" v-else-if="parent?.status === 'Suspended'" class="min-w-24" @click.prevent="openConfirmReactivate">Reactivate</Button>
                            
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div> 
      </Card>
    </div>
  </div>

  <AlertModal
    v-model="confirmSuspend"
    title="You are about to suspend this parent"
    icon="mingcute:question-fill" 
    iconColor="text-red-600"
  >
    <form>
      <FieldGroup>

        <Field class="grid gap-1 w-full">
          <Input type="text" placeholder="Reason" />
        </Field>

        <Field>
          <Button variant="ghost" class="w-full rounded-full" @click.prevent="handleSuspend">
            Suspend
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </AlertModal>

  <AlertModal
    v-model="showSuspendSuccess"
    title="Parent Suspended!"
    description="You have suspended this parent and parent can longer make use of this platform."
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmSuspend">
      Close
    </Button>
  </AlertModal>


  <AlertModal
    v-model="confirmReject"
    title="You are about to reject this parent"
    icon="mingcute:question-fill" 
    iconColor="text-red-600"
  >
    <form>
      <FieldGroup>

        <Field class="grid gap-1 w-full">
          <Input type="text" placeholder="Reason" />
        </Field>

        <Field>
          <Button variant="ghost" class="w-full rounded-full" @click.prevent="handleReject">
            Reject
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </AlertModal>

  <AlertModal
    v-model="showRejectSuccess"
    title="Parent Rejected!"
    description="A feedback has been sent to the parent"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmReject">
      Close
    </Button>
  </AlertModal>

  <AlertModal
    v-model="confirmReactivate"
    title="You are about to reactivate this parent"
    icon="mingcute:question-fill" 
    iconColor="text-primary"
  >
    <form>
      <FieldGroup>

        <Field class="grid gap-1 w-full">
          <Input type="text" placeholder="Reason" />
        </Field>

        <Field>
          <Button variant="outline" class="w-full rounded-full" @click.prevent="handleReactivate">
            Reactivate
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </AlertModal>

  <AlertModal
    v-model="showReactivateSuccess"
    title="Parent Reactivated!"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmReactivate">
      Close
    </Button>
  </AlertModal>

</template>