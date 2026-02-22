<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: "admin-dashboard",
  title: 'Loans'
})

const showSuccess = ref(false)

// Create a function to handle the transition
const handleSuccess = () => {
  showSuccess.value = true 
}

const route = useRoute();

const parentId = route.params.parentId

const confirmApprove = ref(false)
const showApproveSuccess = ref(false)
const confirmReject = ref(false)
const showRejectSuccess = ref(false)

const openConfirmApprove = () => {
  confirmApprove.value = true
}

const closeconfirmApprove = () => {
  showApproveSuccess.value = false
}

const handleApprove = () => {
  confirmApprove.value = false  
  showApproveSuccess.value = true
}

const handleReject = () => {
  confirmReject.value = false  
  showRejectSuccess.value = true
}

const openConfirmReject = () => {
  confirmReject.value = true
}

const closeconfirmReject = () => {
  showRejectSuccess.value = false
}

// const { data, pending } = await useFetch(`/api/parents/${parentId}`, {
//   key: `parent-view-${parentId}` // Prevents data caching issues between views
// });

</script>

<template>
    <div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">

        <div>
            <form>
                <FieldGroup>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div>
                        <Label class="text-gray-100 font-normal">Loan ID</Label>
                        <h2 class="font-semibold">Michael Owodunmi</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Parent Name</Label>
                        <h2 class="font-semibold">123456</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Student Name</Label>
                        <h2 class="font-semibold">owodunmi1991@gmail.com</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Phone Number</Label>
                        <h2 class="font-semibold">4</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">School Name</Label>
                        <h2 class="font-semibold">13 Nov, 2025</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Loan Amount</Label>
                        <h2 class="font-semibold">Verified</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Name of Guarantor</Label>
                        <h2 class="font-semibold">Avtive</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Guarantor Contact</Label>
                        <h2 class="font-semibold">₦2,760,000</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Interest Rate</Label>
                        <h2 class="font-semibold">********112345</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Tenure</Label>
                        <h2 class="font-semibold">3 Month</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Status</Label>
                        <h2 class="font-semibold">Samson Owodunmi</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Date Applied</Label>
                        <h2 class="font-semibold">080234567890</h2>
                    </div>
                </div>

                

                <Field class="mt-10 max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <Button type="submit" @click.prevent="openConfirmApprove">
                        Approve Loan
                    </Button>
                    <Button type="submit" variant="ghost" @click.prevent="openConfirmReject">
                        Reject Loan
                    </Button>
                </Field>
                </FieldGroup>
            </form>
        </div>
    </div>

    <AlertModal
        v-model="confirmApprove"
        title="Are you sure you want to approve this loan?"
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
        title="Loan Approved!"
        description="A feedback has been sent to the parent"
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <Button class="w-full" @click="closeconfirmApprove">
        Close
        </Button>
    </AlertModal>

    <AlertModal
        v-model="confirmReject"
        title="Are you sure you want to reject this loan application?"
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
        title="Loan Rejected!"
        description="You have rejected this loan application and a feedback has been sent to the parent."
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <Button class="w-full" @click="closeconfirmReject">
        Close
        </Button>
    </AlertModal>
</template>