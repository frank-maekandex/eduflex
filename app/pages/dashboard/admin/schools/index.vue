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
          title="Total Schools"
          :amount="348"
          icon-name="mdi:user"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />

        <SmallWalletCard 
          title="Verified Schools"
          :amount="234"
          icon-name="mdi:user"
          icon-color-class="text-red-500"
          icon-bg-class="bg-red-100/80"
        />

        <SmallWalletCard 
          title="Pending Schools"
          amount="23"
          icon-name="mdi:user" 
          icon-color-class="text-orange-500"
          icon-bg-class="bg-orange-100/80"
        />

        <SmallWalletCard 
          title="Flagged Schools"
          amount="4"
          icon-name="mdi:user"
          icon-color-class="text-slate-800"
          icon-bg-class="bg-primary/10"
        />
    </div>

    <div>

      <Card class="bg-white rounded-2xl p-6 border-none">
         
          <ParentTitle title="EduFlex Schools" desc="Here are your all schools registered on EduFlex">
            <Search 
              v-model="searchTerm" 
              placeholder="Search Name or ID"
              class="bg-background" 
            />
          </ParentTitle>

          <div class="w-full min-h-[55vh] flex flex-col items-center justify-between overflow-x-auto">
              <Table>
                  <TableHeader>
                      <TableRow class="bg-background text-left">
                          <TableHead class="capitalize p-3 text-gray-100 font-semibold">School ID</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>School Name</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Date Joined</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Students</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Administrator</TableHead>
                          <TableHead class='capitalize p-3 text-gray-100 font-semibold'>Status</TableHead>
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
                          <TableCell class="capitalize"><VerificationStatus :status="parent?.status"/></TableCell>
                          <TableCell class="capitalize flex flex-row  items-center gap-4">
                            <NuxtLink v-if="parent?.status === 'Pending'" :to="`/dashboard/admin/schools/verify/${parent?.parentId}`">
                              <Button size="sm">Verify</Button>
                            </NuxtLink>
                            <NuxtLink v-else :to="`/dashboard/admin/schools/view/${parent?.parentId}`">
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
    title="You are about to suspend this School"
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
    title="School Suspended!"
    description="You have suspended this school and school can longer make use of this platform."
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmSuspend">
      Close
    </Button>
  </AlertModal>


  <AlertModal
    v-model="confirmReject"
    title="You are about to reject this school"
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
    title="School Rejected!"
    description="A feedback has been sent to the school"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmReject">
      Close
    </Button>
  </AlertModal>

  <AlertModal
    v-model="confirmReactivate"
    title="You are about to reactivate this school"
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
    title="School Reactivated!"
    icon="ph:seal-check-fill"
    iconColor="text-primary"
  >
    <Button class="w-full" @click="closeConfirmReactivate">
      Close
    </Button>
  </AlertModal>

</template>