<template>
  <div class="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <div class="flex flex-col max-w-[700px] mx-auto w-full">
        <TitleDesc title="Enter Account Details" />

        <div class="mt-6">
            <form>
                <FieldGroup>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Field class="grid gap-1">
                            <FieldLabel for="account">
                                Account Number
                            </FieldLabel>
                            <Input id="account" type="number" placeholder="23048483948" required />
                        </Field>
                        <Field class="grid gap-1">
                            <FieldLabel>
                                Bank Name
                            </FieldLabel>
                            <Select>
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Select your bank" />
                                </SelectTrigger>
                                <SelectContent class="bg-white">
                                    <SelectGroup>
                                        <SelectLabel>Banks</SelectLabel>
                                        <SelectItem value="3 months">
                                            Union Bank
                                        </SelectItem>
                                        <SelectItem value="6 months">
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
                            <Input id="name" type="text" placeholder="Enter Account Name" required />
                        </Field>
                    </div>

                    <Field class="mt-10 max-w-[250px] mx-auto">
                        <Button type="submit" @click.prevent="submit">
                            Confirm Withdrawal
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
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

}

</script>