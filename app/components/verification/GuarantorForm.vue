<script setup lang="ts">
const showSuccess = ref(false)

const handleConfirm = () => {
  showSuccess.value = true
}

const closeModal = () => {
  showSuccess.value = false
}

</script>

<template>
    <FieldGroup>
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">
                Enter Guarantor Details
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="name">
                Full Name
            </FieldLabel>
            <Input id="name" type="text" placeholder="Enter full name here"/>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="email">
                Email Address
            </FieldLabel>
            <Input id="email" type="email" placeholder="Enter email address here" />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="phone">
                Phone Number
            </FieldLabel>
            <Input id="phone" type="tel" placeholder="Enter phone number here" />
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" @click="handleConfirm">
                Continue
            </Button>
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" variant="outline">
                Verify Later
            </Button>
        </Field>
    </FieldGroup>

    <AlertModal
        v-model="showSuccess"
        title="KYC Details Submitted!"
        description="We will notify you of your verification status soon."
        icon="ph:seal-check-fill"
        iconColor="text-primary"
    >
        <NuxtLink to="/dashboard/parent">
            <Button class="w-full rounded-full">
                Go To Dashboard
            </Button>
        </NuxtLink>
    </AlertModal>

</template>
