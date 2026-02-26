<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: "admin-dashboard",
  title: 'Parent Details'
})

const showSuccess = ref(false)

// Create a function to handle the transition
const handleSuccess = () => {
  showSuccess.value = true 
}

const route = useRoute();

const parentId = route.params.parentId

const confirmVerify = ref(false)
const showVerifySuccess = ref(false)
const confirmReject = ref(false)
const showRejectSuccess = ref(false)

const openConfirmVerify = () => {
  confirmVerify.value = true
}

const closeconfirmVerify = () => {
  showVerifySuccess.value = false
}

const handleVerify = () => {
  confirmVerify.value = false  
  showVerifySuccess.value = true
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
    <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">

        <div>
            <form>
                <FieldGroup>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div>
                        <Label class="text-gray-100 font-normal">Full Name</Label>
                        <h2 class="font-semibold">Michael Owodunmi</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Parent ID</Label>
                        <h2 class="font-semibold">123456</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Email</Label>
                        <h2 class="font-semibold">owodunmi1991@gmail.com</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Linked Students</Label>
                        <h2 class="font-semibold">4</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Date Joined</Label>
                        <h2 class="font-semibold">13 Nov, 2025</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Status</Label>
                        <h2 class="font-semibold">Verified</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Loan Status</Label>
                        <h2 class="font-semibold">Avtive</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Loan Amount</Label>
                        <h2 class="font-semibold">₦2,760,000</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">NIN</Label>
                        <h2 class="font-semibold">********112345</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Proof of Income</Label>
                        <h2 class="font-semibold">incomeproof.jpeg   View</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Name of Guarantor</Label>
                        <h2 class="font-semibold">Samson Owodunmi</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Guarantor Contact</Label>
                        <h2 class="font-semibold">080234567890</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Amount Repaid</Label>
                        <h2 class="font-semibold">₦1,760,000</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Amount Remaining</Label>
                        <h2 class="font-semibold">₦1,000,000</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Loan Amount</Label>
                        <h2 class="font-semibold">₦2,760,000</h2>
                    </div>
                    <div>
                        <Label class="text-gray-100 font-normal">Next Repayment</Label>
                        <h2 class="font-semibold">5 Dec, 2025</h2>
                    </div>
                </div>

                

                <Field class="mt-10 max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <Button type="submit" @click.prevent="openConfirmVerify">
                        Verify Now
                    </Button>
                    <Button type="submit" variant="ghost" @click.prevent="openConfirmReject">
                        Reject
                    </Button>
                </Field>
                </FieldGroup>
            </form>
        </div>
    </div>

    <AlertModal
        v-model="confirmVerify"
        title="Are you sure you want to verify this parent?"
        icon="mingcute:question-fill" 
        iconColor="text-primary"
    >
        <form>
            <FieldGroup>

                <Field class="grid gap-1 w-full">
                <Input type="text" placeholder="Reason" />
                </Field>

                <Field>
                <Button variant="outline" class="w-full rounded-full" @click.prevent="handleVerify">
                    Verify
                </Button>
                </Field>
            </FieldGroup>
        </form>
    </AlertModal>

    <AlertModal
        v-model="showVerifySuccess"
        title="Parent Verified!"
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <Button class="w-full" @click="closeconfirmVerify">
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
        <Button class="w-full" @click="closeconfirmReject">
        Close
        </Button>
    </AlertModal>
</template>