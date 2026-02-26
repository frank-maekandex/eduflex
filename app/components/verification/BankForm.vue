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

</script>

<template>
    <FieldGroup>
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">
                Enter Your Bank Details
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="number">
                Card Number
            </FieldLabel>
            <Input id="number" type="number" placeholder="2322 3232 3223 3232"/>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="holder">
                Card Holder
            </FieldLabel>
            <Input id="holder" type="text" placeholder="First bank" />
        </Field>
        <div class="flex flex-row gap-2">
           <Field class="grid gap-1">
                <FieldLabel for="cvv">
                    CVV
                </FieldLabel>
                <Input id="cvv" type="number" placeholder="789" />
            </Field> 
            <Field class="grid gap-1">
                <FieldLabel>
                    Expiry Month
                </FieldLabel>
                <Select>
                    <SelectTrigger class="w-full">
                        <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Expiry month</SelectLabel>
                            <SelectItem value="jan">
                                Jan
                            </SelectItem>
                            <SelectItem value="feb">
                                Feb
                            </SelectItem>
                            <SelectItem value="mar">
                                Mar
                            </SelectItem>
                            <SelectItem value="apr">
                                Apr
                            </SelectItem>
                            <SelectItem value="may">
                                May
                            </SelectItem>
                            <SelectItem value="jun">
                                Jun
                            </SelectItem>
                            <SelectItem value="jul">
                                Jul
                            </SelectItem>
                            <SelectItem value="aug">
                                Aug
                            </SelectItem>
                            <SelectItem value="sept">
                                Sept
                            </SelectItem>
                            <SelectItem value="oct">
                                Oct
                            </SelectItem>
                            <SelectItem value="nov">
                                Nov
                            </SelectItem>
                            <SelectItem value="dec">
                                Dec
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
            <Field class="grid gap-1">
                <FieldLabel>
                    Year
                </FieldLabel>
                <Select>
                    <SelectTrigger class="w-full">
                        <SelectValue placeholder="year" />
                    </SelectTrigger>
                    <SelectContent class="bg-white">
                        <SelectGroup>
                            <SelectLabel>Expiry year</SelectLabel>
                            <SelectItem value="2026">
                                2026
                            </SelectItem>
                            <SelectItem value="2027">
                                2027
                            </SelectItem>
                            <SelectItem value="2028">
                                2028
                            </SelectItem>
                            <SelectItem value="2029">
                                2029
                            </SelectItem>
                            <SelectItem value="2030">
                                2030
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
        </div>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" @click="$emit('next')">
                Continue
            </Button>
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" variant="outline">
                Verify Later
            </Button>
        </Field>
    </FieldGroup>
</template>
