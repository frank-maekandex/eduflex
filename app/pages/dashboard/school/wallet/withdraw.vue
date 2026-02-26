<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <div class="flex flex-col max-w-[400px] mx-auto w-full">
        <TitleDesc title="Enter Amount" />

        <form class="flex flex-col gap-4 mt-10">
            <FieldGroup class="gap-4 w-full">
                <Field class="grid gap-1 w-full">
                    <FieldLabel for="amount">
                        Amount
                    </FieldLabel>
                    <Input id="amount" type="number" placeholder="Eg 500000"/>
                </Field>
                <Field class="mt-10 max-w-[250px] mx-auto">
                    <Button type="submit" @click.prevent="submit">
                        Continue
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

definePageMeta({
    layout: "school-dashboard",
    title: 'Withdraw to Verified Account'
})

const submit = () => {
    navigateTo("/dashboard/school/wallet/account")
}

</script>