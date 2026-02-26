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

const handleFile = (file: File | null) => {
  console.log(file)
}

</script>

<template>
    <FieldGroup>
        <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold">
                Enter your School Information
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel>
              School Type
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a school type" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>School Types</SelectLabel>
                        <SelectItem value="nursery">
                            Nursery
                        </SelectItem>
                        <SelectItem value="primary">
                            Primary
                        </SelectItem>
                        <SelectItem value="secondary">
                            Secondary
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel>
              School Category
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a school category" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>School Category</SelectLabel>
                        <SelectItem value="private">
                            Private
                        </SelectItem>
                        <SelectItem value="public">
                            Public
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="address">
                School Address
            </FieldLabel>
            <Input id="address" type="text" placeholder="Enter school address here" />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="cac">
                CAC Registration Number (RC / BN)
            </FieldLabel>
            <Input id="cac" type="text" placeholder="Enter CAC number here" />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="licence">
                School Licence / Approval Number
            </FieldLabel>
            <Input id="licence" type="text" placeholder="Enter here" />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="licence">
                Upload School Image
            </FieldLabel>
            <UploadInput
                label="(PNG/JPEG ≤ 2MB)"
                accept=".png,.jpg,.jpeg"
                @change="handleFile"
            />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="licence">
                Upload Accreditation Document
            </FieldLabel>
            <UploadInput
                label="(PNG/JPEG ≤ 2MB)"
                accept=".png,.jpg,.jpeg"
                @change="handleFile"
            />
        </Field>
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
