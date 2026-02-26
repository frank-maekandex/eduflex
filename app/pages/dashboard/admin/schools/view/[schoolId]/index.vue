<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: "admin-dashboard",
  title: 'School Details'
})

const confirmSuspend = ref(false)
const showSuspendSuccess = ref(false)
const confirmDelete = ref(false)
const showDeleteSuccess = ref(false)

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

const handleDelete = () => {
  confirmDelete.value = false  
  showDeleteSuccess.value = true
}

const openConfirmDelete = () => {
  confirmDelete.value = true
}

const closeConfirmDelete = () => {
  showDeleteSuccess.value = false
}

const route = useRoute();

const schoolId = route.params.schoolId


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
                <Label class="text-gray-100 font-normal">School Name</Label>
                <h2 class="font-semibold">Michael Owodunmi</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">School ID</Label>
                <h2 class="font-semibold">123456</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Email</Label>
                <h2 class="font-semibold">owodunmi1991@gmail.com</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Phone Number</Label>
                <h2 class="font-semibold">4</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">School Type</Label>
                <h2 class="font-semibold">13 Nov, 2025</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">School Category</Label>
                <h2 class="font-semibold">Verified</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">CAC Registration Number</Label>
                <h2 class="font-semibold">Avtive</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">License/Approval Number</Label>
                <h2 class="font-semibold">₦2,760,000</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Representative Name</Label>
                <h2 class="font-semibold">********112345</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Accreditation Document</Label>
                <h2 class="font-semibold">incomeproof.jpeg   View</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Representative Role</Label>
                <h2 class="font-semibold">Samson Owodunmi</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Representative Contact</Label>
                <h2 class="font-semibold">080234567890</h2>
            </div>
            <div>
                <Label class="text-gray-100 font-normal">Representative Contact</Label>
                <h2 class="font-semibold">₦1,760,000</h2>
            </div>
        </div>

        

        <Field class="mt-10 max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2">
            <NuxtLink :to="`/dashboard/admin/schools/view/${schoolId}/students`">
                <Button type="submit" variant="outline" class="w-full">
                    View Linked Students
                </Button>
            </NuxtLink>
            <Button type="submit" variant="ghost" @click.prevent="openConfirmSuspend">
                Suspend School
            </Button>
            <Button type="submit" variant="ghost" @click.prevent="openConfirmDelete">
                Delete School Account
            </Button>
        </Field>
        </FieldGroup>
    </form>
    </div>
    </div>

    <AlertModal
        v-model="confirmSuspend"
        title="You are about to suspend this school"
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
        v-model="confirmDelete"
        title="You are about to delete this school"
        icon="mingcute:question-fill" 
        iconColor="text-red-600"
    >
        <form>
        <FieldGroup>

            <Field class="grid gap-1 w-full">
            <Input type="text" placeholder="Reason" />
            </Field>

            <Field>
            <Button variant="ghost" class="w-full rounded-full" @click.prevent="handleDelete">
                Delete
            </Button>
            </Field>
        </FieldGroup>
        </form>
    </AlertModal>

    <AlertModal
        v-model="showDeleteSuccess"
        title="School Deleted!"
        description="A feedback has been sent to the school."
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <Button class="w-full" @click="closeConfirmDelete">
            Close
        </Button>
    </AlertModal>
</template>