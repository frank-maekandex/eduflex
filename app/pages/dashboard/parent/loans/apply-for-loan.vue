<script lang="ts" setup>
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

definePageMeta({
    layout: "parent-dashboard",
    title: 'Apply For Loan'
})

const handleProcess = () => {
    navigateTo('/dashboard/parent/loans/apply-for-loan-next')
}
</script>

<template>
<div className="w-full min-h-[82vh] flex flex-col flex-1 bg-white rounded-xl p-4 md:p-6">
    <TitleDesc title="Apply For Loan" />

    <div>
        <form>
            <FieldGroup>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field class="grid gap-1">
                        <FieldLabel>
                        Select school
                        </FieldLabel>
                        <Select>
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select a school" />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectLabel>schools</SelectLabel>
                                    <SelectItem value="f">
                                        federal college
                                    </SelectItem>
                                    <SelectItem value="b">
                                        boys college
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel for="amount">
                            Amount
                        </FieldLabel>
                        <Input id="amount" type="number" placeholder="Enter amount here" required />
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel>
                            Repayment Frequency
                        </FieldLabel>
                        <Select>
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectLabel>Repayment Frequency</SelectLabel>
                                    <SelectItem value="3 months">
                                        3 months
                                    </SelectItem>
                                    <SelectItem value="6 months">
                                        6 months
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field class="grid gap-1">
                        <FieldLabel>
                           Tenure
                        </FieldLabel>
                        <Select>
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select a tenure" />
                            </SelectTrigger>
                            <SelectContent class="bg-white">
                                <SelectGroup>
                                    <SelectLabel>Tenure</SelectLabel>
                                    <SelectItem value="first term">
                                        First Term
                                    </SelectItem>
                                    <SelectItem value="second term">
                                        Second Term
                                    </SelectItem>
                                    <SelectItem value="third term">
                                        Third Term
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>

                <Field class="mt-16 max-w-[450px] mx-auto">
                    <Button type="submit" @click.prevent="handleProcess">
                        Continue
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    </div>
</div>
</template>