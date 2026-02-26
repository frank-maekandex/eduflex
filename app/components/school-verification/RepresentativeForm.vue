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
                School Representative Details
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="name">
                Representative Name
            </FieldLabel>
            <Input id="name" type="text" placeholder="Enter representative name here"/>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel>
              Role
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>School role</SelectLabel>
                        <SelectItem value="proprietor">
                            Proprietor
                        </SelectItem>
                        <SelectItem value="principal">
                            Principal
                        </SelectItem>
                        <SelectItem value="bursar">
                            Bursar
                        </SelectItem>
                        <SelectItem value="teacher">
                            Head Teacher
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="phone">
                Representative Contact Number
            </FieldLabel>
            <Input id="phone" type="tel" placeholder="Enter representative contact here" />
        </Field>
        <Field class="grid gap-1">
            <FieldLabel for="email">
                Representative Email
            </FieldLabel>
            <Input id="email" type="email" placeholder="Enter representative email here" />
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
