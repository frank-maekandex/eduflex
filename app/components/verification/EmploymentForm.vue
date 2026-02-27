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
                Enter your Employment information
            </h1>
        </div>
        <Field class="grid gap-1">
            <FieldLabel for="bvn">
              Employment Type
            </FieldLabel>
            <Select>
                <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a verification type" />
                </SelectTrigger>
                <SelectContent class="bg-white">
                    <SelectGroup>
                        <SelectLabel>Select Employment Type</SelectLabel>
                        <SelectItem value="employed">
                            Employed
                        </SelectItem>
                        <SelectItem value="self-employed">
                            Self-Employed
                        </SelectItem>
                        <SelectItem value="freelance">
                            Freelance
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </Field>
        <Field class="max-w-72 mx-auto">
            <Button type="submit" @click="$emit('next')">
                Continue
            </Button>
        </Field>
        <Field class="max-w-72 mx-auto">
            <NuxtLink to="/dashboard/parent">
                <Button type="submit" variant="outline" class="w-full">
                    Verify Later
                </Button>
            </NuxtLink>
        </Field>
    </FieldGroup>
</template>
