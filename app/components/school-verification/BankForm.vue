<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const showSuccess = ref(false)

const handleConfirm = () => {
  showSuccess.value = true
}

</script>

<template>
    <FieldGroup>
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">
                Bank Details
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="number">
                School Bank Account Number
            </FieldLabel>
            <Input id="number" type="number" placeholder="Enter account number here"/>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel>
              Bank Name
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>Banks</SelectLabel>
                        <SelectItem value="first_bank">
                            First Bank
                        </SelectItem>
                        <SelectItem value="access_bank">
                            Access Bank
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="name">
                Account Name
            </FieldLabel>
            <Input id="name" type="text" placeholder="Enter account name here" />
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
        <NuxtLink to="/dashboard/school">
            <Button class="w-full rounded-full">
                Go To Dashboard
            </Button>
        </NuxtLink>
    </AlertModal>

</template>
